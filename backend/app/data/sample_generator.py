import pandas as pd
import numpy as np
from datetime import datetime

def get_demo_dataset():
    """
    Returns the internal sample dataset and scraped competitor pricing data
    telling the core FinLens story: 3 engineered SKUs bleeding margin
    due to being priced >10% above competitors.
    """
    # 1. Products (25 SKUs across 4 categories)
    products_data = [
        # Flagship Declining & Overpriced SKUs (The Demo Story)
        {"sku": "SKU-001", "name": "Air Fryer Digital 4.2L", "category": "Kitchen Appliances", "our_price": 6499.0, "unit_cost": 4100.0},
        {"sku": "SKU-007", "name": "Sonic Electric Toothbrush Pro", "category": "Personal Care", "our_price": 3299.0, "unit_cost": 1950.0},
        {"sku": "SKU-014", "name": "TrueWireless ANC Earbuds Pro", "category": "Smart Accessories", "our_price": 4999.0, "unit_cost": 2900.0},
        
        # Healthy or Neutral SKUs across categories
        {"sku": "SKU-002", "name": "Cold Press Slow Juicer 200W", "category": "Kitchen Appliances", "our_price": 8999.0, "unit_cost": 5200.0},
        {"sku": "SKU-003", "name": "Espresso Machine 15-Bar", "category": "Kitchen Appliances", "our_price": 11499.0, "unit_cost": 6800.0},
        {"sku": "SKU-004", "name": "Induction Cooktop Touch 2000W", "category": "Kitchen Appliances", "our_price": 2899.0, "unit_cost": 1700.0},
        {"sku": "SKU-005", "name": "Multi-Cooker Electric 6L", "category": "Kitchen Appliances", "our_price": 5799.0, "unit_cost": 3400.0},
        {"sku": "SKU-006", "name": "High-Speed Blender 1200W", "category": "Kitchen Appliances", "our_price": 4499.0, "unit_cost": 2600.0},
        {"sku": "SKU-008", "name": "Water Flosser Cordless Rechargeable", "category": "Personal Care", "our_price": 2699.0, "unit_cost": 1500.0},
        {"sku": "SKU-009", "name": "Ionic Hair Dryer 1800W", "category": "Personal Care", "our_price": 2199.0, "unit_cost": 1250.0},
        {"sku": "SKU-010", "name": "Shiatsu Neck Massage Pillow", "category": "Personal Care", "our_price": 2499.0, "unit_cost": 1400.0},
        {"sku": "SKU-011", "name": "LED Facial Therapy Mask", "category": "Personal Care", "our_price": 4299.0, "unit_cost": 2300.0},
        {"sku": "SKU-012", "name": "Cordless Beard Trimmer Precision", "category": "Personal Care", "our_price": 1499.0, "unit_cost": 850.0},
        {"sku": "SKU-013", "name": "Smart Body Scale Wi-Fi", "category": "Personal Care", "our_price": 1999.0, "unit_cost": 1100.0},
        {"sku": "SKU-015", "name": "Magnetic Power Bank 10000mAh", "category": "Smart Accessories", "our_price": 2499.0, "unit_cost": 1450.0},
        {"sku": "SKU-016", "name": "GaN Fast Charger 65W 3-Port", "category": "Smart Accessories", "our_price": 1899.0, "unit_cost": 1050.0},
        {"sku": "SKU-017", "name": "Smart Watch AMOLED GPS", "category": "Smart Accessories", "our_price": 5999.0, "unit_cost": 3500.0},
        {"sku": "SKU-018", "name": "Ergonomic Vertical Wireless Mouse", "category": "Smart Accessories", "our_price": 1699.0, "unit_cost": 950.0},
        {"sku": "SKU-019", "name": "Mechanical Keyboard RGB Wireless", "category": "Smart Accessories", "our_price": 4599.0, "unit_cost": 2700.0},
        {"sku": "SKU-020", "name": "Robotic Vacuum & Mop Smart Nav", "category": "Home Essentials", "our_price": 18999.0, "unit_cost": 11500.0},
        {"sku": "SKU-021", "name": "HEPA Air Purifier True CADR 300", "category": "Home Essentials", "our_price": 7999.0, "unit_cost": 4600.0},
        {"sku": "SKU-022", "name": "Cordless Stick Vacuum 25kPa", "category": "Home Essentials", "our_price": 9999.0, "unit_cost": 5900.0},
        {"sku": "SKU-023", "name": "Dehumidifier Portable 12L", "category": "Home Essentials", "our_price": 12499.0, "unit_cost": 7500.0},
        {"sku": "SKU-024", "name": "Ultrasonic Humidifier Warm/Cool", "category": "Home Essentials", "our_price": 3499.0, "unit_cost": 1900.0},
        {"sku": "SKU-025", "name": "Smart Lock Biometric Fingerprint", "category": "Home Essentials", "our_price": 8499.0, "unit_cost": 4900.0},
    ]
    df_products = pd.DataFrame(products_data)

    # 2. Competitor Map & Scraped Prices (1 single batched scrape result)
    competitor_data = [
        # Flagship 3 items priced > 10% above market
        {"sku": "SKU-001", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B08XAIRFRY42L", "competitor_price": 5499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-007", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/sonic-elec-pro/p/itm98412", "competitor_price": 2799.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-014", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09ZANCPRO9", "competitor_price": 4199.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        
        # Healthy items close to competitor price or below
        {"sku": "SKU-002", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B07YJUICER200", "competitor_price": 8799.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-003", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/espresso-15bar/p/itm11245", "competitor_price": 11699.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-004", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B08KCOOK2000", "competitor_price": 2850.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-005", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09JMULTI6L", "competitor_price": 5799.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-006", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/blender-1200w/p/itm88231", "competitor_price": 4449.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-008", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B08LWFLOSS26", "competitor_price": 2699.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-009", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B07XHAIR1800", "competitor_price": None, "in_stock": False, "scrape_status": "STALE — scrape failed", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-010", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/neck-pillow/p/itm33129", "competitor_price": 2499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-011", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09YLEDMASK", "competitor_price": 4350.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-012", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B08MTRIM1499", "competitor_price": 1499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-013", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/smart-scale/p/itm44102", "competitor_price": 1899.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-015", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09ZMAGPB10K", "competitor_price": 2399.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-016", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B08XGAN65W3P", "competitor_price": 1899.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-017", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/smartwatch-gps/p/itm66103", "competitor_price": 5999.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-018", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B07XMOUSE1699", "competitor_price": None, "in_stock": False, "scrape_status": "STALE — scrape failed", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-019", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09YMECHRGB", "competitor_price": 4499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-020", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/robovac-mop/p/itm99104", "competitor_price": 18999.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-021", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B08XHEPA300", "competitor_price": 7899.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-022", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09ZSTICK25K", "competitor_price": 9999.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-023", "competitor": "Flipkart", "listing_url": "https://www.flipkart.com/dehumid-12l/p/itm55109", "competitor_price": 12499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-024", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B07YHUMID34", "competitor_price": 3499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"},
        {"sku": "SKU-025", "competitor": "Amazon India", "listing_url": "https://www.amazon.in/dp/B09YLOCKBIO", "competitor_price": 8499.0, "in_stock": True, "scrape_status": "SUCCESS", "scraped_at": "2026-07-12 06:15 UTC"}
    ]
    df_competitor = pd.DataFrame(competitor_data)

    # 3. 8 Months of Monthly Sales (Nov 2025 to Jun 2026)
    months = [
        "2025-11", "2025-12", "2026-01", "2026-02",
        "2026-03", "2026-04", "2026-05", "2026-06"
    ]
    sales_rows = []

    for sku_row in products_data:
        sku = sku_row["sku"]
        price = sku_row["our_price"]
        cost = sku_row["unit_cost"]

        for idx, month in enumerate(months):
            # Base monthly volume
            base_units = int(180 + (idx * 5))
            
            # Engineered declining margin for SKU-001, SKU-007, SKU-014 over last 3 months
            if sku == "SKU-001":
                # Kitchen Air Fryer: aggressive price matching or discounts eroded margin
                margin_rates = [0.37, 0.36, 0.36, 0.35, 0.35, 0.31, 0.24, 0.17]
                margin_rate = margin_rates[idx]
                units = 310
            elif sku == "SKU-007":
                # Toothbrush Pro
                margin_rates = [0.41, 0.41, 0.40, 0.40, 0.39, 0.35, 0.27, 0.18]
                margin_rate = margin_rates[idx]
                units = 420
            elif sku == "SKU-014":
                # Earbuds Pro
                margin_rates = [0.42, 0.42, 0.41, 0.40, 0.39, 0.33, 0.25, 0.17]
                margin_rate = margin_rates[idx]
                units = 280
            else:
                # Normal stable or slight fluctuation
                base_margin = (price - cost) / price
                margin_rate = round(base_margin + np.random.uniform(-0.01, 0.01), 3)
                units = base_units

            revenue = round(units * price, 2)
            gross_margin = round(revenue * margin_rate, 2)

            sales_rows.append({
                "sku": sku,
                "month": month,
                "units": units,
                "revenue": revenue,
                "gross_margin": gross_margin,
                "margin_rate": round(margin_rate * 100, 2)
            })

    df_sales = pd.DataFrame(sales_rows)
    return df_products, df_competitor, df_sales
