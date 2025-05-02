import BreadCrumbs from "@/components/BreadCrumbs";
import PricingLong from "@/components/PricingLong";
import PlanCompare from "@/components/PlanCompare";


export default function DetailService() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Pricing"}]} />
      <PricingLong />
      <PlanCompare />
    </>
  );
}
