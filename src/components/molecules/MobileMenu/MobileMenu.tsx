import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const [navBar, setNavbar] = useState(true);
  const handleClick = () => setNavbar(!navBar);
  return (
    <div>
      {/* Hamburger Icon */}
      <div className="md:hidden z-10 absolute right-8" onClick={handleClick}>
        {!navBar ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          navBar
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
