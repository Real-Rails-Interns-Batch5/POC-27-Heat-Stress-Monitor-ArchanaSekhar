"use client";
import { kpiData, sectorRiskData, districtHeatData, complianceTrend } from "@/data/dataset";
import { Brain, AlertTriangle, TrendingUp, ShieldAlert, Info } from "lucide-react";

const insights = [
  {
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/5 border-red-500/20",
    title: "Heat Surge Correlation Detected",
    body:
      "Gulf-wide heat index has risen 7.5°C over 30 days, correlating with a 211% increase in reported incidents (18 → 56). The relationship is statistically significant (r = 0.97). Kuwait's Shuwaikh zone reached 52.1°C — highest recorded in the monitoring period.",
  },
  {
    icon: ShieldAlert,
    color: "text-orange-400",
    bg: "bg-orange-500/5 border-orange-500/20",
    title: "Compliance Deterioration in Summer Months",
    body:
      "Compliance rates fall to 58–63% in peak summer (Jul–Aug), against a 75% target threshold. Construction and Oil & Gas sectors are the primary laggards at 58% and 63% respectively. Each 10-point compliance drop corresponds to approximately 18 additional incidents per month.",
  },
  {
    icon: TrendingUp,
    color: "text-yellow-400",
    bg: "bg-yellow-500/5 border-yellow-500/20",
    title: "Mecca Construction Zone: Highest Absolute Risk",
    body:
      "With 32,000 workers exposed and 52 incidents in 7 days, Mecca Construction Zone carries the highest aggregate risk load. Compliance at 49% is the lowest recorded across all 18 monitored zones. Regulator intervention has been triggered.",
  },
  {
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-500/5 border-cyan-500/20",
    title: "Predictive Risk Window: Next 14 Days",
    body:
      "Based on seasonal patterns, heat index is projected to remain ≥47°C across UAE and KSA zones through July 9. Without compliance improvement, the model projects 65–80 incidents in the next 7 days — a 35–70% increase over current week. Mandatory midday breaks (11:00–15:00) would reduce projected incidents by ~42%.",
  },
  {
    icon: Info,
    color: "text-blue-400",
    bg: "bg-blue-500/5 border-blue-500/20",
    title: "What This Means for Health Authorities",
    body:
      "Priority actions: (1) Emergency compliance audits in the 12 critical zones. (2) Expansion of hydration stations in KSA and Kuwait industrial areas. (3) Cross-sector education campaign on WBGT thresholds. (4) Fast-track accreditation of 15 occupational health nurses across high-risk sites. Real-time monitoring coverage should extend to 25+ zones by August.",
  },
];

export default function IntelligencePanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-4 h-4 text-cyan-400" />
        <span className="text-sm text-gray-400">AI-generated intelligence summary · Updated 26 Jun 2025 11:30 GST</span>
        <span className="ml-auto text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-2 py-0.5 rounded">
          LIVE
        </span>
      </div>
      {insights.map((ins, i) => {
        const Icon = ins.icon;
        return (
          <div key={i} className={`border rounded-lg p-4 ${ins.bg}`}>
            <div className="flex items-start gap-3">
              <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${ins.color}`} />
              <div>
                <div className={`font-semibold text-sm mb-1.5 ${ins.color}`}>{ins.title}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{ins.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
