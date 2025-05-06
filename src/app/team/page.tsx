import AvailablePositions from "@/components/AvailablePositions";
import BreadCrumbs from "@/components/BreadCrumbs";
import JoinForm from "@/components/JoinForm";
import TeamList from "@/components/TeamList";


export default function TeamPage() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Our Team"}]} />
      <TeamList />
      <AvailablePositions />
      <JoinForm />
    </>
  );
}
