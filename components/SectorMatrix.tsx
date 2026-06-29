"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from "recharts";
import { sectorRiskData } from "@/data/dataset";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const row = sectorRiskData.find((s) => s.sector === label);
    return (
      <div className="bg-[#0f1419] border border-gray-700 rounded-lg p-3 text-sm">
        <div className="font-semibold text-white mb-2">{label}</div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Risk Score</span>
            <span className="text-red-400 font-bold">{payload[0]?.value}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Compliance</span>
            <span className="text-green-400">{row?.compliance_score}%</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Incidents</span>
            <span className="text-orange-400">{row?.incidents}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Workers</span>
            <span className="text-blue-400">{(row?.workers ?? 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

function getRiskBarColor(score: number): string {
  if (score >= 85) return "#ef4444";
  if (score >= 70) return "#f97316";
  if (score >= 55) return "#eab308";
  return "#22c55e";
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <TrendingUp className="w-3 h-3 text-red-400" />;
  if (trend === "down") return <TrendingDown className="w-3 h-3 text-green-400" />;
  return <Minus className="w-3 h-3 text-gray-500" />;
}

const sorted = [...(sectorRiskData || [])].sort((a, b) => b.risk_score - a.risk_score);

export default function SectorMatrix() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sorted}
            layout="vertical"
            margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2a35" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              axisLine={{ stroke: "#1e2a35" }}
              tickLine={false}
            />
            <YAxis
              dataKey="sector"
              type="category"
              width={120}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="risk_score" radius={[0, 3, 3, 0]}>
              {sorted.map((entry) => (
                <Cell key={entry.sector} fill={getRiskBarColor(entry.risk_score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Trend badges */}
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-800">
        {sorted.slice(0, 5).map((s) => (
          <div
            key={s.sector}
            className="flex items-center gap-1 bg-gray-800/50 border border-gray-700 rounded px-2 py-1"
          >
            <span className="text-xs">{s.icon}</span>
            <span className="text-xs text-gray-400">{s.sector}</span>
            <TrendIcon trend={s.trend} />
          </div>
        ))}
      </div>
    </div>
  );
}
