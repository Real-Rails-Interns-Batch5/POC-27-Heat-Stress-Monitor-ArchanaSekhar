"use client";
import { kpiData } from "@/data/dataset";
import { formatNumber } from "@/lib/utils";
import { Users, Thermometer, AlertTriangle, ShieldCheck, MapPin, Bell } from "lucide-react";

const cards = [
  {
    label: "Workers Exposed",
    value: formatNumber(kpiData.total_workers_exposed),
    sub: "Across 18 monitored zones",
    icon: Users,
    color: "text-blue-400",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
  },
  {
    label: "Avg Heat Index",
    value: `${kpiData.avg_heat_index}°C`,
    sub: "Gulf-wide composite",
    icon: Thermometer,
    color: "text-red-400",
    border: "border-red-500/20",
    glow: "shadow-red-500/10",
  },
  {
    label: "Total Incidents",
    value: kpiData.total_incidents.toString(),
    sub: "Last 30 days · +14% MoM",
    icon: AlertTriangle,
    color: "text-orange-400",
    border: "border-orange-500/20",
    glow: "shadow-orange-500/10",
  },
  {
    label: "Compliance Rate",
    value: `${kpiData.compliance_rate}%`,
    sub: "Below 75% threshold",
    icon: ShieldCheck,
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    glow: "shadow-yellow-500/10",
  },
  {
    label: "Critical Zones",
    value: kpiData.critical_zones.toString(),
    sub: "Intervention required",
    icon: MapPin,
    color: "text-red-400",
    border: "border-red-500/20",
    glow: "shadow-red-500/10",
  },
  {
    label: "Active Alerts",
    value: kpiData.alerts_active.toString(),
    sub: "3 critical · 3 high",
    icon: Bell,
    color: "text-purple-400",
    border: "border-purple-500/20",
    glow: "shadow-purple-500/10",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`bg-[#0f1419] border ${card.border} rounded-lg p-4 shadow-lg ${card.glow} hover:bg-[#141c24] transition-colors duration-200`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                {card.label}
              </span>
              <Icon className={`w-4 h-4 ${card.color}`} />
            </div>
            <div className={`text-2xl font-bold ${card.color} mb-1`}>{card.value}</div>
            <div className="text-xs text-gray-600">{card.sub}</div>
          </div>
        );
      })}
    </div>
  );
}
