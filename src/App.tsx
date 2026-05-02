import React from 'react';
import { appsData } from './data/appsData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-4">
            My App Portal
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            日常業務を効率化するための社内ツール・アプリケーション群をまとめたポータルサイトです。
          </p>
        </div>
      </header>

      {/* Main Content: App Cards */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appsData.map((app) => (
            <a
              key={app.id}
              href={app.path}
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-2">
                  {app.category}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-accent transition-colors">
                  {app.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm font-medium text-gray-600 group-hover:text-brand-accent transition-colors flex items-center justify-between">
                <span>アプリを開く</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} My App Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
