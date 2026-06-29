"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { districtHeatData } from "@/data/dataset";
import { getHeatColor, formatNumber } from "@/lib/utils";

function MapStyle() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    container.style.background = "#0a0e14";
  }, [map]);

  return null;
}

/**
 * FIXED: normalized scaling (prevents red/orange dominance)
 */
function getRadius(workers: number): number {
  if (workers >= 30000) return 18;
  if (workers >= 20000) return 15;
  if (workers >= 15000) return 12;
  if (workers >= 10000) return 10;
  if (workers >= 5000) return 8;

  return 5; // 👈 normal small dot for low-risk zones
}

export default function HeatRiskMapInner() {
  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[25.5, 51.5]}
        zoom={5}
        style={{ height: "100%", width: "100%", background: "#0a0e14" }}
        className="rounded-lg"
        zoomControl={true}
      >
        <MapStyle />

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; CartoDB"
        />

        {(districtHeatData || []).map((d) => {
          const color = getHeatColor(d.heat_index);
          const radius = getRadius(d.workers_exposed);

          return (
            <CircleMarker
              key={d.id}
              center={[d.lat, d.lng]}
              radius={radius}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: 0.4, // FIXED (balanced visuals)
                weight: 1.5,
                opacity: 0.9,
              }}
            >
              <Popup>
                <div className="bg-[#0f1419] text-white p-3 rounded min-w-[220px] text-sm">
                  <div className="font-bold text-cyan-400 mb-2 text-base">
                    {d.district}
                  </div>

                  <div className="text-gray-400 text-xs mb-3">
                    {d.country}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-gray-500 text-xs">
                        Heat Index
                      </div>
                      <div className="font-bold" style={{ color }}>
                        {d.heat_index}°C
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500 text-xs">Workers</div>
                      <div className="font-bold text-white">
                        {formatNumber(d.workers_exposed)}
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500 text-xs">
                        Humidity
                      </div>
                      <div className="font-bold text-blue-400">
                        {d.humidity}%
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500 text-xs">
                        7d Incidents
                      </div>
                      <div className="font-bold text-orange-400">
                        {d.incidents_7d}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-700">
                    <span
                      className="text-xs font-semibold uppercase px-2 py-1 rounded"
                      style={{ background: color + "22", color }}
                    >
                      {d.risk_level.toUpperCase()} RISK
                    </span>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-[#0f1419]/90 border border-gray-700 rounded-lg p-3 z-[1000]">
        <div className="text-xs text-gray-400 font-semibold mb-2 uppercase">
          Heat Index
        </div>

        {[
          { label: "Critical ≥50°C", color: "#ef4444" },
          { label: "High 46–50°C", color: "#f97316" },
          { label: "Elevated 42–46°C", color: "#eab308" },
          { label: "Moderate <42°C", color: "#22c55e" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2 mb-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: l.color }}
            />
            <span className="text-xs text-gray-400">{l.label}</span>
          </div>
        ))}

        <div className="border-t border-gray-700 mt-2 pt-2 text-xs text-gray-500">
          Circle size ∝ workers exposed
        </div>
      </div>
    </div>
  );
}