import{r as c,j as e,a as A}from"./client-BpTZzfrB.js";function $(){const[a,t]=c.useState(()=>{const r=localStorage.getItem("securemask-theme");return r==="light"||r==="dark"?r:"dark"});c.useEffect(()=>{const r=document.documentElement;r.classList.remove("dark","light"),r.classList.add(a),localStorage.setItem("securemask-theme",a)},[a]);const s=c.useCallback(()=>{t(r=>r==="dark"?"light":"dark")},[]);return{theme:a,toggleTheme:s}}function C(a){return a.replace(/\d/g,"x")}const M=[{id:"bearer_token",label:"Bearer Token",labelJa:"Bearerトークン",pattern:/Bearer\s+[A-Za-z0-9\-_=.]{8,}/g,replacer:()=>"Bearer [REDACTED_API_KEY]"},{id:"aws_access_key",label:"AWS Access Key",labelJa:"AWSアクセスキー",pattern:/\bAKIA[0-9A-Z]{16}\b/g,replacer:()=>"[REDACTED_API_KEY]"},{id:"aws_secret_key",label:"AWS Secret Key",labelJa:"AWSシークレットキー",pattern:/\b(?:aws_secret_access_key|secret_access_key|AWS_SECRET_ACCESS_KEY)\s*[=:]\s*[A-Za-z0-9/+=]{40}\b/g,replacer:a=>{const t=a.includes("=")?"=":":";return`${a.split(/[=:]/)[0]}${t} [REDACTED_API_KEY]`}},{id:"generic_api_key",label:"API Key / Secret",labelJa:"APIキー/シークレット",pattern:/\b(?:api[_-]?key|api[_-]?secret|access[_-]?token|secret[_-]?key|private[_-]?key|auth[_-]?token)\s*[=:]\s*["']?[A-Za-z0-9\-_=.]{8,}["']?/gi,replacer:a=>{const t=a.match(/^([^=:]+[=:])\s*/);return t?`${t[1]} [REDACTED_API_KEY]`:"[REDACTED_API_KEY]"}},{id:"email",label:"Email Address",labelJa:"メールアドレス",pattern:/\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}\b/g,replacer:()=>"xxx@example.jp"},{id:"credit_card",label:"Credit Card Number",labelJa:"クレジットカード番号",pattern:/\b\d{4}[-\s]?\d{4}[-\s]?\d{2,4}[-\s]?\d{2,4}\b/g,replacer:a=>{const t=a.replace(/\D/g,"");return t.length>=14&&t.length<=16?"xxxx-xxxx-xxxx-xxxx":a}},{id:"mac_address",label:"MAC Address",labelJa:"MACアドレス",pattern:/\b[0-9A-Fa-f]{2}(?::[0-9A-Fa-f]{2}){5}\b|\b[0-9A-Fa-f]{2}(?:-[0-9A-Fa-f]{2}){5}\b/g,replacer:a=>{const t=a.includes(":")?":":"-";return`xx${t}xx${t}xx${t}xx${t}xx${t}xx`}},{id:"ipv6",label:"IPv6 Address",labelJa:"IPv6アドレス",pattern:/\b(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}\b|\b(?:[0-9A-Fa-f]{1,4}:){1,7}:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4}\b|\b::(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4}\b/g,replacer:()=>"xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx"},{id:"ipv4",label:"IPv4 Address",labelJa:"IPv4アドレス",pattern:/\b(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b/g,replacer:()=>"xxx.xxx.xxx.xxx"},{id:"phone_number",label:"Phone Number",labelJa:"電話番号",pattern:/\b0\d{1,4}[-\s]?\d{1,4}[-\s]?\d{2,4}(?:[-\s]?\d{1,4})?\b/g,replacer:a=>C(a)}];function I(a){let t=a;const s=[];let r=0;for(const l of M){l.pattern.lastIndex=0;let n=0;t=t.replace(l.pattern,(...o)=>{const i=l.replacer(o[0],...o.slice(1));return i!==o[0]&&n++,i}),n>0&&(s.push({ruleId:l.id,label:l.label,labelJa:l.labelJa,count:n}),r+=n)}return{maskedText:t,summary:s,totalReplacements:r}}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(...a)=>a.filter((t,s,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,r)=>r?r.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=a=>{const t=E(a);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},L=c.createContext({}),D=()=>c.useContext(L),P=c.forwardRef(({color:a,size:t,strokeWidth:s,absoluteStrokeWidth:r,className:l="",children:n,iconNode:o,...i},x)=>{const{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:b="currentColor",className:y=""}=D()??{},k=r??g?Number(s??h)*24/Number(t??m):s??h;return c.createElement("svg",{ref:x,...f,width:t??m??f.width,height:t??m??f.height,stroke:a??b,strokeWidth:k,className:_("lucide",y,l),...!n&&!z(i)&&{"aria-hidden":"true"},...i},[...o.map(([p,v])=>c.createElement(p,v)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(a,t)=>{const s=c.forwardRef(({className:r,...l},n)=>c.createElement(P,{ref:n,iconNode:t,className:_(`lucide-${S(N(a))}`,`lucide-${a}`,r),...l}));return s.displayName=N(a),s};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],F=d("check",R);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],O=d("copy",T);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],J=d("credit-card",W);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],B=d("download",K);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],q=d("external-link",U);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Z=d("file-text",V);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],w=d("globe",H);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],u=d("key",G);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],X=d("lock",Y);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ee=d("mail",Q);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ae=d("moon",te);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],re=d("network",se);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ne=d("phone",le);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],j=d("shield-check",oe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],de=d("sparkles",ce);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],xe=d("sun",ie);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],me=d("trash-2",he);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],be=d("wifi",pe);function ue({theme:a,onToggleTheme:t}){const s=a==="dark";return e.jsx("header",{id:"app-header",className:`
        sticky top-0 z-50
        ${s?"glass-panel":"glass-panel-light"}
        transition-colors duration-300
      `,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`
                p-2 rounded-xl
                ${s?"bg-primary-500/20 text-primary-400":"bg-primary-100 text-primary-600"}
                transition-colors duration-300
              `,children:e.jsx(j,{className:"w-6 h-6"})}),e.jsxs("div",{children:[e.jsx("h1",{className:`
                  text-lg font-bold tracking-tight
                  ${s?"text-white":"text-slate-900"}
                `,children:"SecureMask"}),e.jsx("p",{className:`
                  text-[11px] font-medium tracking-wide uppercase
                  ${s?"text-slate-400":"text-slate-500"}
                `,children:"Privacy-First Log Masker"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:`
                hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                ${s?"bg-emerald-900/30 text-emerald-400 border border-emerald-800/40":"bg-emerald-50 text-emerald-700 border border-emerald-200"}
                transition-colors duration-300
              `,children:[e.jsx("span",{className:"inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"ローカル処理のみ"]}),e.jsx("button",{id:"theme-toggle-btn",onClick:t,className:`
                p-2.5 rounded-xl transition-all duration-300
                ${s?"text-slate-400 hover:text-white hover:bg-slate-700/60":"text-slate-500 hover:text-slate-900 hover:bg-slate-200/60"}
              `,"aria-label":s?"ライトモードに切り替え":"ダークモードに切り替え",title:s?"ライトモードに切り替え":"ダークモードに切り替え",children:s?e.jsx(xe,{className:"w-5 h-5"}):e.jsx(ae,{className:"w-5 h-5"})})]})]})})})}const ge=`# サンプルログデータ（テスト用）
[2024-12-15 10:23:45] INFO  ユーザー tanaka.taro@company.co.jp がログインしました
[2024-12-15 10:23:46] DEBUG 接続元IP: 192.168.10.50, サーバーIP: 10.0.0.1
[2024-12-15 10:23:47] INFO  APIリクエスト: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.abc123
[2024-12-15 10:24:01] WARN  AWS認証キー検出: AKIAIOSFODNN7EXAMPLE
[2024-12-15 10:24:02] INFO  api_key= sk-proj-abc123def456ghi789jkl012mno345
[2024-12-15 10:24:15] DEBUG MACアドレス: 00:1B:44:11:3A:B7
[2024-12-15 10:24:20] INFO  連絡先: 090-1234-5678 / 03-9876-5432
[2024-12-15 10:24:30] WARN  カード番号 4111-1111-1111-1111 が平文で検出されました
[2024-12-15 10:24:35] INFO  IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
[2024-12-15 10:24:40] INFO  担当: suzuki.hanako@example.com, TEL: 052-999-9999-1234`;function ye({theme:a,value:t,onChange:s,onMask:r,onClear:l,isProcessing:n}){const o=a==="dark",i=()=>{s(ge)},x=t?t.split(`
`).length:0,m=t.length;return e.jsxs("div",{className:"flex flex-col h-full animate-fade-in",children:[e.jsxs("div",{className:`
          flex items-center justify-between px-4 py-3 rounded-t-2xl border-b
          ${o?"bg-slate-800/80 border-slate-700/60":"bg-white border-slate-200"}
          transition-colors duration-300
        `,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{className:`w-4 h-4 ${o?"text-primary-400":"text-primary-600"}`}),e.jsx("h2",{className:`text-sm font-semibold ${o?"text-slate-200":"text-slate-800"}`,children:"入力テキスト"}),m>0&&e.jsxs("span",{className:`
                text-[11px] px-2 py-0.5 rounded-md font-mono
                ${o?"bg-slate-700 text-slate-400":"bg-slate-100 text-slate-500"}
              `,children:[x," 行 / ",m.toLocaleString()," 文字"]})]}),e.jsx("button",{id:"load-sample-btn",onClick:i,className:`
            text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200
            ${o?"text-primary-400 hover:bg-primary-500/10":"text-primary-600 hover:bg-primary-50"}
          `,children:"サンプルを読み込む"})]}),e.jsx("div",{className:"flex-1 relative",children:e.jsx("textarea",{id:"input-textarea",className:`
            w-full h-full resize-none p-4 text-sm leading-relaxed
            ${o?"bg-slate-900/60 text-slate-200 placeholder-slate-600":"bg-slate-50/80 text-slate-800 placeholder-slate-400"}
            transition-colors duration-300
            focus:ring-2 focus:ring-primary-500/30
          `,placeholder:`ここにログファイルや設定ファイルの内容をペーストしてください...

📋 クリップボードから貼り付け、またはサンプルデータを読み込んで試すことができます。`,value:t,onChange:h=>s(h.target.value),spellCheck:!1})}),e.jsxs("div",{className:`
          flex items-center justify-between px-4 py-3 rounded-b-2xl border-t gap-2
          ${o?"bg-slate-800/80 border-slate-700/60":"bg-white border-slate-200"}
          transition-colors duration-300
        `,children:[e.jsxs("button",{id:"clear-btn",onClick:l,disabled:!t,className:"btn-danger",children:[e.jsx(me,{className:"w-4 h-4"}),e.jsx("span",{className:"hidden sm:inline",children:"クリア"})]}),e.jsxs("button",{id:"mask-btn",onClick:r,disabled:!t||n,className:"btn-primary",children:[e.jsx(de,{className:"w-4 h-4"}),n?"処理中...":"マスキング実行"]})]})]})}function ke({theme:a,maskedText:t}){const s=a==="dark",[r,l]=c.useState(!1),n=async()=>{if(t)try{await navigator.clipboard.writeText(t),l(!0),setTimeout(()=>l(!1),2e3)}catch{const x=document.createElement("textarea");x.value=t,document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x),l(!0),setTimeout(()=>l(!1),2e3)}},o=()=>{if(!t)return;const x=new Blob([t],{type:"text/plain;charset=utf-8"}),m=URL.createObjectURL(x),h=document.createElement("a");h.href=m,h.download=`masked_output_${new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")}.txt`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(m)},i=t?t.split(`
`).length:0;return e.jsxs("div",{className:"flex flex-col h-full animate-fade-in",children:[e.jsxs("div",{className:`
          flex items-center justify-between px-4 py-3 rounded-t-2xl border-b
          ${s?"bg-slate-800/80 border-slate-700/60":"bg-white border-slate-200"}
          transition-colors duration-300
        `,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:`w-4 h-4 ${s?"text-emerald-400":"text-emerald-600"}`}),e.jsx("h2",{className:`text-sm font-semibold ${s?"text-slate-200":"text-slate-800"}`,children:"マスキング結果"}),t&&e.jsxs("span",{className:`
                text-[11px] px-2 py-0.5 rounded-md font-mono
                ${s?"bg-slate-700 text-slate-400":"bg-slate-100 text-slate-500"}
              `,children:[i," 行"]})]}),t&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{id:"download-btn",onClick:o,className:`
                text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5
                ${s?"text-slate-400 hover:text-slate-200 hover:bg-slate-700/60":"text-slate-500 hover:text-slate-700 hover:bg-slate-100"}
              `,title:"ファイルとしてダウンロード",children:[e.jsx(B,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"保存"})]}),e.jsx("button",{id:"copy-btn",onClick:n,className:`
                text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5
                ${r?s?"bg-emerald-900/40 text-emerald-400":"bg-emerald-50 text-emerald-600":s?"text-primary-400 hover:bg-primary-500/10":"text-primary-600 hover:bg-primary-50"}
              `,children:r?e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"w-3.5 h-3.5"}),"コピー完了"]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"w-3.5 h-3.5"}),"コピー"]})})]})]}),e.jsx("div",{className:"flex-1 relative overflow-auto",children:t?e.jsx("pre",{id:"output-display",className:`
              w-full h-full p-4 text-sm leading-relaxed font-mono whitespace-pre-wrap break-all
              ${s?"text-slate-300":"text-slate-700"}
            `,children:t}):e.jsxs("div",{className:"flex flex-col items-center justify-center h-full py-12 px-4",children:[e.jsx("div",{className:`
                p-4 rounded-2xl mb-4
                ${s?"bg-slate-800/60":"bg-slate-100"}
              `,children:e.jsx(j,{className:`w-10 h-10 ${s?"text-slate-600":"text-slate-300"}`})}),e.jsxs("p",{className:`text-sm text-center ${s?"text-slate-500":"text-slate-400"}`,children:["テキストを入力して「マスキング実行」を",e.jsx("br",{}),"クリックすると結果がここに表示されます"]})]})}),e.jsx("div",{className:`
          px-4 py-2.5 rounded-b-2xl border-t
          ${s?"bg-slate-800/80 border-slate-700/60":"bg-white border-slate-200"}
          transition-colors duration-300
        `,children:e.jsxs("p",{className:`text-[11px] flex items-center gap-1.5 ${s?"text-slate-500":"text-slate-400"}`,children:[e.jsx("span",{className:"inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"}),"すべてのデータはブラウザ内で処理されます。外部への送信は一切ありません。"]})})]})}const fe={email:ee,ipv4:w,ipv6:w,phone_number:ne,credit_card:J,bearer_token:u,aws_access_key:u,aws_secret_key:u,generic_api_key:u,mac_address:be},je={email:{dark:"text-blue-400",light:"text-blue-600"},ipv4:{dark:"text-amber-400",light:"text-amber-600"},ipv6:{dark:"text-amber-400",light:"text-amber-600"},phone_number:{dark:"text-purple-400",light:"text-purple-600"},credit_card:{dark:"text-red-400",light:"text-red-600"},bearer_token:{dark:"text-orange-400",light:"text-orange-600"},aws_access_key:{dark:"text-orange-400",light:"text-orange-600"},aws_secret_key:{dark:"text-orange-400",light:"text-orange-600"},generic_api_key:{dark:"text-orange-400",light:"text-orange-600"},mac_address:{dark:"text-cyan-400",light:"text-cyan-600"}};function Ne({theme:a,summary:t,totalReplacements:s}){const r=a==="dark";return t.length===0?null:e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:`
          rounded-2xl overflow-hidden
          ${r?"bg-slate-800/60 border border-slate-700/60":"bg-white border border-slate-200 shadow-sm"}
          transition-colors duration-300
        `,children:[e.jsx("div",{className:`
            px-4 py-3 border-b
            ${r?"border-slate-700/60":"border-slate-200"}
          `,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:`text-sm font-semibold ${r?"text-slate-200":"text-slate-800"}`,children:"検出サマリー"}),e.jsxs("div",{className:`
                badge
                ${r?"bg-primary-900/40 text-primary-300 border border-primary-800/50":"bg-primary-50 text-primary-700 border border-primary-200"}
              `,children:["合計 ",s," 件置換"]})]})}),e.jsx("div",{className:"px-4 py-2",children:t.map((l,n)=>{const o=fe[l.ruleId]||re,i=je[l.ruleId]||{dark:"text-slate-400",light:"text-slate-600"};return e.jsxs("div",{className:`
                  flex items-center justify-between py-2.5
                  ${n<t.length-1?r?"border-b border-slate-700/40":"border-b border-slate-100":""}
                `,style:{animationDelay:`${n*50}ms`},children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{className:`w-4 h-4 ${r?i.dark:i.light}`}),e.jsxs("div",{children:[e.jsx("span",{className:`text-sm font-medium ${r?"text-slate-300":"text-slate-700"}`,children:l.labelJa}),e.jsxs("span",{className:`text-xs ml-2 ${r?"text-slate-500":"text-slate-400"}`,children:["(",l.label,")"]})]})]}),e.jsxs("span",{className:`
                    text-sm font-bold tabular-nums
                    ${r?i.dark:i.light}
                  `,children:[l.count," 件"]})]},l.ruleId)})})]})})}function we({theme:a}){const t=a==="dark";return e.jsx("footer",{id:"app-footer",className:`
        mt-auto py-6 border-t
        ${t?"border-slate-800 text-slate-500":"border-slate-200 text-slate-400"}
        transition-colors duration-300
      `,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 text-xs",children:[e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(X,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"すべてのデータはブラウザ内で処理されます"})]})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{children:"© 2026 SecureMask"}),e.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:`
                flex items-center gap-1 transition-colors duration-200
                ${t?"hover:text-slate-300":"hover:text-slate-600"}
              `,children:[e.jsx(q,{className:"w-3.5 h-3.5"}),"GitHub"]})]})]})})})}function _e(){const{theme:a,toggleTheme:t}=$(),s=a==="dark",[r,l]=c.useState(""),[n,o]=c.useState(""),[i,x]=c.useState([]),[m,h]=c.useState(0),[g,b]=c.useState(!1),y=c.useCallback(()=>{r.trim()&&(b(!0),requestAnimationFrame(()=>{const p=I(r);o(p.maskedText),x(p.summary),h(p.totalReplacements),b(!1)}))},[r]),k=c.useCallback(()=>{l(""),o(""),x([]),h(0)},[]);return e.jsxs("div",{className:`
        min-h-screen flex flex-col
        ${s?"bg-mesh-dark":"bg-mesh-light"}
        transition-colors duration-500
      `,children:[e.jsx(ue,{theme:a,onToggleTheme:t}),e.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5",children:[e.jsx("div",{className:`
              rounded-2xl overflow-hidden min-h-[400px] flex flex-col
              ${s?"bg-slate-800/40 border border-slate-700/50 shadow-2xl shadow-black/20":"bg-white/80 border border-slate-200 shadow-xl shadow-slate-200/50"}
              transition-all duration-300
            `,children:e.jsx(ye,{theme:a,value:r,onChange:l,onMask:y,onClear:k,isProcessing:g})}),e.jsx("div",{className:`
              rounded-2xl overflow-hidden min-h-[400px] flex flex-col
              ${s?"bg-slate-800/40 border border-slate-700/50 shadow-2xl shadow-black/20":"bg-white/80 border border-slate-200 shadow-xl shadow-slate-200/50"}
              transition-all duration-300
            `,children:e.jsx(ke,{theme:a,maskedText:n})})]}),e.jsx(Ne,{theme:a,summary:i,totalReplacements:m})]}),e.jsx(we,{theme:a})]})}A(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(_e,{})}));
