
import { FaPhone,} from "react-icons/fa"; // Import icon từ react-icons
import ZALO from "../assets/images/zalosvg.svg"
//import { motion } from "framer-motion";
const Icons = () => {
    return (
        <div>
            
            <div className="  fixed right-3 bottom-10 flex flex-col space-y-3 z-50">
                <a href="tel:0976618962" className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition">
                    <FaPhone size={24} />
                </a>
            </div>

            <div className="  fixed right-3 bottom-25 flex flex-col space-y-3 z-50">
                <a href="https://zalo.me" target="_blank" className="p-2 bg-white rounded-full shadow-lg hover:opacity-80 transition">
                    <img src= {ZALO} alt="Zalo" className="w-9 h-9" />
                </a>
            </div>


        </div>
        



    );
};

export default Icons;
