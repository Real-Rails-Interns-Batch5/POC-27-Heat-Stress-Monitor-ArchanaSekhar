// POC-27 Heat Stress & Occupational Health Risk Monitor
// Gulf Healthcare Real Rails Intelligence Library
// All data is fully synthetic and correlated

export interface DistrictHeatData {
  id: string;
  district: string;
  country: string;
  lat: number;
  lng: number;
  heat_index: number;
  workers_exposed: number;
  humidity: number;
  risk_level: "low" | "moderate" | "high" | "critical";
  incidents_7d: number;
}

export interface ComplianceTrend {
  month: string;
  compliance: number;
  incidents: number;
  heat_index: number;
}

export interface SectorRisk {
  sector: string;
  icon: string;
  risk_score: number;
  incidents: number;
  compliance_score: number;
  workers: number;
  trend: "up" | "down" | "stable";
}

export interface Alert {
  id: string;
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  location: string;
  timestamp: string;
  category: string;
  workers_at_risk?: number;
}

export interface KPIData {
  total_workers_exposed: number;
  avg_heat_index: number;
  total_incidents: number;
  compliance_rate: number;
  critical_zones: number;
  alerts_active: number;
}

export interface HeatTrend {
  date: string;
  heat_index: number;
  incidents: number;
  workers_exposed: number;
}

// ── District Heat Map Data (Gulf Region) ──────────────────────────────────────
export const districtHeatData: DistrictHeatData[] = [
  {
    id: "d01",
    district: "Al Quoz Industrial",
    country: "UAE",
    lat: 25.1456,
    lng: 55.2352,
    heat_index: 49.2,
    workers_exposed: 12400,
    humidity: 78,
    risk_level: "critical",
    incidents_7d: 23,
  },
  {
    id: "d02",
    district: "Jebel Ali Port Zone",
    country: "UAE",
    lat: 24.9999,
    lng: 55.0634,
    heat_index: 47.8,
    workers_exposed: 18700,
    humidity: 82,
    risk_level: "critical",
    incidents_7d: 31,
  },
  {
    id: "d03",
    district: "KIZAD (Khalifa Industrial)",
    country: "UAE",
    lat: 24.4539,
    lng: 54.5818,
    heat_index: 46.5,
    workers_exposed: 9800,
    humidity: 71,
    risk_level: "critical",
    incidents_7d: 18,
  },
  {
    id: "d04",
    district: "Dammam Industrial City",
    country: "KSA",
    lat: 26.4342,
    lng: 50.1033,
    heat_index: 51.3,
    workers_exposed: 21000,
    humidity: 65,
    risk_level: "critical",
    incidents_7d: 44,
  },
  {
    id: "d05",
    district: "Jubail Industrial City",
    country: "KSA",
    lat: 27.0046,
    lng: 49.6580,
    heat_index: 50.7,
    workers_exposed: 15600,
    humidity: 68,
    risk_level: "critical",
    incidents_7d: 38,
  },
  {
    id: "d06",
    district: "Riyadh Northern Zone",
    country: "KSA",
    lat: 24.8607,
    lng: 46.7219,
    heat_index: 48.9,
    workers_exposed: 13200,
    humidity: 22,
    risk_level: "critical",
    incidents_7d: 27,
  },
  {
    id: "d07",
    district: "Muscat Industrial Area",
    country: "Oman",
    lat: 23.6138,
    lng: 58.5922,
    heat_index: 44.3,
    workers_exposed: 7200,
    humidity: 74,
    risk_level: "high",
    incidents_7d: 12,
  },
  {
    id: "d08",
    district: "Salalah Free Zone",
    country: "Oman",
    lat: 17.0153,
    lng: 54.0924,
    heat_index: 38.7,
    workers_exposed: 4100,
    humidity: 81,
    risk_level: "high",
    incidents_7d: 7,
  },
  {
    id: "d09",
    district: "Doha Industrial Zone",
    country: "Qatar",
    lat: 25.2854,
    lng: 51.5310,
    heat_index: 47.1,
    workers_exposed: 16400,
    humidity: 76,
    risk_level: "critical",
    incidents_7d: 34,
  },
  {
    id: "d10",
    district: "Mesaieed Petrochemical",
    country: "Qatar",
    lat: 24.9976,
    lng: 51.5589,
    heat_index: 48.4,
    workers_exposed: 8900,
    humidity: 73,
    risk_level: "critical",
    incidents_7d: 21,
  },
  {
    id: "d11",
    district: "Manama Financial District",
    country: "Bahrain",
    lat: 26.2285,
    lng: 50.5860,
    heat_index: 43.2,
    workers_exposed: 3400,
    humidity: 79,
    risk_level: "high",
    incidents_7d: 6,
  },
  {
    id: "d12",
    district: "Hidd Industrial Area",
    country: "Bahrain",
    lat: 26.2394,
    lng: 50.6558,
    heat_index: 45.6,
    workers_exposed: 5100,
    humidity: 77,
    risk_level: "critical",
    incidents_7d: 11,
  },
  {
    id: "d13",
    district: "Shuwaikh Industrial",
    country: "Kuwait",
    lat: 29.3647,
    lng: 47.9361,
    heat_index: 52.1,
    workers_exposed: 11300,
    humidity: 48,
    risk_level: "critical",
    incidents_7d: 29,
  },
  {
    id: "d14",
    district: "Mina Abdullah Refinery",
    country: "Kuwait",
    lat: 28.9988,
    lng: 48.1671,
    heat_index: 50.3,
    workers_exposed: 6700,
    humidity: 52,
    risk_level: "critical",
    incidents_7d: 17,
  },
  {
    id: "d15",
    district: "Sharjah Industrial Area",
    country: "UAE",
    lat: 25.3304,
    lng: 55.4210,
    heat_index: 45.8,
    workers_exposed: 8400,
    humidity: 75,
    risk_level: "critical",
    incidents_7d: 16,
  },
  {
    id: "d16",
    district: "Fujairah Port Zone",
    country: "UAE",
    lat: 25.1288,
    lng: 56.3264,
    heat_index: 41.2,
    workers_exposed: 4300,
    humidity: 69,
    risk_level: "high",
    incidents_7d: 8,
  },
  {
    id: "d17",
    district: "Al Ain Agricultural Zone",
    country: "UAE",
    lat: 24.2075,
    lng: 55.7447,
    heat_index: 43.7,
    workers_exposed: 6200,
    humidity: 36,
    risk_level: "high",
    incidents_7d: 9,
  },
  {
    id: "d18",
    district: "Mecca Construction Zone",
    country: "KSA",
    lat: 21.3891,
    lng: 39.8579,
    heat_index: 46.8,
    workers_exposed: 32000,
    humidity: 29,
    risk_level: "critical",
    incidents_7d: 52,
  },
];

