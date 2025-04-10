import { FaCalendarAlt, } from "react-icons/fa";



import BHXH from "../assets/images/Produce/BHXH.png"
import BCDC from "../assets/images/Produce/Binh_chủng_đặc_công.jpg"
import THADS from "../assets/images/Produce/Thi_hành_án_DS.jpg"
import QLTT from "../assets/images/Produce/Quản_lý_tư_tưởng.jpg"

import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";



const projects = [
    {
      title: "Phần mềm hỗ trợ quản lý và kê khai chi phí khám chữa bệnh BHYT",
      date: "14/04/2023",
      image: BHXH, 
    },
    {
      title: "Phần mềm phục vụ công tác chỉ huy điều hành tại Binh Chủng Đăc Công",
      date: "19/08/2021",
      image: BCDC,
    },
    {
      title: "Phần mềm quản lý CSDL thi hành án dân sự trong Quân đội",
      date: "19/08/2021",
      image: THADS,
    },
    {
        title: "Phần mềm quản lý tư tưởng Bộ Đội",
        date: "19/08/2021",
        image: QLTT,
    },
    {
        title: "Phần mềm hỗ trợ quản lý và kê khai chi phí khám chữa bệnh BHYT",
        date: "14/04/2023",
        image: BHXH, 
      },
      {
        title: "Phần mềm phục vụ công tác chỉ huy điều hành tại Binh Chủng Đăc Công",
        date: "19/08/2021",
        image: BCDC,
      },
      {
        title: "Phần mềm quản lý CSDL thi hành án dân sự trong Quân đội",
        date: "19/08/2021",
        image: THADS,
      },
      {
          title: "Phần mềm quản lý tư tưởng Bộ Đội",
          date: "19/08/2021",
          image: QLTT,
      },
  ];



const ProducePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white   mt-[70px]">
            
            <div className="container mt-[80px] text-black text-center   px-[40px] md:px-[120px] ">
                <h2 className="text-4xl md:text-6xl font-bold"> 
                    <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                        Một số sản phẩm web nổi bật
                    </span>
                </h2>
            </div>


            <div className="px-[40px] md:px-[150px] grid grid-cols-1 md:grid-cols-3  gap-10  mx-auto  mt-[100px] ">
                {projects.map((project, index) => (
                <div key={index} className="flex flex-col">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className=" object-cover aspect-[4/3] shadow-md  "  //w-full h-[250px] object-cover
                        whileHover={{ scale: 1.2 } }
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                    <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                    <div className="flex items-center text-[#91ff00ae] mt-2 mb-[50px]">
                        <FaCalendarAlt className="mr-2 text-black" />
                        <span className="text-black  ">{project.date}</span>
                    </div>
                    
                </div>
                ))}
            </div>





            

        </div>
    );
};

export default ProducePage;
