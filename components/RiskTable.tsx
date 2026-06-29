"use client";
import { useState } from "react";
import { districtHeatData } from "@/data/dataset";
import { getRiskColor, formatNumber } from "@/lib/utils";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

type SortKey = "district" | "heat_index" | "workers_exposed" | "incidents_7d" | "risk_level";
type SortDir = "asc" | "desc";

const riskOrder = { critical: 4, high: 3, moderate: 2, low: 1 };

export default function RiskTable() {
  const [sortKey, setSortKey] = useState<SortKey>("heat_index");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const data = districtHeatData || [];

  const sorted = [...data].sort((a, b) => {
    let av: any = a[sortKey];
    let bv: any = b[sortKey];
    if (sortKey === "risk_level") {
      av = riskOrder[a.risk_level] ?? 0;
      bv = riskOrder[b.risk_level] ?? 0;
    }
    if (av < bv) return sortDir === "asc" ? -1 : 1;
    if (av > bv) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  function toggle(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("desc"); }
  }

  function SortIcon({ k }: { k: SortKey }) {
    if (sortKey !== k) return <ArrowUpDown className="w-3 h-3 opacity-30" />;
    return sortDir === "asc" ? <ArrowUp className="w-3 h-3 text-cyan-400" /> : <ArrowDown className="w-3 h-3 text-cyan-400" />;
  }

  const maxHeat = Math.max(...data.map((d) => d.heat_index));

  return (
    <div className="overflow-auto h-full">
      <table className="w-full text-xs">
        <thead className="sticky top-0 bg-[#0a0e14] z-10">
          <tr className="border-b border-gray-800">
            {[
              { k: "district" as SortKey, label: "District" },
              { k: "heat_index" as SortKey, label: "Heat Index" },
              { k: "workers_exposed" as SortKey, label: "Workers" },
              { k: "incidents_7d" as SortKey, label: "7d Incidents" },
              { k: "risk_level" as SortKey, label: "Risk" },
            ].map(({ k, label }) => (
              <th
                key={k}
                className="text-left text-gray-500 font-medium pb-2 pt-1 pr-4 uppercase tracking-wider cursor-pointer hover:text-gray-300 select-none"
                onClick={() => toggle(k)}
              >
                <div className="flex items-center gap-1">
                  {label} <SortIcon k={k} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((d) => {
            const color = getRiskColor(d.risk_level);
            const heatPct = (d.heat_index / maxHeat) * 100;
            return (
              <tr key={d.id} className="border-b border-gray-800/40 hover:bg-gray-800/20 group">
                <td className="py-2.5 pr-4">
                  <div className="font-medium text-gray-200">{d.district}</div>
                  <div className="text-gray-600">{d.country}</div>
                </td>
                <td className="py-2.5 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden w-16">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${heatPct}%`, background: color }}
                      />
                    </div>
                    <span className="font-mono font-bold" style={{ color }}>
                      {d.heat_index}°C
                    </span>
                  </div>
                </td>
                <td className="py-2.5 pr-4">
                  <span className="text-blue-400 font-medium">{formatNumber(d.workers_exposed)}</span>
                </td>
                <td className="py-2.5 pr-4">
                  <span className="text-orange-400 font-medium">{d.incidents_7d}</span>
                </td>
                <td className="py-2.5">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-semibold uppercase"
                    style={{ background: color + "20", color }}
                  >
                    {d.risk_level}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
