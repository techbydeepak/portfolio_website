import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#0f172a] text-white px-8 py-5 md:px-20">
      {/* Brand Name */}
      <span className="text-2xl font-bold tracking-wide">Portfolio</span>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#1e293b] text-center rounded-lg py-5 md:py-0 md:static md:bg-transparent md:flex md:gap-8 md:w-auto`}
      >
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="block md:inline-block text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 hover:text-[#38bdf8] hover:bg-opacity-20 md:hover:bg-transparent"
          >
            {item}
          </a>
        ))}
      </ul>

      {/* Hamburger Menu Icons */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={35}
            className="cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={35}
            className="cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
