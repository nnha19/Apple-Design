interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Header1 = ({ children, className }: IProps) => {
  return (
    <h2
      className={`text-[96px] text-[#f5f5f7] font-bold ${className} leading-[1]`}
    >
      {children}
    </h2>
  );
};
export default Header1;