// ── Compliance vs Incident Trend (12 months) ─────────────────────────────────
// Higher heat months (summer) → lower compliance → more incidents
export const complianceTrend: ComplianceTrend[] = [
  { month: "Jul '24", compliance: 61, incidents: 48, heat_index: 50.2 },
  { month: "Aug '24", compliance: 58, incidents: 54, heat_index: 51.7 },
  { month: "Sep '24", compliance: 67, incidents: 39, heat_index: 47.3 },
  { month: "Oct '24", compliance: 76, incidents: 22, heat_index: 40.1 },
  { month: "Nov '24", compliance: 84, incidents: 14, heat_index: 33.4 },
  { month: "Dec '24", compliance: 91, incidents: 8,  heat_index: 27.6 },
  { month: "Jan '25", compliance: 93, incidents: 6,  heat_index: 25.8 },
  { month: "Feb '25", compliance: 90, incidents: 9,  heat_index: 27.9 },
  { month: "Mar '25", compliance: 85, incidents: 13, heat_index: 32.4 },
  { month: "Apr '25", compliance: 79, incidents: 19, heat_index: 38.7 },
  { month: "May '25", compliance: 71, incidents: 31, heat_index: 44.5 },
  { month: "Jun '25", compliance: 63, incidents: 47, heat_index: 49.1 },
];

