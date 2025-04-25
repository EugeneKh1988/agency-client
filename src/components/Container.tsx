
interface ContainerProps {
    children: React.ReactNode,
    className?: string,
    withoutRightPadding?: boolean;
}


const Container: React.FC<ContainerProps> = ({ children, className, withoutRightPadding }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div
      className={`container ${withoutRightPadding ? 'pl-16 md:pl-50 2xl:pl-120': 'px-16 md:px-50 2xl:px-120'} mx-auto ${classNameValue}`}
    >
      {children}
    </div>
  );
};

export default Container;

