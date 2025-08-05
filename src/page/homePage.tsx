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
  Router,
  Shield,
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
import IT from "../assets/images/logoHome/intro/thumb-1920-1358310.png";
import CAM from "../assets/images/logoHome/intro/cloud.jpg";
import BAOMAT from "../assets/images/logoHome/intro/baomat.jpg";
import MANHINHLON from "../assets/images/logoHome/intro/baomat.jpg";
import MAYCHU from "../assets/images/logoHome/intro/baomat.jpg";
import HOINGHI from "../assets/images/logoHome/intro/baomat.jpg";

//img linh vuc
import ET1 from "../assets/images/logoHome/linhVuc/ET.png";
import IT1 from "../assets/images/logoHome/linhVuc/IT.png";
import EV1 from "../assets/images/logoHome/linhVuc/image.png";

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
      <div className=" h-screen ">
        {/* background nền  relative flex items-center justify-center w-full  min-h-screen  */}
        <div className=" absolute inset-0 z-0 h-13/16">
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
          {/* Lớp phủ đen mờ */}
          {/* <div className="absolute inset-0 bg-black/60 "></div> */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-white/80"></div>
        </div>
        {/* Indicators  chấm tròn */}
        <div className="absolute top-[110px] left-1/2 -translate-x-1/2 flex gap-4 z-12">
          {introData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full border
                        ${
                          index === i
                            ? "bg-white"
                            : "bg-transparent border-white"
                        }
                        transition-all duration-300 `}
            />
          ))}
        </div>

        {/* slide 1 */}
        <div className="relative grid grid-cols-[50px_1fr_50px] pt-[70px]  container mx-auto  h-3/4   ">
          {/* prevSlide */}
          <div className=" flex justify-center items-center ml-[20px] ">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 text-white px-1 py-1 rounded-full"
            >
              <GrFormPrevious size={40} />
            </button>
          </div>

          {/* nội dung  */}
          <div className="text-white  container  z-10    ">
            <div className=" flex flex-col   mt-[100px]  md:mx-[190px] pl-[20px] md:pl-0 pr-[20px]  ">
              <AnimatePresence mode="wait">
                <h2
                  // key={index}
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -20 }}
                  // transition={{ duration: 0.1 }}
                  className="text-2xl font-semibold"
                >
                  {current.title}
                </h2>
                <h1
                  // key={index}
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -20 }}
                  // transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-serif mt-[10px] "
                >
                  {current.text}
                </h1>
                <p className="text-xl md:text-2xl text-justify mt-[10px] ">
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
          <div className=" flex justify-center items-center mr-[20px]  ">
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 text-white px-1 py-1 rounded-full"
            >
              <GrFormNext size={40} />
            </button>
          </div>
        </div>

        {/* Lĩnh vực */}
        <div className="  mt-[-90px] z-15">
          <div className="flex flex-wrap justify-center  gap-10 md:gap-[50px]    mx-auto   ">
            {linhVucData.map((item, id) => (
              <div className="  w-70  h-70 overflow-hidden  rounded-xl">
                <motion.div
                  key={id}
                  className=" group w-full  h-full  shadow-lg  bg-cover bg-center   transition-transform duration-300 transform hover:scale-105 flex justify-center items-center " //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Lớp phủ đen mờ */}
                  <div className="absolute inset-0 bg-black/30 "></div>
                  {/* Overlay nền  */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300   "></div>

                  {/* Tiêu đề  */}
                  <div
                    className="absolute  top-[80px]   text-white font-bold text-4xl z-10  text-center
                                transition-all duration-300 ease-in-out 
                                group-hover:-translate-y-2 "
                  >
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
              </div>
            ))}
          </div>
        </div>
      </div>

    
      {/* sản phẩm và dịch vụ */}
      <section className="bg-white text-black py-12 container mx-auto  ">
        <h2 className="text-3xl md:text-4xl font-bold mb-[60px] md:mb-[70px] text-center  mt-[650px] md:mt-[50px] ">
          Sản phẩm và dịch vụ
        </h2>

        {/* Dịch vụ  và sản phẩm màn to */}
        <div className="  hidden md:block ">
          <div className="flex flex-wrap justify-center  md:gap-[50px]  w-[1200px]  mx-auto  ">
            {serviceData.map((item, id) => (
              <motion.div
                key={id}
                className="relative group w-70  h-100 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300" //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
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

        {/* Dịch vụ  và sản phẩm màn bé */}
        <div className="block md:hidden">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay={{ delay: 2000 }}
            loop
            className="max-w-[88%]  "
          >
            {serviceData.map((item, id) => (
              <SwiperSlide key={id} className="  ">
                <div
                  key={id}
                  className="relative  w-70 h-100 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300 mx-auto " //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Tiêu đề luôn hiện */}
                  <div className="absolute top-0 left-0 p-4 text-white font-bold text-lg z-10">
                    {item.title}
                  </div>

                  {/* Mô tả - hiệu ứng trượt từ phải */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xm z-10">
                    {item.content}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Lĩnh vực tham gia */}
      <section className="py-12 bg-white   ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold  text-center mb-[80px] ">
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
                slidesPerView: 7,
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
    content: (
      <>
        Tích hợp và xây dựng giải pháp lưu trữ tối ưu cho hệ thống thông tin của
        khách hàng, cho phép khách hàng nâng cao khả năng quản lý, tăng hiệu
        năng truy xuất, đảm bảo tính ổn định, sẵn sàng và độ an toàn của dữ
        liệu.
      </>
    ),
  },
  {
    image: MANHINHLON,
    title: "Hệ thống màn hình lớn",
    content: (
      <>
        Màn hình tấm lớn được ghép thành từ nhiều mô-đun bằng kỹ thuật ghép nối
        đặc biệt sẽ trở thành một màn hình lớn duy nhất. Người sử dụng có thể
        hiển thị các nguồn tín hiệu video ở bất cứ vị trí nào trên màn hình.
      </>
    ),
  },
  {
    image: HOINGHI,
    title: "Hội nghị truyền hình",
    content: (
      <>
        Hội nghị truyền hình (Video conference) cho phép những người tham dự tại
        nhiều địa điểm từ những quốc gia khác nhau có thể nhìn thấy và trao đổi
        trực tiếp với nhau qua màn hình tivi như đang họp trong cùng một căn
        phòng.
      </>
    ),
  },
];

//==================
const introData = [
  {
    title: "Chúng tôi là",
    text: (
      <>
        AME Technology
         company limited
      </>
    ),
    description: (
      <>
        Với mục tiêu cung cấp phần mềm chất lượng cao, tối ưu hóa quy trình công
        việc, tăng năng suất và tiết kiệm chi phí. Cùng với sự phát triển của
        ngành Viễn thông và Tin học, AME TECH. LTD cũng đã phát triển mạnh mẽ cả
        về cơ sở vật chất, khoa học công nghệ và năng lực cán bộ.
      </>
    ),
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
    icon: <Shield className="w-10 h-10 text-gray-300" />,
    label: "QUÂN ĐỘI",
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
    label: "TÀI CHÍNH",
  },
  {
    icon: <Cctv className="w-10 h-10 text-gray-300" />,
    label: "AN NINH",
  },
  {
    icon: <Router className="w-10 h-10 text-gray-300" />,
    label: "VIỄN THÔNG",
  },
];

const linhVucData = [
  {
    image: ET1,
    title: (
      <>
        Điện tử
        <br />
        Viễn thông
      </>
    ),
    content: <>HUST.</>,
  },
  {
    image: EV1,
    title: (
      <>
        Công nghệ
        <br />
        Môi trường
      </>
    ),
    content: <>HUST.</>,
  },
  {
    image: IT1,
    title: (
      <>
        Công nghệ
        <br />
        Thông tin
      </>
    ),
    content: <>HUST.</>,
  },
];