// ── Sector Risk Matrix ────────────────────────────────────────────────────────
export const sectorRiskData: SectorRisk[] = [
  {
    sector: "Construction",
    icon: "🏗️",
    risk_score: 91,
    incidents: 187,
    compliance_score: 58,
    workers: 89400,
    trend: "up",
  },
  {
    sector: "Oil & Gas",
    icon: "⛽",
    risk_score: 87,
    incidents: 143,
    compliance_score: 63,
    workers: 54200,
    trend: "up",
  },
  {
    sector: "Logistics & Port",
    icon: "🚢",
    risk_score: 83,
    incidents: 121,
    compliance_score: 67,
    workers: 67800,
    trend: "stable",
  },
  {
    sector: "Agriculture",
    icon: "🌾",
    risk_score: 79,
    incidents: 98,
    compliance_score: 61,
    workers: 43100,
    trend: "up",
  },
  {
    sector: "Road Works",
    icon: "🛣️",
    risk_score: 74,
    incidents: 76,
    compliance_score: 71,
    workers: 28700,
    trend: "stable",
  },
  {
    sector: "Utilities",
    icon: "⚡",
    risk_score: 68,
    incidents: 54,
    compliance_score: 74,
    workers: 19300,
    trend: "down",
  },
  {
    sector: "Petrochemical",
    icon: "🏭",
    risk_score: 85,
    incidents: 112,
    compliance_score: 69,
    workers: 38600,
    trend: "up",
  },
  {
    sector: "Retail Outdoor",
    icon: "🏪",
    risk_score: 52,
    incidents: 31,
    compliance_score: 82,
    workers: 24500,
    trend: "down",
  },
  {
    sector: "Waste Management",
    icon: "♻️",
    risk_score: 71,
    incidents: 63,
    compliance_score: 73,
    workers: 16900,
    trend: "stable",
  },
  {
    sector: "Security Services",
    icon: "🛡️",
    risk_score: 61,
    incidents: 44,
    compliance_score: 78,
    workers: 31200,
    trend: "down",
  },
];

// ── Alert Center Data ──────────────────────────────────────────────────────────
export const alertsData: Alert[] = [
  {
    id: "a01",
    severity: "critical",
    message: "Heat index exceeded 52°C in Shuwaikh Industrial. Mandatory work suspension required. 11,300 workers at immediate risk.",
    location: "Shuwaikh Industrial, Kuwait",
    timestamp: "2025-06-26T08:14:00Z",
    category: "Extreme Heat",
    workers_at_risk: 11300,
  },
  {
    id: "a02",
    severity: "critical",
    message: "4 heat stroke cases reported in 2 hours. Dammam site EMS activated. Construction crews ordered to shelter.",
    location: "Dammam Industrial City, KSA",
    timestamp: "2025-06-26T09:31:00Z",
    category: "Medical Emergency",
    workers_at_risk: 21000,
  },
  {
    id: "a03",
    severity: "critical",
    message: "Mecca Construction Zone compliance at 49% — well below 60% threshold. Regulator inspection triggered.",
    location: "Mecca Construction Zone, KSA",
    timestamp: "2025-06-26T07:55:00Z",
    category: "Compliance Breach",
    workers_at_risk: 32000,
  },
  {
    id: "a04",
    severity: "high",
    message: "Humidity spiked to 84% in Jebel Ali. Heat index effective temperature correction applied. Rest period extended to 25 min/hr.",
    location: "Jebel Ali Port Zone, UAE",
    timestamp: "2025-06-26T10:02:00Z",
    category: "Humidity Alert",
    workers_at_risk: 18700,
  },
  {
    id: "a05",
    severity: "high",
    message: "Doha Industrial Zone: 34 incidents in 7 days, trending 18% above 30-day average. Sector-wide review initiated.",
    location: "Doha Industrial Zone, Qatar",
    timestamp: "2025-06-26T06:30:00Z",
    category: "Incident Spike",
    workers_at_risk: 16400,
  },
  {
    id: "a06",
    severity: "high",
    message: "Heat stress forecasted to intensify through 14:00 GST. Advisory: suspend high-exertion tasks in UAE zones.",
    location: "UAE — Regional Advisory",
    timestamp: "2025-06-26T11:00:00Z",
    category: "Forecast Warning",
    workers_at_risk: 49800,
  },
  {
    id: "a07",
    severity: "medium",
    message: "Compliance rate dropped 8 points YoY in construction sector. Mandatory refresher training flagged for Q3.",
    location: "Gulf Region — Construction Sector",
    timestamp: "2025-06-25T14:20:00Z",
    category: "Compliance Trend",
    workers_at_risk: 89400,
  },
  {
    id: "a08",
    severity: "medium",
    message: "2 workers treated for dehydration at Jubail site. Hydration station deployment verified.",
    location: "Jubail Industrial City, KSA",
    timestamp: "2025-06-26T08:45:00Z",
    category: "Medical",
    workers_at_risk: 15600,
  },
  {
    id: "a09",
    severity: "medium",
    message: "Al Ain agricultural zone workers at 43.7°C heat index. Shade structure audit requested.",
    location: "Al Ain Agricultural Zone, UAE",
    timestamp: "2025-06-25T15:10:00Z",
    category: "Heat Exposure",
    workers_at_risk: 6200,
  },
  {
    id: "a10",
    severity: "low",
    message: "Sharjah site personal protective equipment (PPE) compliance improved to 77%. Monitoring continued.",
    location: "Sharjah Industrial Area, UAE",
    timestamp: "2025-06-25T16:00:00Z",
    category: "PPE Compliance",
    workers_at_risk: 8400,
  },
  {
    id: "a11",
    severity: "low",
    message: "Salalah Free Zone heat index at 38.7°C — below intervention threshold. Routine monitoring active.",
    location: "Salalah Free Zone, Oman",
    timestamp: "2025-06-26T09:15:00Z",
    category: "Routine Monitor",
    workers_at_risk: 4100,
  },
  {
    id: "a12",
    severity: "low",
    message: "Manama district water supply infrastructure for worker hydration stations confirmed operational.",
    location: "Manama Financial District, Bahrain",
    timestamp: "2025-06-25T13:30:00Z",
    category: "Infrastructure",
    workers_at_risk: 3400,
  },
];

