import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
//import { FiSearch } from "react-icons/fi";

import { UserRound, } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // {/*    teal-500  emerald-700 */}
    <nav className="w-full fixed top-0 left-0 z-50 bg-red-50    md:backdrop-blur-lg shadow-md  ">
      <div className="container mx-auto flex items-center justify-between md:justify-center relative  m-[4px] font-sans  gap-x-[clamp(0px,5vw,100px)] ">     {/* gap-x-[40px] */}
        
        {/* LOGO - Điều hướng về trang chủ */}
        <Link to="/" onClick={() => navigate("/")}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            className=" ml-[10px] md:ml-0  min-h-[60px] h-[60px] relative cursor-pointer object-contain shrink-0 "
            src={LOGO}
            alt="Logo"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <ul
          className={`  flex flex-col md:flex-row  text-center
                        md:gap-x-[clamp(0px,5vw,70px)]   
                        absolute md:static top-[100%] left-0 
                        w-full md:w-auto  
                        p-[5px] md:p-0 rounded-lg md:rounded-none
                        transition-all duration-300 
                        ${
                            isOpen
                            ? " bg-white md:backdrop-blur-none md:bg-transparent md:border-0"
                            : "hidden md:flex"
                        }
                    `} //
        >
          {MENU_LINKS.map((item) => (
            <li
              key={item.id}
              className="p-[5px] md:p-2  hover:text-white rounded-md transition-all cursor-pointer text-white  whitespace-nowrap "
            >
              <Link
                to={item.to}
                onClick={() => {
                  setIsOpen(false);
                  navigate(item.to);
                }}
                className={`menu-item text-[18px] font-bold transition-colors duration-300 cursor-pointer tracking-wide md:tracking-wider
                                    ${
                                      location.pathname === item.to
                                        ? "text-red-700 "
                                        : "text-green-700 hover:text-gray-900"
                                    }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" hidden md:block">
          <div className="flex items-center gap-2 text-amber-600 text-sm  ">
            {/* Icon tìm kiếm */}
            <UserRound className="text-xl" />

            {/* Đường gạch dọc */}
            <div className="w-px h-6 bg-green-700 mx-1" />

            {/* hotline*/}
            <div className="flex items-center ">
              <FaPhoneAlt className="text-lg mr-[8px]" />
              <div className=" text-lg">
                <p>0976618962</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-[#333] focus:outline-none mr-[15px]" // md:hidden
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
