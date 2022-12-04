import { useState, useEffect } from "react";

import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { navLinks } from "./Navbar";

const MobileNav = () => {
  const [displayNavLinks, setDisplayNavLinks] = useState(false);

  useEffect(() => {
    if (displayNavLinks) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "unset";
      document.body.style.overflow = "unset";
    }
  }, [displayNavLinks]);

  return (
    <div className={`md:hidden bg-primaryBg h-[44px] px-2 [&>*]:font-thin`}>
      <div className="flex items-center justify-between h-full [&>*]:hover:cursor-pointer">
        <span
          onClick={() => setDisplayNavLinks(!displayNavLinks)}
          className="text-[#f5f5f7] text-[20px]"
        >
          {displayNavLinks ? <TiDeleteOutline /> : <RxHamburgerMenu />}
        </span>
        <Image
          className="text-[#f5f5f7]"
          alt="logo"
          src="/images/apple-logo.png"
          height={20}
          width={20}
        />
        <AiOutlineShoppingCart className="text-[#f5f5f7]" />
      </div>
      <div
        className="relative overflow-hidden bg-primaryBg "
        style={{
          height: displayNavLinks ? "100vh" : "0",
          transition: "all .4s",
          zIndex: "100000",
        }}
      >
        <div className="p-[45px]">
          {navLinks.map(({ text }) => (
            <p className="opacity-[.8] hover:opacity-[1] text-[#f5f5f7] p-[10px] border-b-[1px]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
