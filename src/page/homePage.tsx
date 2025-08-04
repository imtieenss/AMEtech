﻿//lib
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import TestimonialSection from "./sections/TestimonialSection";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {
  Landmark,
  Globe,
  Banknote,
  HandCoins,
  BarChart3,
  Cctv,
  Cog,
  
} from "lucide-react";

// img logo
const images = import.meta.glob("../assets/images/logoHome/logo/logo*.png", {
  eager: true,
});
const logos = Object.values(images).map((mod: any) => mod.default);
// img intro
import AMEINTRO from "../assets/images/logoHome/intro/thumb-1920-1358310.png";
import CLOUD from "../assets/images/logoHome/intro/cloud.jpg";
import SECURITY from "../assets/images/logoHome/intro/baomat.jpg";
import YSINH from "../assets/images/logoHome/intro/ysinh.jpeg";
import NETWORK from "../assets/images/logoHome/intro/net.png";
//import AIIOT from "../assets/images/logoHome/intro/baomat.jpg";

//img
import IT from "../assets/images/logoHome/intro/wifi-(1).jpg";
import CAM from "../assets/images/logoHome/intro/cloud.jpg";
import BAOMAT from "../assets/images/logoHome/intro/baomat.jpg";
import MANHINHLON from "../assets/images/logoHome/intro/baomat.jpg";
import MAYCHU from "../assets/images/logoHome/intro/baomat.jpg";
import HOINGHI from "../assets/images/logoHome/intro/baomat.jpg";

