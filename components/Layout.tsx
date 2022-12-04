import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Navbar />
      <MobileNav />
      {children}
    </div>
  );
};

export default Layout;
