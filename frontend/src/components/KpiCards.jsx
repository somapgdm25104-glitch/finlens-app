import React from 'react';

export default function KpiCards({ summary }) {
  const cards = [
    {
      title: 'TOTAL SKUs ANALYZED',
      value: summary.total_skus_analyzed,
      subtext: 'Across 4 product categories',
      badge: '100% Batched Scrape',
      badgeClass: 'badge-indigo',
      color: 'from-indigo-500/10 to-transparent',
      borderColor: 'border-indigo-500/20'
    },
    {
      title: '🔥 CRITICAL JOIN FLAGS',
      value: summary.join_flagged_count,
      subtext: 'Margin Falling + Priced >10% Above Market',
      badge: 'Immediate Action Needed',
      badgeClass: 'badge-rose',
      color: 'from-rose-500/15 to-transparent',
      borderColor: 'border-rose-500/40'
    },
    {
      title: 'MONTHLY REVENUE AT RISK',
      value: `₹${(summary.total_revenue_at_risk_monthly / 100000).toFixed(2)}L`,
      subtext: `₹${summary.total_revenue_at_risk_monthly.toLocaleString()} total exposure`,
      badge: 'Margin Impact if Matched',
      badgeClass: 'badge-amber',
      color: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/30'
    },
    {
      title: 'AVG MARKET PRICE DELTA',
      value: `+${summary.avg_competitor_delta_pct}%`,
      subtext: `${summary.stale_scrapes_count} STALE scrapes flagged`,
      badge: 'Live Marketplace Gap',
      badgeClass: 'badge-emerald',
      color: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/20'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '16px',
      marginBottom: '32px'
    }}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="glass-card"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '20px'
          }}
        >
          <div className="flex justify-between items-start mb-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">{card.title}</span>
            <span className={`badge ${card.badgeClass}`}>{card.badge}</span>
          </div>

          <div className="text-3xl font-bold text-white font-mono my-1" style={{ fontSize: '1.85rem', margin: '8px 0' }}>
            {card.value}
          </div>

          <div className="text-xs text-slate-400">
            {card.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}
