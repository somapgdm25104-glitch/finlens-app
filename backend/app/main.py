import io
import os
import pandas as pd
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.data.sample_generator import get_demo_dataset
from app.core.engine import run_finlens_analysis

app = FastAPI(
    title="FinLens API — Competitor Pricing × Gross Margin Analytics",
    version="1.0.0",
    description="Automated P&L and marketplace price scraping join engine."
)

# Enable CORS for frontend builder/development domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, can restrict via CORS_ORIGIN env var
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "service": "FinLens Backend API",
        "status": "active",
        "endpoints": ["/api/health", "/api/finlens/demo", "/api/finlens/analyze"]
    }

@app.get("/api/health")
def healthcheck():
    return {
        "status": "healthy",
        "service": "finlens-backend",
        "port": os.environ.get("PORT", "8000")
    }

@app.get("/api/finlens/demo")
def get_demo_analysis():
    """
    Returns the complete FinLens analysis on the built-in pre-engineered
    25-SKU dataset with 3 flagship declining-margin SKUs.
    """
    df_products, df_competitor, df_sales = get_demo_dataset()
    results = run_finlens_analysis(df_products, df_competitor, df_sales)
    return results

@app.post("/api/finlens/analyze")
async def analyze_custom_csvs(
    products_file: UploadFile = File(...),
    competitor_file: UploadFile = File(...),
    sales_file: UploadFile = File(...)
):
    """
    Accepts custom uploaded CSVs for live analysis.
    """
    try:
        prod_content = await products_file.read()
        comp_content = await competitor_file.read()
        sales_content = await sales_file.read()

        df_products = pd.read_csv(io.BytesIO(prod_content))
        df_competitor = pd.read_csv(io.BytesIO(comp_content))
        df_sales = pd.read_csv(io.BytesIO(sales_content))

        results = run_finlens_analysis(df_products, df_competitor, df_sales)
        return results
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing CSV files: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=True)
