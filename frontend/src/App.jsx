import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import KpiCards from './components/KpiCards.jsx';
import MarginJoinCard from './components/MarginJoinCard.jsx';
import PricingTable from './components/PricingTable.jsx';
import MemoModal from './components/MemoModal.jsx';
import { getClientDemoData } from './data/demoEngine.js';

export default function App() {
  const [mode, setMode] = useState('demo'); // 'demo' | 'live'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (mode === 'demo') {
        // Run deterministic built-in engine immediately
        const demoRes = getClientDemoData();
        setData(demoRes);
      } else {
        // Attempt fetch from live FastAPI Backend
        const res = await fetch('/api/finlens/demo');
        if (!res.ok) {
          throw new Error('Backend API unreachable or returned error');
        }
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.warn('Live mode fallback to demo engine:', err.message);
      // Fallback smoothly to demo engine so demo never fails
      const fallback = getClientDemoData();
      setData(fallback);
      setError('Live backend offline — showing local deterministic browser engine.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [mode]);

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Initializing FinLens Engine...</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 24px' }}>
      <Header
        mode={mode}
        setMode={setMode}
        lastRefreshed={data.summary.last_refreshed}
        cost={data.summary.cost_incurred_inr}
        onRefresh={loadData}
        onOpenMemo={() => setIsMemoOpen(true)}
      />

      {error && (
        <div style={{
          background: 'rgba(245, 158, 11, 0.12)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          color: '#fcd34d',
          padding: '12px 18px',
          borderRadius: '10px',
          marginBottom: '24px',
          fontSize: '0.85rem'
        }}>
          ⚠️ {error}
        </div>
      )}

      <KpiCards summary={data.summary} />

      {/* The 20-second Demo Winner: The Join */}
      <MarginJoinCard flaggedRecords={data.join_flagged_records} />

      {/* Complete Pricing Tracker & STALE Status Table */}
      <PricingTable records={data.records} />

      {/* Footer */}
      <footer style={{
        marginTop: '48px',
        paddingTop: '24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#64748b'
      }}>
        <div>FINLENS v1.0 — Competitor Pricing × Gross Margin Engine</div>
        <div>All calculations deterministic in Pandas / JS arithmetic</div>
      </footer>

      <MemoModal
        isOpen={isMemoOpen}
        onClose={() => setIsMemoOpen(false)}
        memoText={data.committee_memo}
      />
    </div>
  );
}
