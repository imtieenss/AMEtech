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

//img dichvu
import IT from "../assets/images/logoHome/dichvu/IT.png";
import CAM from "../assets/images/logoHome/dichvu/cam.png";
import BAOMAT from "../assets/images/logoHome/dichvu/security.jpg";
import MANHINHLON from "../assets/images/logoHome/dichvu/nhieumanhinnh.png";
import MAYCHU from "../assets/images/logoHome/dichvu/maychu.png";
import HOINGHI from "../assets/images/logoHome/dichvu/hoinghi.png";

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
                        ${index === i
                  ? "bg-white"
                  : "bg-transparent border-white"
                }
                        transition-all duration-300 `}
            />
          ))}
        </div>

        {/* slide */}
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
                <h2 className="text-2xl font-semibold">{current.title}</h2>
                <h1 className="text-4xl md:text-5xl font-semibold mt-[10px]  ">
                  {current.text}
                </h1>
                <p className="text-xl md:text-2xl text-justify mt-[10px]   md:w-3/4 ">
                  {current.description}
                </p>
                <div>
                  <a
                    href={current.link}
                    className="text-white underline hover:text-blue-300 flex items-center gap-2 mt-2"
                  >
                    {current.textnext}
                  </a>
                </div>
              </AnimatePresence>
            </div>
          </div>
          {/* //---------- */}

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
        <div className="    md:mt-[-90px] z-15">
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
                    className="absolute bottom-0 left-0 right-0 p-5 text-white text-lg text-center z-10  
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
        <h2 className="text-3xl md:text-5xl font-bold mb-[60px] md:mb-[70px] text-center  mt-[700px] md:mt-[50px] tex-600 ">
          <span className="    font-bold text-teal-600  ">
            Dịch vụ hoạt động
          </span>
        </h2>


        {/* Dịch vụ  và sản phẩm màn to */}
        <div className="  hidden md:block ">
          <div className="flex flex-wrap justify-center  md:gap-[50px]  w-[1200px]  mx-auto  ">
            {serviceData.map((item, id) => (
              <div className="w-70  h-100 relative rounded-xl overflow-hidden ">
                <motion.div
                  key={id}
                  className=" group w-full  h-full  shadow-lg  bg-cover bg-center  transition-transform duration-300 transform hover:scale-105 flex justify-center items-center " //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Lớp phủ đen mờ */}
                  <div className="absolute inset-0 bg-black/30 "></div>
                  {/* Overlay nền xanh */}
                  <div className="absolute inset-0 bg-green-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300   "></div>

                  {/* Tiêu đề luôn hiện */}
                  <div className="absolute top-[20px]  p-4 text-white font-bold text-3xl z-10 text-center ">
                    {item.title}
                  </div>

                  {/* Mô tả - hiệu ứng trượt từ phải */}
                  <div
                    className="absolute top-[150px] left-0 right-0 p-4 text-white text-xl z-10 text-justify mx-3 
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
                  className="relative  w-70 h-100 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300 mx-auto flex justify-center items-center " //relative group w-64 h-96 rounded-xl overflow-hidden shadow-lg  bg-cover bg-center transition-all duration-300
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Lớp phủ đen mờ */}
                  <div className="absolute inset-0 bg-black/50 "></div>
                  {/* Tiêu đề luôn hiện */}
                  <div className="absolute top-[20px]  p-4 text-white font-bold text-3xl z-10 text-center 0">
                    {item.title}
                  </div>

                  {/* Mô tả - hiệu ứng trượt từ phải */}
                  <div className="absolute top-[150px] left-0 right-0 p-4 text-white text-xl z-10 text-justify mx-2  ">
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
          {/* <h2 className="text-3xl md:text-4xl   text-center mb-[80px] ">
            <span className="   font-bold text-teal-600  ">
              Lĩnh vực tham gia
            </span>
          </h2> */}
          <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-pj font-bold text-teal-600 text-center mb-[80px] ">
            Lĩnh vực tham gia
          </h2>

          {/* list icon */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay={{ delay: 900 }}
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto  px-6 py-6 text-center text-4xl md:text-5xl font-bold"
      >
        <h2 className="bg-teal-600  bg-clip-text text-transparent">
          Đối tác chiến lược
        </h2>
      </motion.div>

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
    title: (
      <>
        {" "}
        Phát triển <br /> phần mềm{" "}
      </>
    ),
    content:
      "Phát triển và triển khai các giải pháp phần mềm phù hợp với nhu cầu doanh nghiệp, giúp tối ưu quy trình, nâng cao hiệu suất và khả năng quản lý",
  },
  {
    image: CAM,
    title: "Camera giám sát",
    content:
      "Cung cấp, lắp đặt và vận hành hệ thống camera giám sát cho giao thông, tòa nhà, công ty và khu dân cư.",
  },
  {
    image: BAOMAT,
    title: "Bảo mật hệ thống",
    content:
      "Đưa ra các giải pháp bảo mật tối ưu, giúp doanh nghiệp phòng tránh và xử lý rủi ro an ninh mạng hiệu quả.",
  },
  {
    image: MAYCHU,
    title: "Hệ thống máy chủ và lưu trữ",
    content:
      "Xây dựng giải pháp lưu trữ giúp tăng tốc truy xuất, ổn định hệ thống và bảo vệ an toàn dữ liệu cho doanh nghiệp.",
  },
  {
    image: MANHINHLON,
    title: "Hệ thống màn hình lớn",
    content:
      "Thiết kế và lắp đặt các màn hình ghép nối chuyên dụng để hiển thị video linh hoạt trong không gian rộng lớn.",
  },
  {
    image: HOINGHI,
    title: (
      <>
        {" "}
        Hội nghị <br /> truyền hình{" "}
      </>
    ),
    content:
      "Triển khai giải pháp hội nghị trực tuyến giúp kết nối và trao đổi từ xa như đang họp trong cùng một phòng.",
  },
];

//==================
const introData = [
  {
    title: "Chúng tôi là",
    text: <>AME Technology Company Limited</>,
    description: (
      <>
        Chúng tôi chuyên cung cấp phần mềm chất lượng cao, giúp doanh nghiệp tối
        ưu hóa quy trình làm việc, nâng cao hiệu suất và tiết kiệm chi phí vận
        hành trong thời đại số.
      </>
    ),
    textnext: "Tải hồ sơ công ty",
    link: "#",
    image: AMEINTRO,
  },
  {
    title: "Hạ tầng tối ưu",
    text: "Giải pháp đám mây & dữ liệu",
    description: (
      <>
        Chúng tôi xây dựng các hệ thống lưu trữ dữ liệu trên nền tảng đám mây an
        toàn, linh hoạt và có khả năng mở rộng cao, phù hợp với mọi quy mô doanh
        nghiệp.
      </>
    ),
    textnext: "Tìm hiểu thêm",
    link: "#",
    image: CLOUD,
  },
  {
    title: "Bảo mật thông tin",
    text: "An toàn dữ liệu & hệ thống",
    description: (
      <>
        Đảm bảo an toàn toàn diện cho hạ tầng CNTT thông qua các giải pháp bảo
        mật hiện đại, ngăn chặn rủi ro và bảo vệ dữ liệu khỏi các mối đe dọa
        ngày càng tinh vi.
      </>
    ),
    textnext: "Tìm hiểu thêm",
    link: "#",
    image: SECURITY,
  },
  {
    title: "Công nghệ y tế",
    text: "Ứng dụng số chăm sóc sức khỏe",
    description: (
      <>
        Chúng tôi cung cấp giải pháp công nghệ giúp nâng cao hiệu quả quản lý,
        khám chữa bệnh và chăm sóc sức khỏe, góp phần hiện đại hóa ngành y tế.
      </>
    ),
    textnext: "Khám phá ngay",
    link: "#",
    image: YSINH,
  },
  {
    title: "Giải pháp mạng",
    text: "Hạ tầng kết nối hiện đại",
    description: (
      <>
        Thiết kế và triển khai hạ tầng mạng mạnh mẽ, ổn định và an toàn, đảm bảo
        kết nối liên tục cho các hệ thống công nghệ thông tin trong doanh
        nghiệp.
      </>
    ),
    textnext: "Xem chi tiết",
    link: "#",
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
    content: <>Xây dựng hệ thống truyền thông và thiết bị điện tử.</>,
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
    content: <>Ứng dụng công nghệ để bảo vệ môi trường sống.</>,
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
    content: <>Phát triển phần mềm và hệ thống quản lý thông tin.</>,
  },
];
