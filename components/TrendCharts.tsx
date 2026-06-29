"use client";
import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { heatTrendData } from "@/data/dataset";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f1419] border border-gray-700 rounded-lg p-3 text-xs">
        <div className="font-semibold text-white mb-2">{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex justify-between gap-4 mb-1">
            <span className="text-gray-400">{p.name}</span>
            <span className="font-bold" style={{ color: p.color }}>{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function TrendCharts() {
  const data = heatTrendData || [];

  return (
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="heatGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="incidentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e2a35" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={{ stroke: "#1e2a35" }}
            tickLine={false}
          />
          <YAxis
            yAxisId="heat"
            domain={[38, 56]}
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="incidents"
            orientation="right"
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: "11px", color: "#9ca3af" }} />
          <Area
            yAxisId="heat"
            type="monotone"
            dataKey="heat_index"
            name="Heat Index (°C)"
            stroke="#ef4444"
            strokeWidth={2}
            fill="url(#heatGrad)"
          />
          <Line
            yAxisId="incidents"
            type="monotone"
            dataKey="incidents"
            name="Incidents"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ fill: "#f97316", r: 2.5 }}
            activeDot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
