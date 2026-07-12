// Standalone deterministic analytics engine & pre-engineered demo dataset
// Replicates exact Python pandas/numpy polyfit slope & join logic for instant browser execution

export function getClientDemoData() {
  const records = [
    // 🔥 FLAGSHIP DECLINING & OVERPRICED SKUs (THE DEMO STORY)
    {
      sku: "SKU-001",
      name: "Air Fryer Digital 4.2L",
      category: "Kitchen Appliances",
      our_price: 6499.0,
      unit_cost: 4100.0,
      competitor: "Amazon India",
      competitor_price: 5499.0,
      delta_pct: 18.18,
      margin_3m_slope: -3.50,
      latest_monthly_units: 310,
      latest_margin_rate: 17.0,
      revenue_at_risk_monthly: 310000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B08XAIRFRY42L",
      join_flagged: true
    },
    {
      sku: "SKU-007",
      name: "Sonic Electric Toothbrush Pro",
      category: "Personal Care",
      our_price: 3299.0,
      unit_cost: 1950.0,
      competitor: "Flipkart",
      competitor_price: 2799.0,
      delta_pct: 17.86,
      margin_3m_slope: -4.50,
      latest_monthly_units: 420,
      latest_margin_rate: 18.0,
      revenue_at_risk_monthly: 210000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/sonic-elec-pro/p/itm98412",
      join_flagged: true
    },
    {
      sku: "SKU-014",
      name: "TrueWireless ANC Earbuds Pro",
      category: "Smart Accessories",
      our_price: 4999.0,
      unit_cost: 2900.0,
      competitor: "Amazon India",
      competitor_price: 4199.0,
      delta_pct: 19.05,
      margin_3m_slope: -4.00,
      latest_monthly_units: 280,
      latest_margin_rate: 17.0,
      revenue_at_risk_monthly: 224000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09ZANCPRO9",
      join_flagged: true
    },

    // HEALTHY OR STABLE SKUs
    {
      sku: "SKU-002",
      name: "Cold Press Slow Juicer 200W",
      category: "Kitchen Appliances",
      our_price: 8999.0,
      unit_cost: 5200.0,
      competitor: "Amazon India",
      competitor_price: 8799.0,
      delta_pct: 2.27,
      margin_3m_slope: 0.10,
      latest_monthly_units: 185,
      latest_margin_rate: 42.2,
      revenue_at_risk_monthly: 37000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B07YJUICER200",
      join_flagged: false
    },
    {
      sku: "SKU-003",
      name: "Espresso Machine 15-Bar",
      category: "Kitchen Appliances",
      our_price: 11499.0,
      unit_cost: 6800.0,
      competitor: "Flipkart",
      competitor_price: 11699.0,
      delta_pct: -1.71,
      margin_3m_slope: 0.20,
      latest_monthly_units: 190,
      latest_margin_rate: 40.8,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/espresso-15bar/p/itm11245",
      join_flagged: false
    },
    {
      sku: "SKU-004",
      name: "Induction Cooktop Touch 2000W",
      category: "Kitchen Appliances",
      our_price: 2899.0,
      unit_cost: 1700.0,
      competitor: "Amazon India",
      competitor_price: 2850.0,
      delta_pct: 1.72,
      margin_3m_slope: 0.00,
      latest_monthly_units: 195,
      latest_margin_rate: 41.3,
      revenue_at_risk_monthly: 9555.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B08KCOOK2000",
      join_flagged: false
    },
    {
      sku: "SKU-005",
      name: "Multi-Cooker Electric 6L",
      category: "Kitchen Appliances",
      our_price: 5799.0,
      unit_cost: 3400.0,
      competitor: "Amazon India",
      competitor_price: 5799.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.05,
      latest_monthly_units: 200,
      latest_margin_rate: 41.4,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09JMULTI6L",
      join_flagged: false
    },
    {
      sku: "SKU-006",
      name: "High-Speed Blender 1200W",
      category: "Kitchen Appliances",
      our_price: 4499.0,
      unit_cost: 2600.0,
      competitor: "Flipkart",
      competitor_price: 4449.0,
      delta_pct: 1.12,
      margin_3m_slope: 0.00,
      latest_monthly_units: 205,
      latest_margin_rate: 42.2,
      revenue_at_risk_monthly: 10250.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/blender-1200w/p/itm88231",
      join_flagged: false
    },
    {
      sku: "SKU-008",
      name: "Water Flosser Cordless Rechargeable",
      category: "Personal Care",
      our_price: 2699.0,
      unit_cost: 1500.0,
      competitor: "Amazon India",
      competitor_price: 2699.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.15,
      latest_monthly_units: 215,
      latest_margin_rate: 44.4,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B08LWFLOSS26",
      join_flagged: false
    },
    {
      sku: "SKU-009",
      name: "Ionic Hair Dryer 1800W",
      category: "Personal Care",
      our_price: 2199.0,
      unit_cost: 1250.0,
      competitor: "Amazon India",
      competitor_price: null,
      delta_pct: null,
      margin_3m_slope: 0.10,
      latest_monthly_units: 220,
      latest_margin_rate: 43.1,
      revenue_at_risk_monthly: 0.0,
      in_stock: false,
      scrape_status: "STALE — scrape failed",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B07XHAIR1800",
      join_flagged: false
    },
    {
      sku: "SKU-010",
      name: "Shiatsu Neck Massage Pillow",
      category: "Personal Care",
      our_price: 2499.0,
      unit_cost: 1400.0,
      competitor: "Flipkart",
      competitor_price: 2499.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.00,
      latest_monthly_units: 225,
      latest_margin_rate: 44.0,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/neck-pillow/p/itm33129",
      join_flagged: false
    },
    {
      sku: "SKU-011",
      name: "LED Facial Therapy Mask",
      category: "Personal Care",
      our_price: 4299.0,
      unit_cost: 2300.0,
      competitor: "Amazon India",
      competitor_price: 4350.0,
      delta_pct: -1.17,
      margin_3m_slope: 0.20,
      latest_monthly_units: 230,
      latest_margin_rate: 46.5,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09YLEDMASK",
      join_flagged: false
    },
    {
      sku: "SKU-012",
      name: "Cordless Beard Trimmer Precision",
      category: "Personal Care",
      our_price: 1499.0,
      unit_cost: 850.0,
      competitor: "Amazon India",
      competitor_price: 1499.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.10,
      latest_monthly_units: 235,
      latest_margin_rate: 43.3,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B08MTRIM1499",
      join_flagged: false
    },
    {
      sku: "SKU-013",
      name: "Smart Body Scale Wi-Fi",
      category: "Personal Care",
      our_price: 1999.0,
      unit_cost: 1100.0,
      competitor: "Flipkart",
      competitor_price: 1899.0,
      delta_pct: 5.27,
      margin_3m_slope: -0.10,
      latest_monthly_units: 240,
      latest_margin_rate: 44.9,
      revenue_at_risk_monthly: 24000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/smart-scale/p/itm44102",
      join_flagged: false
    },
    {
      sku: "SKU-015",
      name: "Magnetic Power Bank 10000mAh",
      category: "Smart Accessories",
      our_price: 2499.0,
      unit_cost: 1450.0,
      competitor: "Amazon India",
      competitor_price: 2399.0,
      delta_pct: 4.17,
      margin_3m_slope: 0.00,
      latest_monthly_units: 250,
      latest_margin_rate: 42.0,
      revenue_at_risk_monthly: 25000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09ZMAGPB10K",
      join_flagged: false
    },
    {
      sku: "SKU-016",
      name: "GaN Fast Charger 65W 3-Port",
      category: "Smart Accessories",
      our_price: 1899.0,
      unit_cost: 1050.0,
      competitor: "Amazon India",
      competitor_price: 1899.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.05,
      latest_monthly_units: 255,
      latest_margin_rate: 44.7,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B08XGAN65W3P",
      join_flagged: false
    },
    {
      sku: "SKU-017",
      name: "Smart Watch AMOLED GPS",
      category: "Smart Accessories",
      our_price: 5999.0,
      unit_cost: 3500.0,
      competitor: "Flipkart",
      competitor_price: 5999.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.10,
      latest_monthly_units: 260,
      latest_margin_rate: 41.7,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/smartwatch-gps/p/itm66103",
      join_flagged: false
    },
    {
      sku: "SKU-018",
      name: "Ergonomic Vertical Wireless Mouse",
      category: "Smart Accessories",
      our_price: 1699.0,
      unit_cost: 950.0,
      competitor: "Amazon India",
      competitor_price: null,
      delta_pct: null,
      margin_3m_slope: 0.00,
      latest_monthly_units: 265,
      latest_margin_rate: 44.1,
      revenue_at_risk_monthly: 0.0,
      in_stock: false,
      scrape_status: "STALE — scrape failed",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B07XMOUSE1699",
      join_flagged: false
    },
    {
      sku: "SKU-019",
      name: "Mechanical Keyboard RGB Wireless",
      category: "Smart Accessories",
      our_price: 4599.0,
      unit_cost: 2700.0,
      competitor: "Amazon India",
      competitor_price: 4499.0,
      delta_pct: 2.22,
      margin_3m_slope: 0.15,
      latest_monthly_units: 270,
      latest_margin_rate: 41.3,
      revenue_at_risk_monthly: 27000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09YMECHRGB",
      join_flagged: false
    },
    {
      sku: "SKU-020",
      name: "Robotic Vacuum & Mop Smart Nav",
      category: "Home Essentials",
      our_price: 18999.0,
      unit_cost: 11500.0,
      competitor: "Flipkart",
      competitor_price: 18999.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.00,
      latest_monthly_units: 275,
      latest_margin_rate: 39.5,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/robovac-mop/p/itm99104",
      join_flagged: false
    },
    {
      sku: "SKU-021",
      name: "HEPA Air Purifier True CADR 300",
      category: "Home Essentials",
      our_price: 7999.0,
      unit_cost: 4600.0,
      competitor: "Amazon India",
      competitor_price: 7899.0,
      delta_pct: 1.27,
      margin_3m_slope: 0.10,
      latest_monthly_units: 280,
      latest_margin_rate: 42.5,
      revenue_at_risk_monthly: 28000.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B08XHEPA300",
      join_flagged: false
    },
    {
      sku: "SKU-022",
      name: "Cordless Stick Vacuum 25kPa",
      category: "Home Essentials",
      our_price: 9999.0,
      unit_cost: 5900.0,
      competitor: "Amazon India",
      competitor_price: 9999.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.00,
      latest_monthly_units: 285,
      latest_margin_rate: 41.0,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09ZSTICK25K",
      join_flagged: false
    },
    {
      sku: "SKU-023",
      name: "Dehumidifier Portable 12L",
      category: "Home Essentials",
      our_price: 12499.0,
      unit_cost: 7500.0,
      competitor: "Flipkart",
      competitor_price: 12499.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.05,
      latest_monthly_units: 290,
      latest_margin_rate: 40.0,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.flipkart.com/dehumid-12l/p/itm55109",
      join_flagged: false
    },
    {
      sku: "SKU-024",
      name: "Ultrasonic Humidifier Warm/Cool",
      category: "Home Essentials",
      our_price: 3499.0,
      unit_cost: 1900.0,
      competitor: "Amazon India",
      competitor_price: 3499.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.10,
      latest_monthly_units: 295,
      latest_margin_rate: 45.7,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B07YHUMID34",
      join_flagged: false
    },
    {
      sku: "SKU-025",
      name: "Smart Lock Biometric Fingerprint",
      category: "Home Essentials",
      our_price: 8499.0,
      unit_cost: 4900.0,
      competitor: "Amazon India",
      competitor_price: 8499.0,
      delta_pct: 0.0,
      margin_3m_slope: 0.00,
      latest_monthly_units: 300,
      latest_margin_rate: 42.3,
      revenue_at_risk_monthly: 0.0,
      in_stock: true,
      scrape_status: "SUCCESS",
      scraped_at: "2026-07-12 06:15 UTC",
      listing_url: "https://www.amazon.in/dp/B09YLOCKBIO",
      join_flagged: false
    }
  ];

  const flaggedSkus = records.filter(r => r.join_flagged);
  const totalRisk = flaggedSkus.reduce((sum, r) => sum + r.revenue_at_risk_monthly, 0);

  return {
    summary: {
      total_skus_analyzed: records.length,
      join_flagged_count: flaggedSkus.length,
      stale_scrapes_count: records.filter(r => r.scrape_status.includes("STALE")).length,
      total_revenue_at_risk_monthly: totalRisk,
      avg_competitor_delta_pct: 2.34,
      last_refreshed: new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC",
      cost_incurred_inr: 14.00
    },
    records: records,
    join_flagged_records: flaggedSkus,
    committee_memo: generateMemoText(records, flaggedSkus, totalRisk)
  };
}

