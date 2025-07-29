import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TEST from "../assets/images/logoHome/intro/cloud.jpg";
import TEST2 from "../assets/images/logoHome/intro/khóa 1.jpg";
import TEST3 from "../assets/images/logoHome/intro/security-with-gold-lock-1.webp";
const slides = [
  {
    image: TEST,
    title: "Trí Tuệ Nhân Tạo",
    subtitle: "Năng suất bứt phá với",
    description:
      "Dựa trên khả năng phân tích, khai phá, dự báo và đề xuất hành động.",
  },
  {
    image: TEST2,
    title: "Tự Động Hóa",
    subtitle: "Tiết kiệm thời gian với",
    description:
      "Chúng tôi cung cấp giải pháp robot và điều khiển tự động cho nhà máy.",
  },
  {
    image: TEST3,
    title: "IoT Công Nghiệp",
    subtitle: "Kết nối thông minh với",
    description:
      "Hệ thống cảm biến và giám sát từ xa nâng cao hiệu suất sản xuất.",
  },
];

// export default function ProducePage() {
const ProducePage: React.FC = () => {
  const [index, setIndex] = useState(0);
  // Auto change slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);
  const current = slides[index];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image with transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={current.image}
            alt="Slide background"
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Text Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-white space-y-6 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">{current.subtitle}</h4>
              <h1 className="text-5xl md:text-6xl font-bold">
                {current.title}
              </h1>
              <p className="text-lg md:text-xl">{current.description}</p>
              <a
                href="#"
                className="text-white underline hover:text-blue-300 inline-flex items-center gap-2"
              >
                Đọc thêm <span className="text-sm">→</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-10 flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProducePage;



//==============================================================================
// import { FaCalendarAlt, } from "react-icons/fa";
// import BHXH from "../assets/images/Produce/BHXH.png"
// import BCDC from "../assets/images/Produce/Binh_chủng_đặc_công.jpg"
// import THADS from "../assets/images/Produce/Thi_hành_án_DS.jpg"
// import QLTT from "../assets/images/Produce/Quản_lý_tư_tưởng.jpg"

// import { motion } from "framer-motion";

// // tỉ lệ ảnh là 4:3

// const projects = [
//     {
//       title: "Phần mềm hỗ trợ quản lý và kê khai chi phí khám chữa bệnh BHYT",
//       date: "01/10/2024",
//       image: BHXH,
//     },
//     {
//       title: "Phần mềm phục vụ công tác chỉ huy điều hành tại Binh Chủng Đăc Công",
//       date: "25/10/2024",
//       image: BCDC,
//     },
//     {
//       title: "Phần mềm quản lý CSDL thi hành án dân sự trong Quân đội",
//       date: "08/12/2024",
//       image: THADS,
//     },
//     {
//         title: "Phần mềm quản lý tư tưởng Bộ Đội",
//         date: "19/02/2025",
//         image: QLTT,
//     },
//   ];

// const ProducePage: React.FC = () => {
//     return (

//         <div className="flex flex-col items-center justify-center min-h-screen bg-white   mt-[120px]">

//             <div className="container mt-[80px] text-black text-center   px-[40px] md:px-[120px] ">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl md:text-6xl font-bold">
//                     <span className=" bg-teal-600  text-transparent bg-clip-text">
//                         Một số sản phẩm web nổi bật
//                     </span>
//                 </motion.h2>
//             </div>

//             <div className="container px-[40px] md:px-[150px] grid grid-cols-1 md:grid-cols-3  gap-10  mx-auto  mt-[100px] ">
//                 {projects.map((project, index) => (
//                 <div key={index} className="flex flex-col">
//                     <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className=" object-cover aspect-[4/3] shadow-md  "  //w-full h-[250px] object-cover
//                         whileHover={{ scale: 1.1 } }
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <h3 className="text-xl font-bold mt-4">{project.title}</h3>
//                     <div className="flex items-center text-[#91ff00ae] mt-2 mb-[50px]">
//                         <FaCalendarAlt className="mr-2 text-black" />
//                         <span className="text-black  ">{project.date}</span>
//                     </div>

//                 </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default ProducePage;
