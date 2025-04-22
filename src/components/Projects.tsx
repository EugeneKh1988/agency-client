import Container from "@/components/Container";
import { IProject, } from "@/lib/interfaces";
import Image from "next/image";

export interface ProjectProps {
  className?: string;
}

const projects: IProject[] = [
    {
        title: "Website 1",
        description: "Web Development",
        imageHref: "/project1.png",
    },
    {
        title: "Website 2",
        description: "Web Development",
        imageHref: "/project2.png",
    },
    {
        title: "Website 3",
        description: "Web Development",
        imageHref: "/project3.png",
    },
    {
        title: "Website 4",
        description: "Web Development",
        imageHref: "/project4.png",
    },
    {
        title: "Website 5",
        description: "Web Development",
        imageHref: "/project5.png",
    },
    {
        title: "Website 6",
        description: "Web Development",
        imageHref: "/project6.png",
    },
];

const Project: React.FC<ProjectProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Our Projects
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Latest Project We Have Done
      </h2>
      <div className="mt-41 md:mt-67 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-20">
        {projects.map((projectItem, index) => (
          <div className={`relative group ${index % 2 == 0 ? 'rotate-[0.25deg]': 'rotate-[-2.25deg]'}`} key={index}>
            <Image
              src={projectItem.imageHref || "#"}
              width={381}
              height={277}
              alt={projectItem.title || "Project image"}
              className="rounded-[12px]"
            />
            <div className="hidden group-hover:block absolute left-0 bottom-0 right-0 h-80 px-100 pb-5">
              <div className="bg-white p-12 rounded-[8px] text-center">
                <h3 className="text-[14px] leading-20 font-semibold tracking-[-0.02em] text-mirage">
                  {projectItem.title}
                </h3>
                <p className="mt-5 text-[14px] leading-20 font-semibold tracking-[-0.02em]">
                  {projectItem.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Project;
