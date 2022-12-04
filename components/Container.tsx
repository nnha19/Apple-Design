interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: IProps) => (
  <div
    className={`w-[87.5%] max-w-[1208px] 2xl:max-w-[980px]  mx-auto ${className}`}
  >
    {children}
  </div>
);

export default Container;
