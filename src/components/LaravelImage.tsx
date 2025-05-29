import Image from "next/image";

interface LaravelImageProps {
    width: number,
    height: number,
    src: string,
    alt:string,
    className?: string,
}


const LaravelImage: React.FC<LaravelImageProps> = (props) => {
  const src = { src: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.src}` };
  const newProps = { ...props, ...src };
  return <Image {...newProps} />;
};

export default LaravelImage;