// ── KPI Summary ───────────────────────────────────────────────────────────────
export const kpiData: KPIData = {
  total_workers_exposed: 187500,
  avg_heat_index: 46.8,
  total_incidents: 367,
  compliance_rate: 64,
  critical_zones: 12,
  alerts_active: 12,
};

// ── 30-Day Heat Trend Data ────────────────────────────────────────────────────
export const heatTrendData: HeatTrend[] = [
  { date: "May 28", heat_index: 43.1, incidents: 18, workers_exposed: 142000 },
  { date: "May 30", heat_index: 44.2, incidents: 21, workers_exposed: 148000 },
  { date: "Jun 01", heat_index: 44.9, incidents: 24, workers_exposed: 151000 },
  { date: "Jun 03", heat_index: 45.3, incidents: 26, workers_exposed: 154000 },
  { date: "Jun 05", heat_index: 46.1, incidents: 29, workers_exposed: 158000 },
  { date: "Jun 07", heat_index: 46.8, incidents: 33, workers_exposed: 162000 },
  { date: "Jun 09", heat_index: 47.2, incidents: 36, workers_exposed: 165000 },
  { date: "Jun 11", heat_index: 47.8, incidents: 40, workers_exposed: 169000 },
  { date: "Jun 13", heat_index: 48.3, incidents: 43, workers_exposed: 172000 },
  { date: "Jun 15", heat_index: 49.1, incidents: 47, workers_exposed: 176000 },
  { date: "Jun 17", heat_index: 48.7, incidents: 44, workers_exposed: 174000 },
  { date: "Jun 19", heat_index: 49.4, incidents: 49, workers_exposed: 178000 },
  { date: "Jun 21", heat_index: 50.1, incidents: 53, workers_exposed: 182000 },
  { date: "Jun 23", heat_index: 49.8, incidents: 51, workers_exposed: 180000 },
  { date: "Jun 25", heat_index: 50.6, incidents: 56, workers_exposed: 186000 },
  { date: "Jun 26", heat_index: 46.8, incidents: 47, workers_exposed: 187500 },
];
