# 🇬🇧 UK Car Battery Finder (AutoBatteryFinder)

A production-grade automotive battery matching engine and comparison web application designed specifically for UK motorists, organic Google traffic dominance, mobile devices, and affiliate revenue monetization.

---

## ⚡ Key Capabilities & Built Features

### 1. Authentic UK Number Plate Registration Lookup
* **British Reflective Acrylic Styling:** High-contrast yellow UK number plate design (`#FFD200`), black 3D embossed border, and left blue European/UK flag band.
* **Smart Plate Formatter:** Automatically enforces uppercase characters, strips invalid symbols, and spaces standard UK formats (e.g. `AB12 CDE`).
* **Instant Demo / Offline Mode:** Pre-loaded with verified UK vehicle variants covering diverse engines, fuel types, and battery configurations:
  * `EA18 WXY` – 2018 Volkswagen Golf 1.5 TSI EVO (Stop-Start AGM, DIN 096AGM)
  * `FL15 GTY` – 2015 Ford Fiesta 1.0 EcoBoost (Stop-Start, Low-Profile Type 075)
  * `BV67 KLO` – 2017 BMW 320d M Sport (Heavy Duty Stop-Start AGM, Type 019AGM)
  * `SH19 BTR` – 2019 Nissan Qashqai 1.3 DIG-T (Stop-Start AGM, Type 096AGM)
  * `VO68 LME` – 2018 Vauxhall Corsa 1.4 ecoFLEX (Conventional Lead-Acid, Type 063)
  * `MK21 ZPA` – 2021 Toyota Yaris Hybrid (Under-Seat 12V Auxiliary, Type 054)
* **Intelligent UK Plate Synthesizer:** Automatically decodes the age identifier of any arbitrary UK plate (e.g. `21`, `68`, `15`) and maps realistic parameters and verified battery specifications.
* **Production DVLA VES API Layer:** Configured to query the official [DVLA Vehicle Enquiry Service API](https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/vehicle-enquiry-service-description.html) when an API key is supplied.

### 2. Manual Make / Model / Year / Engine Selector
* Full cascading drill-down selector for motorists without their number plate handy:
  * Select Make &rarr; Select Model &rarr; Select Generation/Year &rarr; Select Engine & Trim.
  * Covers top UK manufacturers: Ford, Volkswagen, BMW, Vauxhall, Nissan, Toyota, Audi, Mercedes-Benz, Land Rover.

### 3. Battery Matching & Safety Engine
* **Crucial Stop-Start Safety Warning:** Warns users against fitting cheap conventional flooded batteries into Stop-Start vehicles (which leads to plate sulfation and failure within 2–4 months).
* **Detailed Technical Specs:**
  * Exact millimeter dimensions ($L \times W \times H$).
  * Cold Cranking Amps (CCA / EN) and Amp-Hours (Ah).
  * Terminal Type (Standard T1 DIN Post) and Polarity Layout (Layout 0 Right Positive).
  * Base hold-down flange (B13).
  * Battery location (Engine bay, boot floor, or under seat).
  * BMS Reset / Coding flag (OBD battery registration requirements).

### 4. Affiliate Monetization & UK Retailer Comparison
* Live price comparison across leading UK automotive retailers:
  * **Halfords:** Store reserve & collect in 1 hour, in-store Halfords WeFit (£15–£25 fitting option).
  * **Tayna Batteries:** The UK's dedicated battery specialist with next-day DPD tracked delivery.
  * **Euro Car Parts:** Same-day Click & Collect across 250+ UK branches.
  * **Amazon UK:** Prime next-day tracked delivery.
* Affiliate link structure with UTM parameters and clear UK consumer disclosures.

### 5. Technical SEO & Content Architecture
* **Programmatic SEO Routes:**
  * `/battery-size` – Directory of all UK DIN battery codes.
  * `/battery-size/[code]` – Dedicated landing pages (e.g. `/battery-size/096`, `/battery-size/096agm`, `/battery-size/027`, `/battery-size/063`, `/battery-size/019agm`).
  * `/batteries/[make]` – Vehicle manufacturer landing pages (e.g. `/batteries/ford`, `/batteries/volkswagen`).
  * `/batteries/[make]/[model]` – Model-specific pages (e.g. `/batteries/ford/fiesta`, `/batteries/volkswagen/golf`).
* **Schema.org Structured Data (JSON-LD):**
  * `Product` schema with AggregateRating and Offers for Google Shopping rich snippets.
  * `FAQPage` schema on guides and model pages for Google search accordion snippets.
  * `BreadcrumbList` schema on all pages.
  * `WebSite` SearchAction schema.
  * `AutoPartsStore` Organization schema with `geo.region: GB`.
