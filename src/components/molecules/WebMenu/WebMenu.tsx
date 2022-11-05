import { useState } from "react";
import WebMenuItem from "./WebMenuItem";
import { menuItem } from "./types";

const WebMenu = () => {
  const [menu, setMenu] = useState(menuItem);

  const handleClick = (item: string) => {
    let newMenu = menuItem;
    Object.entries(menu).forEach(
      ([key]) =>
        (newMenu =
          key === item
            ? { ...newMenu, [key]: true }
            : (newMenu = { ...newMenu, [key]: false }))
    );
    setMenu(newMenu);
  };

  return (
    <div>
      <ul className="hidden md:flex">
        {Object.entries(menu).map(([key, value]) => (
          <WebMenuItem
            name={key}
            key={key}
            activeMenu={value}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default WebMenu;
