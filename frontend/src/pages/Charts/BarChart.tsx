import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function BarChart() {
  return (
    <div>
      <PageMeta
        title="Chart Dashboard"
        description="This is Chart Dashboard page"
      />
      <PageBreadcrumb pageTitle="Student Engagment Trends" />
      <div className="space-y-6">
        <ComponentCard title="Monthly Engagment patterns and learning time">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
