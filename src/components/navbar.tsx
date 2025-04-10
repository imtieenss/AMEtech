import  { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import  {MENU_LINKS}  from "../utils/data";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
    const location = useLocation();
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
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/30 md:backdrop-blur-lg shadow-md  ">
            <div className="container mx-auto flex items-center justify-between md:justify-center gap-x-35 p-3 relative">
                {/* LOGO - Điều hướng về trang chủ */}
                <Link to="/" onClick={() => navigate("/")}>
                    <img className="h-15 relative cursor-pointer" src={LOGO} alt="Logo" />
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
                    className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8
                                absolute md:static top-[100%] left-0 w-full md:w-auto 
                                bg-gray-700 md:bg-transparent shadow-md md:shadow-none 
                                p-5 md:p-0 rounded-lg md:rounded-none
                                transition-all duration-300 
                                ${isOpen ? "backdrop-blur-lg bg-white/50 border border-white/10 md:backdrop-blur-none md:bg-transparent md:border-0" : "hidden md:flex"}
                                `}
                >
                    {MENU_LINKS.map((item) => (
                        <li key={item.id} >
                            <Link
                                to={item.to}
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate(item.to);
                                }}
                                className={`menu-item text-[18px] font-bold transition cursor-pointer tracking-wide md:tracking-wider
                                    ${location.pathname === item.to
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2faf01] to-[#046b00]"
                                        : "text-gray-700 hover:text-gray-900"
                                    }`}
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
                        rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-110">
                    Hotline : 0976618962
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
