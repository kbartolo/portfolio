import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import CarlosBartolo_Resume from "../../../assets/CarlosBartolo_Resume.pdf";

const Social = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/carlosjavierbartolocubas/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
            <FaLinkedin size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 bg-[#333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/kbartolo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <FaGithub size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 bg-[#6fc2b0]">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex justify-between items-center w-full text-gray-300"
          >
            Email
            <HiOutlineMail size={30} />
          </Link>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href={CarlosBartolo_Resume}
            download="CarlosBartolo_Resume.pdf"
          >
            Resume
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
