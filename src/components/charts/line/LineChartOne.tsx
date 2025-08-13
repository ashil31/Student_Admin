import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const SkillPerformanceCharts: React.FC = () => {
  // Horizontal Bar Chart (Skill Performance)
  const horizontalState = {
    series: [
      { data: [70, 80, 51, 65, 90] } // percentage values
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
        fontFamily: "Outfit, sans-serif",
      } as ApexOptions["chart"],
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 6,
          barHeight: "60%",
        },
      },
      colors: ["#465FFF"],
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val}%`,
        style: { colors: ["#fff"], fontSize: "14px", fontWeight: 600 },
      },
      xaxis: {
        categories: ["Vocabulary", "Grammar", "Listening", "Reading", "Writing"],
        min: 0,
        max: 100,
        labels: { style: { fontSize: "14px" } },
      },
      yaxis: {
        labels: { style: { fontSize: "14px", fontWeight: 500 } },
      },
      tooltip: {
        enabled: true,
        y: { formatter: (val: number) => `${val}%` },
      },
      grid: {
        borderColor: "#E5E7EB",
        row: { colors: ["transparent", "transparent"], opacity: 0.5 },
      },
    } as ApexOptions,
  };

  // Vertical Bar Chart (Percentage vs Subject)
  const verticalState = {
    series: [
      { name: "Score", data: [70, 80, 51, 65, 90] },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
        fontFamily: "Outfit, sans-serif",
      } as ApexOptions["chart"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadius: 6,
        },
      },
      colors: ["#FF7A00"],
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val}%`,
        style: { colors: ["#fff"], fontSize: "14px", fontWeight: 600 },
      },
      xaxis: {
        categories: ["Vocabulary", "Grammar", "Listening", "Reading", "Writing"],
        labels: { style: { fontSize: "14px" } },
      },
      yaxis: {
        max: 100,
        labels: { formatter: (val: number) => `${val}%`, style: { fontSize: "14px" } },
      },
      tooltip: {
        enabled: true,
        y: { formatter: (val: number) => `${val}%` },
      },
      grid: {
        borderColor: "#E5E7EB",
        row: { colors: ["transparent", "transparent"], opacity: 0.5 },
      },
    } as ApexOptions,
  };

  return (
    <div className="space-y-12">
      <div>
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <ReactApexChart
            options={horizontalState.options}
            series={horizontalState.series}
            type="bar"
            height={350}
          />
        </div>
      </div>

      <div>
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <ReactApexChart
            options={verticalState.options}
            series={verticalState.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillPerformanceCharts;
