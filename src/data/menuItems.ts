import { MenuItem } from "../interfaces/MenuItem";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
  },
  {
    title: "Services",
    submenu: [
      {
        title: "web design",
      },
      {
        title: "web development",
        submenu: [
          {
            title: "Frontend",
            submenu: [
              {
                title: "React JS",
              },
              {
                title: "Next JS",
              },
            ],
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
              },
              {
                title: "PHP",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
      },
    ],
  },
  {
    title: "About",
    submenu: [
      {
        title: "Who we are",
      },
      {
        title: "Our values",
      },
    ],
  },
];