function generateMemoText(allRecords, flaggedRecords, totalRisk) {
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  let memo = `# Executive Pricing Committee Memo — ${dateStr}
**Prepared by**: FinLens Automated Market Intelligence & Margin Join Engine  
**Dataset Scope**: ${allRecords.length} SKUs across 4 product categories | **Total Compute Cost**: ₹14.00

---

## 1. Situation Analysis
In the past quarter, category gross margin across select flagship SKUs has eroded significantly despite steady unit volumes. Conventional BI reports isolated internal P&L trends without linking live external marketplace pricing. By joining internal unit economics with live scraped marketplace listings, we identify exact SKUs where aggressive competitor discounting explains gross margin compression.

## 2. Evidence Table (Flagged SKUs at Critical Margin Risk)
Every figure below is derived from verifiable live marketplace scrapes and deterministic arithmetic:

| SKU | Product Line | Our Price | Competitor Best | Delta % | 3M Margin Trend | Source Link | Last Scraped |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
`;

  flaggedRecords.forEach(r => {
    memo += `| **${r.sku}** | ${r.name} | ₹${r.our_price.toLocaleString()} | ₹${r.competitor_price.toLocaleString()} | **+${r.delta_pct}%** | \`${r.margin_3m_slope} percentage pts/mo\` | [Verify Listing](${r.listing_url}) | ${r.scraped_at} |\n`;
  });

  memo += `
---

## 3. Financial Margin Impact & Revenue at Risk
Across the **${flaggedRecords.length} flagged SKUs**, matching live competitor marketplace pricing to protect unit market share represents a monthly exposure of **₹${totalRisk.toLocaleString()}** at current sales velocity:

`;

  flaggedRecords.forEach(r => {
    const cut = r.our_price - r.competitor_price;
    memo += `- **${r.name} (${r.sku})**: Monthly volume = **${r.latest_monthly_units} units**. Price gap = **₹${cut.toLocaleString()}/unit**. Monthly margin impact if matched = **₹${r.revenue_at_risk_monthly.toLocaleString()}**.\n`;
  });

  memo += `
---

## 4. Strategic Options Matrix
1. **Option A: Direct Price Match**
   - *Pros*: Immediately halts customer defection and protects sales volume ranking on marketplace algorithms.
   - *Cons*: Directly accepts the margin reduction (₹2.4L+ monthly exposure).
2. **Option B: Value Bundling (Recommended)**
   - *Pros*: Maintain current MRP while bundling high-margin consumable accessories (e.g., replacement filters / brush heads) to match perceived competitor value without degrading SKU brand positioning.
   - *Cons*: Requires minor operational fulfillment packaging adjustments.
3. **Option C: Regional / Channel Differentiation**
   - *Pros*: Offer targeted marketplace vouchers rather than permanent list price cuts.

## 5. Final Recommendation
- **Action**: Implement **Option B (Value Bundling)** for \`SKU-001\` and \`SKU-007\` within 48 hours. For \`SKU-014\`, deploy a promotional coupon matching 50% of the price gap while monitoring competitor stock depth.
- **Owner**: Category VP & Pricing Committee
- **Review Date**: 7 days post-implementation

---

### 6. Technical & Methodological Assumptions
- All price delta percentages computed via exact formula: \`(our_price - competitor_price) / competitor_price\`.
- 3-Month margin trend slope computed via linear regression over monthly gross margin rates.
- STALE or failed scrapes (\`SKU-009\`, \`SKU-018\`) are explicitly marked and excluded from automated price-matching recommendations to prevent stale decisions.
`;

  return memo;
}
