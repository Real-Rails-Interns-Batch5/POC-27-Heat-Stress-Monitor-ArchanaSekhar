"use client";
import dynamic from "next/dynamic";

const HeatRiskMapInner = dynamic(() => import("./HeatRiskMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0e14]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-500 text-sm">Initializing geospatial layer...</p>
      </div>
    </div>
  ),
});

export default function HeatRiskMap() {
  return <HeatRiskMapInner />;
}
