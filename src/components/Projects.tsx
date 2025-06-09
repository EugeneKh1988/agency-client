import Container from "@/components/Container";
import { IProject, } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  className?: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    title: "Website 1",
    description: "Web Development",
    imageHref: "/project1.png",
    client: "Schoolmy Agency",
    duration: "2 month",
    details: [
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "image", value: "/project1.png"},
      {type: "title", value: "Challenge This Project"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
    ],
  },
  {
    id: 2,
    title: "Website 2",
    description: "Web Development",
    imageHref: "/project2.png",
    client: "Schoolmy Agency",
    duration: "2 month",
    details: [
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "image", value: "/project2.png"},
      {type: "title", value: "Challenge This Project"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
    ],
  },
  {
    id: 3,
    title: "Website 3",
    description: "Web Development",
    imageHref: "/project3.png",
    client: "Schoolmy Agency",
    duration: "2 month",
    details: [
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "image", value: "/project3.png"},
      {type: "title", value: "Challenge This Project"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
    ],
  },
  {
    id: 4,
    title: "Website 4",
    description: "Web Development",
    imageHref: "/project4.png",
    client: "Schoolmy Agency",
    duration: "2 month",
    details: [
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "image", value: "/project4.png"},
      {type: "title", value: "Challenge This Project"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
    ],
  },
  {
    id: 5,
    title: "Website 5",
    description: "Web Development",
    imageHref: "/project5.png",
    client: "Schoolmy Agency",
    duration: "2 month",
    details: [
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "image", value: "/project5.png"},
      {type: "title", value: "Challenge This Project"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
    ],
  },
  {
    id: 6,
    title: "Website 6",
    description: "Web Development",
    imageHref: "/project6.png",
    client: "Schoolmy Agency",
    duration: "2 month",
    details: [
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "image", value: "/project6.png"},
      {type: "title", value: "Challenge This Project"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
      {type: "text", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"},
    ],
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
          <Link href={`/pages/${projectItem.id}`} className={`relative group ${index % 2 == 0 ? 'rotate-[0.25deg]': 'rotate-[-2.25deg]'}`} key={index}>
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
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Project;
