import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Studens Tables Dashboard"
        description="This is Students Tables Dashboard page"
      />
      <PageBreadcrumb pageTitle="Ranking Tables" />
      <div className="space-y-6">
        <ComponentCard title="Complete Rankings">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
