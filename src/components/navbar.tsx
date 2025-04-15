import { Menu, X } from "lucide-react";
import  { useEffect, useState } from "react";

import LOGO from "../assets/images/logo.png";
import  {MENU_LINKS}  from "../utils/data";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

    const navigate = useNavigate();

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
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 md:backdrop-blur-lg shadow-md  ">
            <div className="container mx-auto flex items-center justify-between md:justify-center gap-x-35 p-3 relative"
            // style={{
            //     background:
            //         "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            // }}
            >
                {/* LOGO - Điều hướng về trang chủ */}
                <Link to="/" onClick={() => navigate("/")}>
                    <motion.img 
                        whileHover={{ scale: 1.1 }}
                        className="h-15 relative cursor-pointer" src={LOGO} alt="Logo" 
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-[#333] focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* NAVIGATION LINKS */}
                <ul
                    className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[38px] text-center
                                absolute md:static top-[100%] left-0 w-full md:w-auto 
                                bg-gray-700 md:bg-transparent shadow-md md:shadow-none 
                                p-5 md:p-0 rounded-lg md:rounded-none
                                transition-all duration-300 
                                ${isOpen ? " bg-white/100 border border-white/10 md:backdrop-blur-none md:bg-transparent md:border-0" : "hidden md:flex"}
                                `}
                >
                    {MENU_LINKS.map((item) => (
                        <li key={item.id} className="p-2 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer"   >
                            <Link
                                to={item.to}
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate(item.to);
                                }}
                                className={`menu-item text-[18px] font-bold transition cursor-pointer tracking-wide md:tracking-wider`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Call to Action Button */}
                <button
                    onClick={() => navigate("/contactPage")}
                    className="hidden md:block h-12 text-[17px] font-medium text-white bg-gradient-to-r from-[#02b408] to-[#dd021cf9] 
                        rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-110   ">
                    Hotline : 0976618962
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
