import BreadCrumbs from "@/components/BreadCrumbs";
import TeamDo from "@/components/TeamDo";


export default function DetailService() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Detail Service"}]} />
      <TeamDo />
    </>
  );
}
