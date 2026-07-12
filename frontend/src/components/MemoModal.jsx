import React, { useState } from 'react';

export default function MemoModal({ isOpen, onClose, memoText }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(memoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(10, 13, 20, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '860px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(99, 102, 241, 0.4)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>
              Pricing Committee Memo (Executive Format)
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Every figure verifiable | Traces to live scrapes & internal P&L
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleCopy}
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', padding: '8px 14px' }}
            >
              {copied ? '✅ Copied to Clipboard' : '📋 Copy Memo'}
            </button>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '8px 14px' }}
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          fontSize: '0.875rem',
          lineHeight: '1.7',
          color: '#e2e8f0',
          fontFamily: 'Inter, sans-serif',
          whiteSpace: 'pre-wrap'
        }}>
          {memoText}
        </div>
      </div>
    </div>
  );
}
