import Logo from "../../../assets/images/logo.png";

import { WebMenu, MobileMenu, Social } from "../../molecules";

const NavBar = () => {
  return (
    <div className="fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/* Web Menu */}
      <WebMenu />
      {/* Mobile Menu */}
      <MobileMenu />
      {/* Social Menu */}
      <Social />
    </div>
  );
};

export default NavBar;
