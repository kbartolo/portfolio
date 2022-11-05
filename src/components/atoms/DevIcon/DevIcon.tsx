import { FC } from "react";
import { DevIcons, DevIconProps } from "./types";

const DevIcon: FC<DevIconProps> = ({ iconName }) => {
  let typedIconString: keyof typeof DevIcons = "HTML";
  const letIconString = iconName;
  typedIconString = letIconString as keyof typeof DevIcons;

  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img
        src={DevIcons[typedIconString]}
        className="w-20 mx-auto"
        alt="REACT"
      />
      <p className="my-4">{iconName}</p>
    </div>
  );
};

export default DevIcon;
