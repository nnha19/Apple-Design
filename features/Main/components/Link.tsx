interface IProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Link = ({ children, className, href }: IProps) => (
  <a
    className={`text-[#0066CC] hover:underline ${className}`}
    href={href || "#"}
  >
    {children}
  </a>
);

export default Link;
