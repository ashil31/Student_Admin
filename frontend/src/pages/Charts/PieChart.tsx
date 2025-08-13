import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import PieChartOne from "../../components/charts/pie/PieChartOne";

export default function PieChart() {
  return (
    <>
      <PageMeta
        title="Chart Dashboard"
        description="This is Chart Dashboard page"
      />
      <PageBreadcrumb pageTitle="Student Performance Distribution" />
      <div className="space-y-6">
        <ComponentCard title="Overall Accuracy breakdown across all students">
          <PieChartOne />
        </ComponentCard>
      </div>
    </>
  );
}
