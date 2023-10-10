import { ForwardedRef, forwardRef, JSX } from "react";
import { MenuItem } from "../interfaces/MenuItem";
import { MenuItems } from "./MenuItems";
import { Menu, Transition } from "@headlessui/react";

interface DropDownProps {
  depthLevel: number;
  submenus: MenuItem[];
}

const DropDown = forwardRef(
  (props: DropDownProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const { submenus } = props;
    let { depthLevel } = props;

    depthLevel++;

    return (
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          as="div"
          ref={ref}
          className={` 
                  ${depthLevel > 1 ? "left-full" : ""}
                  ${depthLevel > 1 ? "-top-2" : "mt-1.5"}

                  absolute
                  bg-white
                  py-2
                  rounded-md
                  shadow-md
                  w-max
                  z-10
                  
                  focus:outline-none

                `}
        >
          {submenus.map((submenu, index) => (
            <MenuItems key={index} items={submenu} depthLevel={depthLevel} />
          ))}
        </Menu.Items>
      </Transition>
    );
  }
);

export { DropDown };
