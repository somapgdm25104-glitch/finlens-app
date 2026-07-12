import React, { useState } from 'react';

export default function PricingTable({ records }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', ...new Set(records.map(r => r.category))];

  const filteredRecords = records.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
                          r.sku.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="glass-card mb-8" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff' }}>
            Live Marketplace Pricing & Margin Tracker
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            Showing {filteredRecords.length} of {records.length} SKUs | Every row traces to an external scraped listing
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search SKU or Product Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '8px 14px',
              color: '#fff',
              fontSize: '0.85rem',
              outline: 'none',
              minWidth: '220px'
            }}
          />

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '8px 14px',
              color: '#fff',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product Line</th>
              <th>Our Price</th>
              <th>Competitor Best</th>
              <th>Delta %</th>
              <th>3M Margin Trend</th>
              <th>Scrape Status</th>
              <th>Source Link</th>
              <th>Last Checked</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((r) => {
              const isStale = r.scrape_status.includes('STALE');
              const isFlagged = r.join_flagged;

              return (
                <tr
                  key={r.sku}
                  style={isFlagged ? { background: 'rgba(244, 63, 94, 0.08)' } : {}}
                >
                  <td className="font-mono font-bold" style={{ color: isFlagged ? '#fb7185' : '#e2e8f0' }}>
                    {r.sku}
                  </td>
                  <td>
                    <div style={{ fontWeight: '600', color: '#fff' }}>{r.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{r.category}</div>
                  </td>
                  <td className="font-mono" style={{ fontWeight: '600', color: '#fff' }}>
                    ₹{r.our_price.toLocaleString()}
                  </td>
                  <td className="font-mono">
                    {r.competitor_price ? (
                      <span style={{ color: '#38bdf8', fontWeight: '600' }}>
                        ₹{r.competitor_price.toLocaleString()}
                      </span>
                    ) : (
                      <span style={{ color: '#64748b' }}>N/A</span>
                    )}
                  </td>
                  <td className="font-mono font-bold">
                    {r.delta_pct !== null ? (
                      <span style={{
                        color: r.delta_pct > 10 ? '#fb7185' : r.delta_pct < 0 ? '#34d399' : '#e2e8f0'
                      }}>
                        {r.delta_pct > 0 ? `+${r.delta_pct}%` : `${r.delta_pct}%`}
                      </span>
                    ) : (
                      <span style={{ color: '#64748b' }}>—</span>
                    )}
                  </td>
                  <td className="font-mono">
                    <span style={{
                      color: r.margin_3m_slope < -1.5 ? '#fb7185' : r.margin_3m_slope > 0 ? '#34d399' : '#94a3b8'
                    }}>
                      {r.margin_3m_slope > 0 ? `+${r.margin_3m_slope}` : r.margin_3m_slope} pt/mo
                    </span>
                  </td>
                  <td>
                    {isStale ? (
                      <span className="badge badge-amber" title="Scrape failed — stale price not substituted">
                        STALE — Scrape Failed
                      </span>
                    ) : (
                      <span className="badge badge-emerald">
                        LIVE ({r.competitor})
                      </span>
                    )}
                  </td>
                  <td>
                    <a
                      href={r.listing_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#38bdf8',
                        textDecoration: 'underline',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      Listing URL ↗
                    </a>
                  </td>
                  <td style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {r.scraped_at}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
