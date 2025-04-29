import BreadCrumbs from "@/components/BreadCrumbs";
import DescriptionServices from "@/components/DescriptionServices";


export default function Service() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Service"}]} />
      <DescriptionServices />
    </>
  );
}
