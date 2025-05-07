import BreadCrumbs from "@/components/BreadCrumbs";
import ProjectInfo from "@/components/ProjectInfo";


export default async function ProjectIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <BreadCrumbs
        links={[{ name: "Home", href: "/" }, { name: "Detail Projects" }]}
      />
      <ProjectInfo id={parseInt(id)} />
    </>
  );
}
