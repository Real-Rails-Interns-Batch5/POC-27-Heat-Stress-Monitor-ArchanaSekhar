"use client";
import dynamic from "next/dynamic";
import KPICards from "@/components/KPICards";
import AlertCenter from "@/components/AlertCenter";
import ComplianceIncidentChart from "@/components/ComplianceIncidentChart";
import SectorMatrix from "@/components/SectorMatrix";
import RiskTable from "@/components/RiskTable";
import TrendCharts from "@/components/TrendCharts";
import IntelligencePanel from "@/components/IntelligencePanel";
import { Activity, Flame, Shield } from "lucide-react";

const HeatRiskMap = dynamic(() => import("@/components/HeatRiskMap"), {
  ssr: false,
});

function SectionHeader({
  icon: Icon,
  title,
  sub,
}: {
  icon: any;
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
      <div>
        <h2 className="text-sm font-semibold text-white">{title}</h2>
        {sub && <p className="text-xs text-gray-500">{sub}</p>}
      </div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#0f1419] border border-gray-800 rounded-xl p-4 shadow-lg hover:border-gray-700 transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#070b0f]">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0e14]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-red-500/20 border border-red-500/40 rounded flex items-center justify-center">
              <Flame className="w-4 h-4 text-red-400" />
            </div>
            <div>
             <div>
  <span className="font-bold text-white text-sm">
    Infocreon Internship - Heat Stress & Occupational Health Risk Monitor
  </span>
  <div className="text-gray-500 text-xs">
    POC-27 · Gulf Healthcare Intelligence Library
  </div>
</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">
                Live · 18 Zones Active
              </span>
            </div>

            <div className="text-xs text-gray-600 border border-gray-800 rounded px-2 py-1">
              Jun 26, 2025 · 11:30 GST
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1600px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">

          {/* Main Dashboard Area */}
          <div className="xl:col-span-3 space-y-5">

            {/* KPI Row */}
            <KPICards />

            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <Card className="h-[480px] flex flex-col">
                  <SectionHeader
                    icon={Activity}
                    title="Geospatial Heat Risk Intelligence"
                    sub="Gulf Region · 18 Districts · Click markers for district data"
                  />
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <HeatRiskMap />
                  </div>
                </Card>
              </div>

              <div>
                <Card className="h-[480px] flex flex-col">
                  <SectionHeader
                    icon={Shield}
                    title="Alert Center"
                    sub="Real-time occupational safety alerts"
                  />
                  <AlertCenter />
                </Card>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Card className="h-[320px] flex flex-col">
                <SectionHeader
                  icon={Activity}
                  title="Compliance vs Incident Trend"
                  sub="12-month correlation · Higher heat → lower compliance → more incidents"
                />
                <div className="flex-1">
                  <ComplianceIncidentChart />
                </div>
              </Card>

              <Card className="h-[320px] flex flex-col">
                <SectionHeader
                  icon={Flame}
                  title="30-Day Heat Index & Incident Trajectory"
                  sub="Monotonic heat surge correlated with incident acceleration"
                />
                <div className="flex-1">
                  <TrendCharts />
                </div>
              </Card>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Card className="h-[380px] flex flex-col">
                <SectionHeader
                  icon={Shield}
                  title="Sector Risk Matrix"
                  sub="Risk score by industry sector · Hover for full intelligence"
                />
                <div className="flex-1">
                  <SectorMatrix />
                </div>
              </Card>

              <Card className="h-[380px] flex flex-col">
                <SectionHeader
                  icon={Activity}
                  title="District Risk Intelligence Table"
                  sub="Click column headers to sort"
                />
                <div className="flex-1 overflow-hidden">
                  <RiskTable />
                </div>
              </Card>
            </div>

          </div>

          {/* Right Sidebar */}
          <div>
            <Card className="sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto">
              <SectionHeader
                icon={Activity}
                title="Intelligence Center"
                sub="AI-generated occupational health insights"
              />
              <IntelligencePanel />
            </Card>
          </div>

        </div>
      </main>

      <footer className="border-t border-gray-800 mt-8 py-5">
  <div className="max-w-[1600px] mx-auto px-6 text-center">
    <div className="text-xs text-gray-400 font-medium">
      Archana Sekhar
    </div>

    <div className="text-xs text-gray-500 mt-1">
      POC-27 · Heat Stress & Occupational Health Risk Monitor
    </div>

    <div className="text-xs text-gray-500">
      GitHub Username: archnaasekhar
    </div>

    <div className="text-xs text-gray-600 mt-2">
      Infocreon Internship · Batch 5 · All data is synthetic
    </div>
  </div>
</footer>
    </div>
  );
}