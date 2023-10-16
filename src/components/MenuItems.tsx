import { FC, Fragment, useRef } from "react";
import { MenuItem } from "../interfaces/MenuItem";
import { DropDown } from "./Dropdown";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Menu } from "@headlessui/react";

interface MenuItemsProps {
  items?: MenuItem;
  depthLevel?: number;
}

const MenuItems: FC<MenuItemsProps> = ({
  depthLevel = 0,
  items,
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Menu.Item as="ul" className="relative text-sm">
      {({ active }) => (
        <div
          className={`
                        ${depthLevel < 1 && !active ? "text-gray-50" : ""} 
                        ${depthLevel > 0 && active ? "bg-indigo-500" : ""}
                        ${depthLevel > 0 && !active ? "text-gray-900" : ""} 
                        ${depthLevel > 0 && active ? "text-gray-100" : ""} 
                        
                      `}
        >
          {items?.submenu ? (
            <Menu as={Fragment}>
              {({ open: isOpen }) => (
                <>
                  <Menu.Button
                    type="button"
                    className={` 
                              ${depthLevel === 0 && isOpen ? "bg-black/10" : ""}
          
                              flex 
                              items-center 
                              justify-start 
                              mx-2 
                              px-4 
                              py-3 
                              rounded-md

                             
                              focus:outline-none
                              `}
                  >
                    <span className="text-left  ">{items.title}</span>
                    {depthLevel > 0 && (
                      <ArrowRightIcon className="h-3 w-3 ml-2" />
                    )}
                  </Menu.Button>

                  <DropDown
                    depthLevel={depthLevel}
                    submenus={items.submenu!}
                    ref={ref}
                    isOpen={isOpen}
                  />
                </>
              )}
            </Menu>
          ) : (
            <div
              className="py-3 px-4 mx-2 cursor-pointer rounded-md"
              onClick={() => console.log(items?.title)}
            >
              {items?.title}
            </div>
          )}
        </div>
      )}
    </Menu.Item>
  );
};

export { MenuItems };
