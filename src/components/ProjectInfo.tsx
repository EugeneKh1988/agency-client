import Container from "@/components/Container";
import Image from "next/image";
import { projects } from "./Projects";
import { IProject } from "@/lib/interfaces";
import Link from "next/link";
import SvgIcon from "./SvgIcon";
import React from "react";

export interface ProjectInfoProps {
  id: number;
  className?: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ className, id }) => {
  const classNameValue = className ? `${className}` : "";
  const projectArr = projects.filter(item => item.id == id);
  const project: IProject | null = projectArr && projectArr.length > 0 ? projectArr[0] : null;

  return (
    <Container className={`mt-100 md:mt-80 ${classNameValue}`}>
      {!project ? (
        <p>No data</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-100 lg:gap-65 items-start">
          <div className="bg-zircon lg:max-w-344 pt-50 pb-40 pl-33 pr-20 w-full rounded-[16px]">
            <ul className="space-y-33">
              <li>
                <h6 className="text-[16px] leading-24 font-semibold text-mirage">
                  Client
                </h6>
                <p className="text-[14px] leading-30">{project.client}</p>
              </li>
              <li>
                <h6 className="text-[16px] leading-24 font-semibold text-mirage">
                  Long work
                </h6>
                <p className="text-[14px] leading-30">{project.duration}</p>
              </li>
              <li>
                <h6 className="text-[16px] leading-24 font-semibold text-mirage">
                  Category
                </h6>
                <p className="text-[14px] leading-30">{project.description}</p>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
              Project Name
            </h5>
            <div className="mt-16 flex flex-col md:flex-row md:justify-between w-full md:items-center gap-16 pb-12 lg:pb-36">
              <h2 className="text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
                {project.title}
              </h2>
              <Link
                href={project.projectHref || "#"}
                className="flex gap-10 text-shakespeare items-center"
              >
                <SvgIcon iconName="web" />
                <span className="text-[20px] leading-32 font-semibold">
                  Visit Web
                </span>
              </Link>
            </div>
            {project.details?.map((detail, index) => (
              <React.Fragment key={index}>
                {detail.type == "text" ? (
                  <p className="mt-12 text-[18px] leading-28">{detail.value}</p>
                ) : null}
                {detail.type == "image" ? (
                  <Image
                    src={detail.value || "#"}
                    width={790}
                    height={574}
                    alt={project.title || "Project image"}
                    className="rounded-[16px] mt-32 lg:mt-48"
                  />
                ) : null}
                {detail.type == "title" ? (
                  <h5 className="mt-32 lg:mt-64 text-[24px] lg:text-[32px] leading-35 lg:leading-52 tracking-[-1px] font-semibold text-mirage">{detail.value}</h5>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProjectInfo;
