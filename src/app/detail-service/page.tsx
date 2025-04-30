import BreadCrumbs from "@/components/BreadCrumbs";
import TeamDo from "@/components/TeamDo";
import ServiceTabs from "@/components/ServiceTabs";


export default function DetailService() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Detail Service"}]} />
      <ServiceTabs />
      <TeamDo />
    </>
  );
}
