import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

export const navLinks = [
  {
    text: "Store",
  },
  {
    text: "Mac",
  },
  {
    text: "iPad",
  },
  {
    text: "iPhone",
  },
  {
    text: "Watch",
  },
  {
    text: "Airpords",
  },
  {
    text: "TV & Home",
  },
  {
    text: "Only on Apple",
  },
  {
    text: "Accessories",
  },
  {
    text: "Support",
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-[44px] bg-black text-[12px] text-[#f5f5f7] px-2 hidden md:block">
      <div className="w-auto max-w-[980px] mx-auto h-full">
        <ul className="flex justify-between items-center h-full [&>*]:font-thin [&>*]:hover:cursor-pointer">
          <li className="opacity-[.8] hover:opacity-[1]">
            <Image
              src="/images/apple-logo.png"
              height={18}
              width={18}
              alt="Logo"
            />
          </li>
          {navLinks.map(({ text }) => (
            <li className="opacity-[.8] hover:opacity-[1] text-[#f5f5f7]">
              {text}
            </li>
          ))}
          <li className="opacity-[.8] hover:opacity-[1] text-[#f5f5f7]">
            <BsSearch />
          </li>
          <li className="opacity-[.8] hover:opacity-[1] text-[#f5f5f7]">
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
