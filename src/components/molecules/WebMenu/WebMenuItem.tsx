import { FC } from "react";
import { Link } from "react-scroll";
import { WebMenuItemProps } from "./types";
const WebMenuItem: FC<WebMenuItemProps> = ({
  name,
  activeMenu,
  handleClick,
}) => {
  return (
    <Link
      to={name.toLowerCase()}
      smooth={true}
      duration={500}
      onClick={() => handleClick(name)}
    >
      <li className={`block ${activeMenu ? "border-b-4 border-pink-600" : ""}`}>
        {name}
      </li>
    </Link>
  );
};

export default WebMenuItem;
