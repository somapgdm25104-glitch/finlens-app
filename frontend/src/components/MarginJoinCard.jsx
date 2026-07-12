import React from 'react';

export default function MarginJoinCard({ flaggedRecords }) {
  if (!flaggedRecords || flaggedRecords.length === 0) {
    return null;
  }

  return (
    <div className="join-flag-card glass-card mb-8" style={{ padding: '24px', borderRadius: '16px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.25rem' }}>🔥</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>
              THE MARGIN JOIN: SKUs Where Competitor Pricing Explains Margin Decline
            </h2>
            <span className="badge badge-rose animate-pulse-dot">
              CRITICAL FLAG ({flaggedRecords.length} SKUs)
            </span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
            Why no other tool shows this: <strong style={{ color: '#fff' }}>No scraping tool has your P&L. No BI tool has live competitor prices.</strong> By cross-referencing internal declining margin slopes (`np.polyfit`) with scraped marketplace prices (`&gt;10% above market`), we isolate root causes instantly.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {flaggedRecords.map((sku) => {
          const cutPerUnit = sku.our_price - sku.competitor_price;
          return (
            <div
              key={sku.sku}
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(244, 63, 94, 0.4)',
                borderRadius: '12px',
                padding: '16px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="font-mono font-bold text-rose-400" style={{ fontSize: '0.85rem' }}>
                  {sku.sku}
                </span>
                <span className="badge badge-rose">
                  +{sku.delta_pct}% OVERPRICED
                </span>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff', marginBottom: '12px' }}>
                {sku.name}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.8rem', marginBottom: '14px', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px' }}>
                <div>
                  <div style={{ color: '#94a3b8' }}>Our Price vs Comp</div>
                  <div className="font-mono font-bold text-white">
                    ₹{sku.our_price.toLocaleString()} / <span style={{ color: '#38bdf8' }}>₹{sku.competitor_price.toLocaleString()}</span>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>3M Margin Slope</div>
                  <div className="font-mono font-bold text-rose-400">
                    {sku.margin_3m_slope} pt/month
                  </div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Monthly Vol / Gap</div>
                  <div className="font-mono text-slate-300">
                    {sku.latest_monthly_units} units (₹{cutPerUnit.toLocaleString()} gap)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Revenue at Risk</div>
                  <div className="font-mono font-bold text-amber-400">
                    ₹{sku.revenue_at_risk_monthly.toLocaleString()}/mo
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a
                  href={sku.listing_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.75rem', color: '#38bdf8', textDecoration: 'underline' }}
                >
                  Verify Source Link ↗
                </a>
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '600' }}>
                  REC: Option B (Bundle)
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
