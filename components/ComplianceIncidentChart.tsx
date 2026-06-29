"use client";
import { useState } from "react";
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from "recharts";
import { complianceTrend } from "@/data/dataset";
import { Table2, TrendingDown } from "lucide-react";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f1419] border border-gray-700 rounded-lg p-3 text-sm">
        <div className="font-semibold text-white mb-2">{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-gray-400">{p.name}:</span>
            <span className="font-semibold" style={{ color: p.color }}>
              {p.name === "Compliance %" ? `${p.value}%` : p.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function ComplianceIncidentChart() {
  const [showTable, setShowTable] = useState(false);
  const data = complianceTrend || [];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-400">12-Month Trend</span>
        </div>
        <button
          onClick={() => setShowTable((v) => !v)}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors border border-gray-700 hover:border-cyan-500/40 rounded px-2 py-1"
        >
          <Table2 className="w-3 h-3" />
          {showTable ? "Chart View" : "Table View"}
        </button>
      </div>

      {showTable ? (
        <div className="overflow-auto flex-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-500 font-medium pb-2 text-xs uppercase">Month</th>
                <th className="text-right text-gray-500 font-medium pb-2 text-xs uppercase">Heat °C</th>
                <th className="text-right text-green-400 font-medium pb-2 text-xs uppercase">Compliance %</th>
                <th className="text-right text-orange-400 font-medium pb-2 text-xs uppercase">Incidents</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.month} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                  <td className="py-2 text-gray-300">{row.month}</td>
                  <td className="py-2 text-right text-red-400">{row.heat_index}</td>
                  <td className="py-2 text-right text-green-400">{row.compliance}%</td>
                  <td className="py-2 text-right text-orange-400">{row.incidents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2a35" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#6b7280", fontSize: 11 }}
                axisLine={{ stroke: "#1e2a35" }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: "#6b7280", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "#6b7280", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: "12px", color: "#9ca3af" }}
              />
              <Bar yAxisId="right" dataKey="incidents" name="Incidents" fill="#f97316" fillOpacity={0.6} radius={[2, 2, 0, 0]} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="compliance"
                name="Compliance %"
                stroke="#22c55e"
                strokeWidth={2.5}
                dot={{ fill: "#22c55e", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
