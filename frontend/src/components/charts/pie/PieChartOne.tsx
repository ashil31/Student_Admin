import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChartOne() {
  const options: ApexOptions = {
    labels: ["Excellent", "Good", "Needs Improvement"],
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      labels: { colors: "#6B7280" },
      markers: {
        size: 10, // only valid property for marker size
        shape: "circle", // ensures markers are round
      },
      itemMargin: { horizontal: 8, vertical: 4 },
    },
    colors: ["#465FFF", "#6d97f8ff", "#3471d3ff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "pie",
      toolbar: { show: false },
    },
    tooltip: {
      enabled: true,
      theme: "light",
      style: { fontSize: "12px", fontFamily: "Outfit, sans-serif" },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontFamily: "Outfit, sans-serif",
        fontWeight: "600",
        colors: ["#000000ff"], // black text
      },
      background: {
        enabled: true,
        foreColor: "#ffffffff", // white background
        padding: 6,
        borderRadius: 6,
        opacity: 0.6,
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        color: "#000",
        opacity: 0.5,
      },
      formatter: function (val) {
        return `${Number(val).toFixed(0)}%`; // ensure val is number
      },
    },
    stroke: {
      colors: ["#fff"],
      width: 1,
    },
  };

  const series = [44, 55, 13];

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="pieChart" className="min-w-[1000px]">
        <Chart options={options} series={series} type="pie" height={310} />
      </div>
    </div>
  );
}
