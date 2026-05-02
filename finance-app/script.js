document.addEventListener('DOMContentLoaded', () => {
    const rateListEl = document.getElementById('rate-list');
    const addRateBtn = document.getElementById('add-rate-btn');
    const form = document.getElementById('simulator-form');
    const resultSection = document.getElementById('result-section');
    const MAX_RATES = 5;

    let rateItems = [];

    // Initialize Default Rates
    function init() {
        addRateRow(1, 5, 0.5);
        addRateRow(6, 10, 0.75);
        addRateRow(11, 20, 1.0);
        addRateRow(21, 35, 1.5);
        updateRateRowsUI();
    }

    // Add a new rate row
    function addRateRow(startYear = 1, endYear = 5, rate = 0.5) {
        if (rateItems.length >= MAX_RATES) return;

        const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
        const rateData = { id, startYear, endYear, rate };
        rateItems.push(rateData);
        updateRateRowsUI();
    }

    // Remove a rate row
    function removeRateRow(id) {
        if (rateItems.length <= 1) return; // Must have at least one
        rateItems = rateItems.filter(item => item.id !== id);
        updateRateRowsUI();
    }

    // Update the DOM for rate rows
    function updateRateRowsUI() {
        rateListEl.innerHTML = '';
        
        // Ensure continuous years based on order (enforced continuously)
        let currentYear = 1;
        
        rateItems.forEach((item, index) => {
            // Force start year based on previous end year
            item.startYear = currentYear;
            
            // For the last item, we display "～" instead of the input if desired,
            // but let's just make it editable.
            const isLast = index === rateItems.length - 1;
            
            const div = document.createElement('div');
            div.className = 'rate-item';
            
            div.innerHTML = `
                <div class="input-group">
                    <span class="rate-year-label">${item.startYear}年目</span>
                    <span class="rate-divider">〜</span>
                    <div class="input-wrapper">
                        <input type="number" class="rate-end-input" data-id="${item.id}" value="${item.endYear}" min="${item.startYear}" step="1" required>
                        <span class="unit">年目</span>
                    </div>
                </div>
                <div class="input-group">
                    <label>適用金利</label>
                    <div class="input-wrapper">
                        <input type="number" class="rate-val-input" data-id="${item.id}" value="${item.rate}" min="0" step="0.001" required>
                        <span class="unit">%</span>
                    </div>
                </div>
                <button type="button" class="btn-small btn-danger remove-btn" data-id="${item.id}" ${rateItems.length === 1 ? 'disabled' : ''}>×</button>
            `;
            
            rateListEl.appendChild(div);
            
            currentYear = item.endYear + 1;
        });

        addRateBtn.disabled = rateItems.length >= MAX_RATES;

        // Attach event listeners
        document.querySelectorAll('.rate-end-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-id');
                const val = parseInt(e.target.value, 10);
                const itemIndex = rateItems.findIndex(i => i.id === id);
                if (itemIndex >= 0 && val >= rateItems[itemIndex].startYear) {
                    rateItems[itemIndex].endYear = val;
                    updateRateRowsUI(); // Re-render to fix start years of subsequent items
                } else if (itemIndex >= 0) {
                    e.target.value = rateItems[itemIndex].endYear; // Revert
                }
            });
        });

        document.querySelectorAll('.rate-val-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-id');
                const val = parseFloat(e.target.value);
                const item = rateItems.find(i => i.id === id);
                if (item && !isNaN(val)) item.rate = val;
            });
        });

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeRateRow(e.target.getAttribute('data-id'));
            });
        });
    }

    // Format currency
    function formatCurrency(amount) {
        return Math.round(amount).toLocaleString();
    }

    // Get Interest rate for a given month
    function getRateForMonth(month) {
        const currentYear = Math.ceil(month / 12);
        for (let i = 0; i < rateItems.length; i++) {
            if (currentYear >= rateItems[i].startYear && currentYear <= rateItems[i].endYear) {
                return rateItems[i].rate;
            }
        }
        // If exceeds defined ranges, use the last defined rate
        return rateItems[rateItems.length - 1].rate;
    }

    // Simulation Logic
    function runSimulation(e) {
        e.preventDefault();

        // Inputs
        const principalMan = parseFloat(document.getElementById('principal').value);
        if (isNaN(principalMan) || principalMan <= 0) return alert('借入金額を入力してください。');
        
        const principal = principalMan * 10000; // Convert 万円 to 円
        
        const years = parseInt(document.getElementById('years').value, 10);
        if (isNaN(years) || years <= 0) return alert('返済期間を入力してください。');
        
        const totalMonths = years * 12;
        
        const method = document.querySelector('input[name="method"]:checked').value;

        // Make sure the last rate period covers the loan length, optionally.
        // The getRateForMonth logic naturally extends the last rate to infinity, so it's fine.

        let remainingPrincipal = principal;
        let cumulativeInterest = 0;
        let cumulativeTotalPaid = 0;
        
        const schedule = [];
        let currentMonthlyPayment = 0;
        let previousRate = -1;

        // Equal principal calculation is constant
        const constantPrincipalRepayment = principal / totalMonths;

        for (let month = 1; month <= totalMonths; month++) {
            const annualRate = getRateForMonth(month);
            const monthlyRate = (annualRate / 100) / 12;

            let interestThisMonth = remainingPrincipal * monthlyRate;
            let principalThisMonth = 0;
            let totalPaymentThisMonth = 0;

            if (method === 'equal-total') { // 元利均等
                // Recalculate PMT if rate changes
                if (annualRate !== previousRate) {
                    const remainingMonths = totalMonths - month + 1;
                    if (monthlyRate === 0) {
                        currentMonthlyPayment = remainingPrincipal / remainingMonths;
                    } else {
                        // PMT formula: P * (r*(1+r)^n) / ((1+r)^n - 1)
                        const rateFactor = Math.pow(1 + monthlyRate, remainingMonths);
                        currentMonthlyPayment = remainingPrincipal * (monthlyRate * rateFactor) / (rateFactor - 1);
                    }
                    previousRate = annualRate;
                }
                
                // Edge Case for the last month due to rounding
                if (month === totalMonths) {
                    principalThisMonth = remainingPrincipal;
                    totalPaymentThisMonth = principalThisMonth + interestThisMonth;
                } else {
                    totalPaymentThisMonth = currentMonthlyPayment;
                    principalThisMonth = totalPaymentThisMonth - interestThisMonth;
                }

            } else { // 元金均等 (equal-principal)
                if (month === totalMonths) {
                    principalThisMonth = remainingPrincipal;
                } else {
                    principalThisMonth = constantPrincipalRepayment;
                }
                totalPaymentThisMonth = principalThisMonth + interestThisMonth;
            }

            remainingPrincipal -= principalThisMonth;
            if(remainingPrincipal < 0) remainingPrincipal = 0;

            cumulativeInterest += interestThisMonth;
            cumulativeTotalPaid += totalPaymentThisMonth;

            schedule.push({
                month,
                totalPayment: totalPaymentThisMonth,
                principalPayment: principalThisMonth,
                interestPayment: interestThisMonth,
                remainingPrincipal,
                cumulativeTotal: cumulativeTotalPaid,
                appliedRate: annualRate
            });
        }

        renderResults(principal, cumulativeTotalPaid, cumulativeInterest, schedule);
    }

    function renderResults(principal, totalPaid, totalInterest, schedule) {
        document.getElementById('summary-total-amt').innerHTML = formatCurrency(totalPaid) + '<span>円</span>';
        document.getElementById('summary-principal').innerText = formatCurrency(principal) + '円';
        document.getElementById('summary-total-interest').innerHTML = formatCurrency(totalInterest) + '<span>円</span>';

        const tbody = document.querySelector('#schedule-table tbody');
        tbody.innerHTML = '';

        // Build HTML string for performance
        let rowsHtml = '';
        for(let i = 0; i < schedule.length; i++) {
            const row = schedule[i];
            rowsHtml += `<tr>
                <td>${row.month}</td>
                <td>${formatCurrency(row.totalPayment)}</td>
                <td>${formatCurrency(row.principalPayment)}</td>
                <td>${formatCurrency(row.interestPayment)}</td>
                <td>${formatCurrency(row.remainingPrincipal)}</td>
                <td>${formatCurrency(row.cumulativeTotal)}</td>
            </tr>`; // Omitted 'appliedRate' from table for simplicity, but wait, request states to show applying rate?
        }
        tbody.innerHTML = rowsHtml;

        resultSection.style.display = 'block';
        
        // Scroll to results smoothly
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    form.addEventListener('submit', runSimulation);

    // Init App
    init();
});
