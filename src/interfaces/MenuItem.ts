interface MenuItem {
  title: string;
  submenu?: MenuItem[];
  onClick?: () => void ;
}

export type { MenuItem };
