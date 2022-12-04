interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Header2 = ({ children, className }: IProps) => (
  <p className={`text-[#fff] font-medium text-[21px] ${className}`}>
    {children}
  </p>
);

export default Header2;
