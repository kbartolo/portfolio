export type WebMenuItemProps = {
  name: string;
  activeMenu: boolean;
  handleClick: (item: string) => void;
};

export const menuItem = {
  Home: true,
  About: false,
  Skills: false,
  Work: false,
  Contact: false,
};