const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);
  // Auto change slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % introData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => setIndex((index + 1) % introData.length);
  const prevSlide = () =>
    setIndex((index - 1 + introData.length) % introData.length);
  const current = introData[index];

  return (
    <>
      {/* background nền  relative flex items-center justify-center w-full  min-h-screen  */}
      <div className=" absolute inset-0 z-0">
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

      {/* slide 1 */}
      <div className="relative grid grid-cols-[50px_1fr_50px]   min-h-screen  pt-[70px]  container mx-auto  ">
        {/* prevSlide */}
        <div className=" flex justify-center items-center  ">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
          >
            <GrFormPrevious size={30} />
          </button>
        </div>

        {/* nội dung  */}
        <div className="text-white  container  z-10    ">
          <div className=" flex flex-col   mt-[100px]  md:mx-[190px] ">
            <AnimatePresence mode="wait">
              <motion.h4
                // key={index}
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.1 }}
                className="text-lg font-semibold"
              >
                {current.title}
              </motion.h4>
              <motion.h1
                // key={index}
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.3 }}
                className="text-5xl md:text-5xl font-serif "
              >
                {current.text}
              </motion.h1>
              <p className="text-lg md:text-xl max-w-2xl">
                {current.description}
              </p>
              <div>
                <a
                  href={current.link}
                  className="text-white underline hover:text-blue-300 flex items-center gap-2"
                >
                  {current.textnext}
                </a>
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* nextSlide */}
        <div className=" flex justify-center items-center ">
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
          >
            <GrFormNext size={30} />
          </button>
        </div>
      </div>
      {/* Indicators  chấm tròn */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {introData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
        w-5 h-5 rounded-full border
        ${index === i ? "bg-white" : "bg-transparent border-white"}
        transition-all duration-300
      `}
          />
        ))}
      </div>

      {/* Dịch vụ  và sản phẩm màn to */}
      <section className="bg-white text-black py-12  ">
        <div className="container mx-auto  ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Sản phẩm và dịch vụ
          </h2>

          <div className="flex flex-wrap justify-center gap-[30px] md:gap-[50px] p-6 md:mx-auto container  bg-amber-300 ">
            {serviceData.map((item, id) => (
              <motion.div
                key={id}
                className="relative group  w-[85%] md:w-70 h-110 md:h-100 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300" //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay nền xanh */}
                <div
                  className="absolute inset-0 bg-lime-700 opacity-0 group-hover:opacity-80 transition-opacity duration-300   
                
                 "
                ></div>

                {/* Tiêu đề luôn hiện */}
                <div className="absolute top-[20px]  p-4 text-gray-100 font-bold text-lg z-10 bg-black/40">
                  {item.title}
                </div>

                {/* Mô tả - hiệu ứng trượt từ phải */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm z-10 
                   transform translate-x-full opacity-0
                   group-hover:translate-x-0 group-hover:opacity-100
                   transition-all duration-500 ease-out"
                >
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dịch vụ  và sản phẩm màn bé */}
      <section className="py-12 bg-gray-100  block md:hidden  ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Sản phẩm và dịch vụ
          </h2>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="max-w-[90%] mx-auto h-[420px]"
          >
            {serviceData.map((item, id) => (
              <SwiperSlide key={id} className="py-4 px-2  justify-items-center">
                <div
                  key={id}
                  className="relative  w-70 h-100 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300 " //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Overlay nền xanh */}
                  <div className="absolute inset-0 bg-lime-700 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                  {/* Tiêu đề luôn hiện */}
                  <div className="absolute top-0 left-0 p-4 text-white font-bold text-lg z-10">
                    {item.title}
                  </div>

                  {/* Mô tả - hiệu ứng trượt từ phải */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm z-10">
                    {item.content}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-12 bg-white   ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Lĩnh vực tham gia
          </h2>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className=" mx-auto  "
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center  space-y-2 ">
                  {cat.icon}
                  <span className="text-sm font-bold text-blue-900">
                    {cat.label}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* list nhận xét  */}
      <div>
        <TestimonialSection />
      </div>

      {/* Logo Ticker */}
      <div className="overflow-hidden py-3 mt-6">
        <div className="flex w-max animate-marquee space-x-8">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-6 object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

const serviceData = [
  {
    image: IT,
    title: "Công nghệ thông tin",
    content:
      "Thiết kế nhiều các hệ thống mạng và phần mềm cho các dự án trọng điểm mang tính chất quốc gia ",
  },
  {
    image: CAM,
    title: "Camera giám sát",
    content:
      "Lắp đặt và quản trị sử dụng hệ thống Camera kĩ thuật số để giám sát giao thông; an ninh của công ty, chung cư, tòa nhà… ",
  },
  {
    image: BAOMAT,
    title: "Bảo mật hệ thống ",
    content:
      "cung cấp cho các giải pháp bảo mật tối ưu nhất với mọi yêu cầu của khách hàng. ",
  },
  {
    image: MAYCHU,
    title: "Hệ thống máy chủ và lưu trữ",
    content:
      "Tích hợp và xây dựng giải pháp lưu trữ tối ưu cho hệ thống thông tin của khách hàng, cho phép khách hàng nâng cao khả năng quản lý, tăng hiệu năng truy xuất, đảm bảo tính ổn định, sẵn sàng và độ an toàn của dữ liệu.",
  },
  {
    image: MANHINHLON,
    title: "Hệ thống màn hình lớn",
    content:
      "Màn hình tấm lớn được ghép thành từ nhiều mô-đun bằng kỹ thuật ghép nối đặc biệt sẽ trở thành một màn hình lớn duy nhất. Người sử dụng có thể hiển thị các nguồn tín hiệu video ở bất cứ vị trí nào trên màn hình ",
  },
  {
    image: HOINGHI,
    title: "Hội nghị truyền hình",
    content:
      "Hội nghị truyền hình (Video conference) cho phép những người tham dự tại nhiều địa điểm từ những quốc gia khác nhau có thể nhìn thấy và trao đổi trực tiếp với nhau qua màn hình tivi như đang họp trong cùng một căn phòng. ",
  },
];

//==================
const introData = [
  {
    title: "Chúng tôi là",
    text: (
      <>
        AME Technology
        <br /> company limited
      </>
    ),
    description: [
      "Với mục tiêu cung cấp phần mềm chất lượng cao, tối ưu hóa quy trình công việc, tăng năng suất và tiết kiệm chi phí. Cùng với sự phát triển của ngành Viễn thông và Tin học, AME TECH. LTD cũng đã phát triển mạnh mẽ cả về cơ sở vật chất, khoa học công nghệ và năng lực cán bộ.",
    ],
    textnext: " Tải hồ sơ công ty ",
    link: " # ",
    image: AMEINTRO,
  },
  {
    title: "chúng tôi là",
    text: "Cloud",
    description: ["text nhìn thấy xem nó như nào."],
    textnext: " tải hồ sơ ",
    link: "  ",
    image: CLOUD,
  },
  {
    title: "chúng tôi là",
    text: "security ",
    description: ["text nhìn thấy xem nó như nào."],
    textnext: " tải hồ sơ ",
    link: " # ",
    image: SECURITY,
  },
  {
    title: "chúng tôi là",
    text: "AI y sinh",
    description: ["text nhìn thấy xem nó như nào."],
    textnext: " tải hồ sơ ",
    link: " # ",
    image: YSINH,
  },
  {
    title: "chúng tôi là",
    text: "Network infrastructure",
    description: ["text nhìn thấy xem nó như nào."],
    textnext: " tải hồ sơ ",
    link: " # ",
    image: NETWORK,
  },
  
];

//============
const categories = [
  {
    icon: <Landmark className="w-10 h-10 text-gray-300" />,
    label: "CHÍNH PHỦ",
  },
  {
    icon: <Globe className="w-10 h-10 text-gray-300" />,
    label: "DỊCH VỤ CÔNG",
  },
  {
    icon: <Cog className="w-10 h-10 text-gray-300" />,
    label: "SẢN XUẤT",
  },
  {
    icon: <Banknote className="w-10 h-10 text-gray-300" />,
    label: "NGÂN HÀNG",
  },
  {
    icon: <HandCoins className="w-10 h-10 text-gray-300" />,
    label: "BẢO HIỂM",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-gray-300" />,
    label: "DỊCH VỤ TÀI CHÍNH",
  },
  {
    icon: <Cctv className="w-10 h-10 text-gray-300" />,
    label: "AN NINH",
  },
];
