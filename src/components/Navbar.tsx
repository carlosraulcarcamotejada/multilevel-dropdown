import { FC } from "react";
import { menuItems } from "../data/menuItems";
import { MenuItems } from "./MenuItems";
import { Menu } from "@headlessui/react";

const Navbar: FC = (): JSX.Element => {
  return (
    <header className="h-16 bg-indigo-500 text-gray-50 shadow-md w-full ">
      <div className="h-16 flex justify-start items-center px-5 w-full">
        <span className="text-2xl ">Brandname</span>
        <nav className="">
          <Menu as="ul" className="flex">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </Menu>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
