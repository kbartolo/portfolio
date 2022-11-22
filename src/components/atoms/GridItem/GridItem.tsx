import { FC } from "react";
import { GridItemProps } from "./types";

const GridItem: FC<GridItemProps> = ({ title, image, linkDemo, linkCode }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white flex px-4 text-center">
          {title}
        </span>
        <div className="pt-8 text-center">
          {linkDemo && (
            <a href={linkDemo} target="_blank" rel="noreferrer">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
          )}
          <a href={linkCode} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
