export interface AppData {
  id: string;
  name: string;
  description: string;
  path: string;
  category: string;
}

export const appsData: AppData[] = [
  {
    id: 'log-masker',
    name: 'Log Masker',
    description: 'ブラウザ内で完結するセキュアなログマスキングツール。機密情報を外部に送信せずに安全に処理します。',
    path: '/my-app-portal/log-masker/',
    category: 'セキュリティ'
  },
  {
    id: 'finance-app',
    name: 'Finance App',
    description: '複数パターンの金利に対応した住宅ローンシミュレーター等のファイナンスツール群。',
    path: '/my-app-portal/finance-app/',
    category: 'ファイナンス'
  }
];