* **Automated XML Sitemap:** Dynamic 50+ URL sitemap at `/sitemap.xml` and standard `/robots.txt`.

### 6. Interactive Battery Diagnostic Tool
* Accessible at `/battery-health-checker` and embedded on the homepage.
* 4-step diagnostic quiz assessing starting symptoms (slow crank, clicking, blackout), battery age, driving habits, and headlight dimming.
* Outputs actionable advice (Critical Replacement Needed, Deep Recharging Required, or Healthy).

---

## 🛠️ Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript 5.6
* **Styling:** Tailwind CSS 3.4
* **Database ORM:** Prisma 5.22 (SQLite for local dev, PostgreSQL ready for production)
* **SEO:** Dynamic Metadata API, KaTeX/OpenGraph, JSON-LD schemas

---

## 🚀 Getting Started

### Prerequisites
* Node.js v18+ (tested on Node v26)
* npm or pnpm

### Installation

```bash
# Clone and enter the repository
cd auto-battery-finder

# Install dependencies (will also trigger prisma generate)
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static and dynamic routes
npm run build

# Start production server
npm run start
```

---

## 🔑 External Third-Party Integration Setup

The application is architected to run immediately in zero-credential mode with comprehensive mock databases and realistic plate synthesizers. To connect production external data providers:

### 1. Official DVLA Vehicle Enquiry Service (VES) API
1. Register on the [DVLA Developer Portal](https://developer-portal.driver-vehicle-licensing.api.gov.uk/).
2. Request access to the **Vehicle Enquiry Service (VES)**.
3. Once approved, copy your API key and update `.env`:
   ```env
   DVLA_API_KEY="your_dvla_api_key_here"
   DVLA_API_URL="https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles"
   ```

### 2. Commercial UK VRM Data Providers (Optional Fallback)
For commercial providers such as **UKVehicleData** or **RegCheck**:
```env
UK_VEHICLE_API_KEY="your_commercial_api_key"
UK_VEHICLE_API_PROVIDER="ukvehicledata"
```

### 3. Affiliate Network IDs
To monetize purchases:
* **Halfords / Euro Car Parts:** Join the **Awin (Affiliate Window)** network and apply to the Halfords (Merchant ID: 6205) and Euro Car Parts (Merchant ID: 3970) affiliate programs.
* **Amazon UK:** Register on [Amazon Associates UK](https://affiliate-program.amazon.co.uk/) and insert your Tracking ID into `AFFILIATE_AMAZON_TAG`.
* **Tayna Batteries:** Apply directly or via their partner network.

---

## 📂 Project Structure

```
auto-battery-finder/
├── app/
│   ├── api/lookup/uk/route.ts      # UK VRM lookup API endpoint
│   ├── batteries/
│   │   ├── [make]/page.tsx         # Programmatic Make landing pages
│   │   └── [make]/[model]/page.tsx # Programmatic Model landing pages
│   ├── battery-health-checker/     # Interactive diagnostic landing page
│   ├── battery-size/
│   │   ├── page.tsx                # UK Battery Code directory
│   │   └── [code]/page.tsx         # Dedicated battery size pages (096, 027...)
│   ├── car-battery/page.tsx        # Comprehensive buyer guide
│   ├── guides/                     # Content hub & educational guides
│   │   ├── agm-vs-efb-batteries/
│   │   ├── how-to-change-car-battery-uk/
│   │   ├── stop-start-battery-coding-explained/
│   │   └── car-battery-recycling-uk/
│   ├── layout.tsx                  # Root layout, metadata & JSON-LD
│   ├── page.tsx                    # Homepage with plate lookup & selector
│   ├── robots.ts                   # Search engine directives
│   └── sitemap.ts                  # Dynamic XML sitemap generator
├── components/
│   ├── battery/                    # Battery group cards & spec displays
│   ├── content/                    # Accordion FAQ sections
│   ├── layout/                     # Header, Footer, Breadcrumbs
│   ├── lookup/                     # Number plate lookup, selector & result card
│   ├── seo/                        # JSON-LD injector
│   ├── tools/                      # Battery health quiz
│   └── ui/                         # Badge, Button, Card, Input, Select
├── data/
│   ├── battery-groups.ts           # UK DIN battery sizes & retailer products
│   └── uk-vehicles.ts              # Vehicle hierarchies & sample plates
├── lib/
│   ├── providers/                  # DVLA & VehicleLookupService
│   ├── seo/                        # Metadata & JSON-LD generators
│   └── validators/                 # UK registration plate regex validators
└── prisma/
    └── schema.prisma               # Database schema (caching & vehicles)
```
