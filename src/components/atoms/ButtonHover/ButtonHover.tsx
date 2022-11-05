import { FC } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

type ButtonHoverProps = {
  text: string;
  colorHover: string;
  link: string;
};

const ButtonHover: FC<ButtonHoverProps> = ({ text, colorHover, link }) => {
  return (
    <Link to={link} smooth={true} duration={500}>
      <button
        className={`text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-${colorHover}-600`}
      >
        {text}
        <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3" />
        </span>
      </button>
    </Link>
  );
};

export default ButtonHover;
