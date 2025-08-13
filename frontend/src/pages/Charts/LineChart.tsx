import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function LineChart() {
  return (
    <>
      <PageMeta
        title="Chart Dashboard"
        description="This is Chart Dashboard page"
      />
      <PageBreadcrumb pageTitle="Average Performance by Skill Area" />
      <div className="space-y-6">
        <ComponentCard title="Individual skill performance metrics and improvements">
          <LineChartOne />
        </ComponentCard>
      </div>
    </>
  );
}
