# FINLENS — Competitor Pricing × Gross Margin Analytics Application

Built strictly adhering to `FinLens_MCP.ipynb` requirements and full-stack deployment playbooks (`deploy-guide-fullstack-code (1).md` and `deploy-guide-builder-frontend (1).md`).

---

## What FinLens Solves
Every month analysts spend 6–10 hours rebuilding competitor pricing sheets in Excel. By the time it is shared, it is stale. And the critical question—***which product line's margin fell fastest, and is competitor pricing the reason?***—is never answered because:
- No scraping tool has your P&L.
- No BI tool has live competitor prices.

FinLens performs **The Join**, cross-referencing internal declining margin trends with live marketplace scraped prices to flag at-risk SKUs and generate a cited **Executive Pricing Committee Memo**.

---

## 4 Core Outputs
1. **Pricing Tracker**: Live table across 25 SKUs showing Our Price vs. Competitor Best, Price Delta %, 3-Month Gross Margin Slope, Scrape Status, and source URLs.
2. **Revenue-at-Risk**: Calculates financial exposure (`units × (our_price - comp_price)`) if we match competitor pricing.
3. **🔥 The Margin Join**: Flagging SKUs where gross margin has dropped steadily over the last 3 months AND our price is >10% above the marketplace.
4. **Pricing Committee Memo**: Automated markdown memo ready for committee review, with every number traceable to code/scraped sources.

---

## Repository Structure

```
c:\Users\HP\OneDrive\Documents\anti\
├── backend/                  # FastAPI + Pandas Deterministic Analytics Engine
│   ├── app/
│   ├── core/
│   │   └── engine.py         # Exact pandas/numpy linear slope & join logic
│   ├── data/
│   │   └── sample_generator.py # Pre-engineered 25 SKU dataset + 3 flagship declining SKUs
│   ├── main.py               # REST endpoints (/api/finlens/demo, /api/finlens/analyze)
│   ├── requirements.txt
│   ├── Dockerfile
│   └── render.yaml
├── frontend/                 # Modern React + Vite Web Application
│   ├── src/
│   │   ├── components/       # Header, KpiCards, MarginJoinCard, PricingTable, MemoModal
│   │   ├── data/
│   │   │   └── demoEngine.js # Client-side mirror of Pandas engine for offline browser demo
│   │   ├── App.jsx
│   │   └── index.css         # Premium Obsidian dark-mode glassmorphic design
│   ├── vercel.json
│   └── Dockerfile
└── README.md
```

---

## Running Locally

### 1. Run Backend Server (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
- Healthcheck: `http://localhost:8000/api/health`
- Demo JSON: `http://localhost:8000/api/finlens/demo`

### 2. Run Frontend App (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
- Open `http://localhost:3000`
- Supports toggling between **Demo Story Mode** (local instant execution) and **Live Mode (API)**.

---

## Full-Stack Deployment Playbook

### Backend Deployment (Render / Free Hosting)
1. Push this folder to a GitHub repository.
2. Go to [Render.com](https://render.com) → **New Web Service** → Connect your repo.
3. Set root directory to `backend/`.
4. Build command: `pip install -r requirements.txt`
5. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
6. Once deployed, copy your Render URL (`https://finlens-backend.onrender.com`).

### Frontend Deployment (Vercel / Netlify)
1. Go to [Vercel.com](https://vercel.com) → **Add New Project** → Import the same repo.
2. Set root directory to `frontend/`.
3. Add Environment Variable: `VITE_API_URL=https://finlens-backend.onrender.com`
4. Click **Deploy**.
