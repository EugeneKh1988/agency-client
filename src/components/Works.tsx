import Container from "@/components/Container";
import preview from "../../public/vid-preview.png";
import Image from "next/image";

interface WorksProps {
  className?: string;
}

const Works: React.FC<WorksProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Our Works
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        This is How We Works
      </h2>
      <div className="text-center">
        <Image src={preview} alt="Video preview" className="block mx-auto" />
      </div>
    </Container>
  );
};

export default Works;
