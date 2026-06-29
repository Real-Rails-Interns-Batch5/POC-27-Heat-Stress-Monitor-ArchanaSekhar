"use client";

import { useState } from "react";
import { alertsData } from "@/data/dataset";
import { getSeverityBg, timeAgo, formatNumber } from "@/lib/utils";
import {
  Bell,
  AlertOctagon,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const severityIcon = {
  critical: AlertOctagon,
  high: AlertTriangle,
  medium: Bell,
  low: Info,
};

const severityOrder = ["critical", "high", "medium", "low"] as const;

export default function AlertCenter() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const data = alertsData || [];
  const filtered =
    filter === "all" ? data : data.filter((a) => a.severity === filter);

  const counts = {
    critical: data.filter((a) => a.severity === "critical").length,
    high: data.filter((a) => a.severity === "high").length,
    medium: data.filter((a) => a.severity === "medium").length,
    low: data.filter((a) => a.severity === "low").length,
  };

  return (
    <div className="h-full flex flex-col w-full overflow-hidden">
      {/* Filter tabs */}
      <div className="flex gap-1.5 mb-3 flex-wrap">
        {["all", ...severityOrder].map((s) => {
          const active = filter === s;
          const count =
            s === "all" ? data.length : counts[s as keyof typeof counts];

          return (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                active
                  ? s === "all"
                    ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400"
                    : getSeverityBg(s)
                  : "border-gray-700 text-gray-500 hover:text-gray-300"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)} ({count})
            </button>
          );
        })}
      </div>

      {/* Alert list */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 w-full">
        {filtered.map((alert) => {
          const Icon = severityIcon[alert.severity] || Bell;
          const isOpen = expanded === alert.id;

          return (
            <div
              key={alert.id}
              className={`border rounded-lg p-3 transition-all duration-200 cursor-pointer w-full overflow-hidden ${getSeverityBg(
                alert.severity
              )}`}
              onClick={() => setExpanded(isOpen ? null : alert.id)}
            >
              <div className="flex items-start gap-2.5 w-full">
                <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />

                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                      {alert.category}
                    </span>

                    <div className="flex items-center gap-1">
                      <span className="text-xs opacity-60">
                        {timeAgo(alert.timestamp)}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-3 h-3 opacity-60" />
                      ) : (
                        <ChevronDown className="w-3 h-3 opacity-60" />
                      )}
                    </div>
                  </div>

                  <p
                    className={`text-xs mt-1 leading-relaxed break-words ${
                      isOpen ? "" : "line-clamp-2"
                    } text-current opacity-90`}
                  >
                    {alert.message}
                  </p>

                  {isOpen && (
                    <div className="mt-2 pt-2 border-t border-current/20 grid grid-cols-2 gap-2 break-words">
                      <div>
                        <div className="text-xs opacity-50">Location</div>
                        <div className="text-xs font-medium">
                          {alert.location}
                        </div>
                      </div>

                      {alert.workers_at_risk && (
                        <div>
                          <div className="text-xs opacity-50">
                            Workers at Risk
                          </div>
                          <div className="text-xs font-medium">
                            {formatNumber(alert.workers_at_risk)}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center text-gray-600 py-8 text-sm">
            No alerts for this filter
          </div>
        )}
      </div>
    </div>
  );
}