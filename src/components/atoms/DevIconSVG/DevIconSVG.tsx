import { FC, ReactNode } from "react";
type DevIconSVGProps = {
  iconName: string;
  children: ReactNode;
};
const DevIconSVG: FC<DevIconSVGProps> = ({ iconName, children }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center">
      {children}
      <p className="my-4">{iconName}</p>
    </div>
  );
};

export default DevIconSVG;
