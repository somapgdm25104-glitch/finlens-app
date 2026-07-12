import React from 'react';

export default function Header({ mode, setMode, lastRefreshed, cost, onRefresh, onOpenMemo }) {
  return (
    <header className="glass-card mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ padding: '18px 24px' }}>
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg" style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
          color: '#fff',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
        }}>
          FL
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white">FINLENS</h1>
            <span className="badge badge-indigo">v1.0 MCP JOIN ENGINE</span>
          </div>
          <p className="text-xs text-slate-400">Competitor Marketplace Pricing × Internal Gross Margin Analytics</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Cost Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/60 bg-slate-900/60 text-xs">
          <span className="text-slate-400">Batched Scrape Cost:</span>
          <span className="font-mono font-bold text-emerald-400">₹{cost.toFixed(2)}</span>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center rounded-lg p-1 bg-slate-900/80 border border-slate-800">
          <button
            onClick={() => setMode('demo')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              mode === 'demo'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Demo Story Mode
          </button>
          <button
            onClick={() => setMode('live')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              mode === 'live'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Mode (API)
          </button>
        </div>

        {/* Committee Memo Button */}
        <button
          onClick={onOpenMemo}
          className="btn btn-secondary text-xs"
        >
          📄 View Committee Memo
        </button>

        {/* Refresh Button */}
        <button
          onClick={onRefresh}
          className="btn btn-primary text-xs"
        >
          🔄 Refresh Scrape & Join
        </button>
      </div>
    </header>
  );
}
