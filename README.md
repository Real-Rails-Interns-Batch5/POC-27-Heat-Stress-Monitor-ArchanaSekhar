# POC-27 · Heat Stress & Occupational Health Risk Monitor

## Rail: Occupational Health  
## Theme: Gulf Healthcare Real Rails Intelligence Library

---

## 1. Project Overview

The Heat Stress & Occupational Health Risk Monitor is an intelligence dashboard designed to visualize the impact of extreme heat conditions on outdoor worker safety across Gulf-style environments.

It simulates how environmental factors (heat index, humidity, and exposure time) directly influence occupational incidents, compliance risk, and workforce safety patterns.

The system is designed as a decision-support tool for regulators, employers, and safety authorities.

---

## 2. Problem Statement

Outdoor labor environments in hot climate regions face increasing occupational risks due to extreme heat exposure. However, data related to heat index, worker distribution, and incident correlation is often fragmented or unavailable in a unified view.

This project addresses the gap by simulating a unified intelligence layer that connects:
- Environmental heat data
- Workforce exposure levels
- Incident and compliance trends
- Regional risk distribution

---

## 3. Key Features

### 🌍 Geospatial Heat Risk Map
- Leaflet-based interactive map
- District-wise heat index visualization
- Worker exposure scaling
- Risk-level color encoding

### 📊 KPI Intelligence Layer
- Total workforce exposed
- Average heat index
- Incident trends
- Compliance scoring

### 🚨 Alert Intelligence Center
- Severity-based alert system (Critical / High / Medium / Low)
- Expandable incident cards
- Time-based alert tracking
- Worker-at-risk indicators

### 📈 Trend & Risk Analytics
- Heat vs incident correlation charts
- Sector-based risk matrix
- Time-series exposure trends

### 🧠 Intelligence Panel
- Auto-generated insights
- Risk forecasting logic (rule-based simulation)
- Safety recommendations layer

---

## 4. Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Leaflet.js (Map visualization)
- React-Leaflet
- Recharts (data visualization)
- Lucide Icons
- Synthetic dataset (POC simulation layer)

---

## 5. Data Sources

This project uses **synthetic structured data** designed to simulate real-world occupational and climate datasets.

Mapped real-world references:
- NOAA / Open-Meteo (heat index simulation)
- ILO occupational safety reports (risk modeling concept)
- UAE / Gulf heat safety guidelines (reference framework)

All datasets are mock-generated for demonstration purposes.

---

## 6. How to Run

```bash
npm install
npm run dev