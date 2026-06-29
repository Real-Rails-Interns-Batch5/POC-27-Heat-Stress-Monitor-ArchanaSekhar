export function getRiskColor(risk_level: string): string {
  switch (risk_level) {
    case "critical": return "#ef4444";
    case "high": return "#f97316";
    case "moderate": return "#eab308";
    case "low": return "#22c55e";
    default: return "#6b7280";
  }
}

export function getHeatColor(heat_index: number): string {
  if (heat_index >= 50) return "#ef4444";
  if (heat_index >= 46) return "#f97316";
  if (heat_index >= 42) return "#eab308";
  return "#22c55e";
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case "critical": return "#ef4444";
    case "high": return "#f97316";
    case "medium": return "#eab308";
    case "low": return "#22c55e";
    default: return "#6b7280";
  }
}

export function getSeverityBg(severity: string): string {
  switch (severity) {
    case "critical": return "bg-red-500/10 border-red-500/30 text-red-400";
    case "high": return "bg-orange-500/10 border-orange-500/30 text-orange-400";
    case "medium": return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400";
    case "low": return "bg-green-500/10 border-green-500/30 text-green-400";
    default: return "bg-gray-500/10 border-gray-500/30 text-gray-400";
  }
}

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 0) return `${h}h ${m}m ago`;
  return `${m}m ago`;
}
