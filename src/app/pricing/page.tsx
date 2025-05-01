import BreadCrumbs from "@/components/BreadCrumbs";
import TeamDo from "@/components/TeamDo";
import ServiceTabs from "@/components/ServiceTabs";
import PricingLong from "@/components/PricingLong";


export default function DetailService() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Pricing"}]} />
      <PricingLong />
    </>
  );
}
