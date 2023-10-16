interface MenuItem {
  title: string;
  submenu?: MenuItem[];
  path?:string
}

export type { MenuItem };
