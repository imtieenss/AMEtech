import HOMEPAGE_PIC from "../assets/images/nen.png"
import SANPHAM from "../assets/images/logoHome/image.png"
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

//import myProjects from './sections/index.js';
// Import Swiper styles
//import 'swiper/css';





const images = import.meta.glob("../assets/images/logoHome/logo/logo*.png", { eager: true });
const logos = Object.values(images).map((mod: any) => mod.default);

// const cardData = [
//     {
//         title: "Thương mại điện tử",
//         icon: "",
//         description: [
//             "Hơn 2 năm kinh nghiệm xây dựng hệ thống thương mại điện tử, AME cung cấp các giải pháp phù hợp nhất với ngân sách và mục tiêu của khách hàng, đồng hành cùng khách hàng trong suốt quá trình vận hành.",
//         ],
//     },
//     {
//         title: "Y tế số",
//         icon: "",
//         description: [
//             "Cung cấp các giải pháp y tế thông qua healthcare mobile app là xu hướng. Dữ liệu cho thấy các tổ chức chăm sóc sức khỏe có nhiều cơ hội cải thiện sự hài lòng của bệnh nhân nhờ có health-care app. Liên hệ AME ngay để tìm hiểu thêm.",
//         ],
//     },
//     {
//         title: "Hệ thống đặt trước",
//         icon: "",
//         description: [
//             "80% các khách sạn sử dụng booking system có doanh thu cao hơn các doanh nghiệp còn lại cùng ngành. Ngoài du lịch khách sạn, hệ thống đặt chỗ được áp dụng cho rất nhiều lĩnh vực: đặt đồ ăn, vé xem phim, lịch họp,….",
//         ],
//     },
//     {
//         title: "Nền tảng mạng xã hội",
//         icon: "",
//         description: [
//             "Chúng tôi tập trung phát triển mạng xã hội chuyên biệt cho từng nhóm cộng đồng: cộng đồng những người ung thư, những người yêu thể thao,…Các chức năng được tối ưu phù hợp với từng cộng đồng.",
//         ],
//     },
//     {
//         title: "Ứng dụng kết nối Matching",
//         icon: "",
//         description: [
//             "Hệ thống matching ứng dụng trong đa dạng lĩnh vực như bất động sản, sửa chữa điện nước, hẹn hò,… nhằm kết nối các đối tượng phù hợp với mục đích cá nhân chỉ trong nháy mắt.",
//         ],
//     },
//     {
//         title: "Doanh nghiệp số",
//         icon: "",
//         description: [
//             "Ứng dụng ERP là xu thế tất yếu, là công cụ quan trọng để nâng cao năng lực cạnh tranh, đem lại lợi ích lâu dài cho các DN Việt Nam hiện nay. Với nhiều năm nghiên cứu hệ thống ERP, AME sẽ tư vấn và triển khai hệ thống hiệu quả, phù hợp với từng doanh nghiệp.",
//         ],
//     },
//     {
//         title: "Giáo dục số",
//         icon: "",
//         description: [
//             "AME tư vấn, xây dựng và vận hành hệ thống giáo dục điện tử tối ưu cho hoạt động kinh doanh của khách hàng, bao gồm tư vấn và thiết kế các giao diện học tập chú trọng đến UX của người học, thiết kế hệ thống quản lý học tập (LMS) giúp hợp lý hóa công việc quản lý.",
//         ],
//     },
//     {
//         title: "Trình phát trực tiếp",
//         icon: "",
//         description: [
//             "Đáp ứng các nhu cầu giao tiếp trực tuyến, AME đưa ra giải pháp tổng thể xây dựng hệ thống và ứng dụng video streaming chất lượng cao, đáp ứng lượng người dùng lớn, với chi phí phát triển hợp lý trong khoảng thời gian ngắn.",
//         ],
//     },
// ];



const HomePage: React.FC = () => {
    return (
        <>
            <section id="hero" className="relative container mx-auto px-8 min-h-fit pt-[0px] md:pt-[80px] mt-[110px] ">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-[110%] h-[110%] object-cover -z-10 scale-110 opacity-70"
                    style={{ transform: "scaleX(-1)" }}
                >
                    <source src="videos/backdrop.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Layout 3 cột: Text | GIF | Ảnh */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-14 mt-[80px] md:mt-0">

                    {/* Cột Text - Trái */}
                    <div className="w-full lg:w-1/2 text-left">
                        {/* <h3 className="text-xl lg:text-2xl font-medium text-black">
                            Hi, Welcome to Our Website <span className="waving-hand">👋</span>
                        </h3> */}
                        <h1 className="w-full text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-to-r from-[#539afb] to-[#0a2bde] bg-clip-text text-transparent">
                            AME TECHNOLOGY COMPANY LIMITED
                        </h1>
                        <p className="mt-4 text-sm lg:text-base">
                            Với mục tiêu cung cấp phần mềm chất lượng cao, tối ưu hóa quy trình công việc, tăng năng suất và tiết kiệm chi phí. Cùng với sự phát triển của ngành Viễn thông và Tin học, AME TECH. LTD cũng đã phát triển mạnh mẽ cả về cơ sở vật chất, khoa học công nghệ và năng lực cán bộ.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
                            <a href="/producePage">
                                <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">Dự án</button>
                            </a>
                            <a href="/profilePage">
                                <button className="flex-1 md:flex-none action-btn btn-scale-anim" >Hồ Sơ Công Ty</button>
                            </a>
                            
                        </div>
                    </div>

                    
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.img
                            src={HOMEPAGE_PIC}
                            alt="HomePage_Pic"
                            className="homepage-pic max-w-full"
                            animate={{ y: [0, -10, 0] }} // Di chuyển lên xuống
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Lặp vô hạn
                        />
                    </div>
                </div>
            </section>

           
            {/* AME tiếng anh */}
            <div className="container  mx-auto  mt-[120px]  flex   gap-5 h-[430px]">
                {/* Phần ame tiếng anh */}
                <div className=" px-6 py-10  rounded-lg shadow-lg w-1/3 ">
                <h1 className="text-5xl text-left font-bold">
                    <span className=" text-green-600  rounded text-7xl">A</span>dvanced <br />
                    <span className=" text-red-700    rounded text-7xl">M</span>anufacturing <br />
                    <span className=" text-orange-500 rounded text-7xl">E</span>ngineering
                </h1>
                {/* Thông tin */}
                <div className="mt-6">
                    <p className="text-xl font-bold">100+ <span className="text-gray-300">Khách hàng</span></p>
                    <p className="text-xl font-bold">200+ <span className="text-gray-300">Dự án đã thực hiện</span></p>
                    <p className="text-xl font-bold">300+ <span className="text-gray-300">Nhân sự hiện có</span></p>
                    
                </div>
                </div>
                

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 text-2xl ">
                    {/* Card 1 */}
                    <div className="bg-green-400 p-6 rounded-lg shadow-lg ">
                        <h2 className="text-4xl font-bold mb-4">Phát triển phần mềm</h2>
                        <p>Xây dựng giao diện</p>
                        <p>Tư vấn chức năng </p>
                        <p>Vận hành phần mềm </p>
                        <div className="mt-4">
                            <img src={SANPHAM} alt="Rocket" className="w-24 mx-auto" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-red-700 p-6 rounded-lg shadow-lg ">
                        <h2 className="text-4xl font-bold mb-4">Giải pháp doanh nghiệp</h2>
                        <p>Đào tạo nhân lực</p>
                        <p>Giới thiệu nhân lực</p>
                        <p>Haken kỹ sư</p>
                        {/* <div className="mt-4">
                            <img src="/teamwork.png" alt="Teamwork" className="w-24 mx-auto" />
                        </div> */}
                    </div>

                    {/* Card 3 */}
                    <div className="bg-orange-400 p-6 rounded-lg shadow-lg ">
                        <h2 className="text-4xl font-bold mb-4">Đào tạo<br/> nhân sự</h2>
                        <p>Đào tạo kĩ năng</p>
                        <p>Môi trường năng động</p>
                        <p>Đãi ngộ ưu đãi</p>
                        {/* <div className="mt-4">
                            <img src="/business.png" alt="Business" className="w-24 mx-auto" />
                        </div> */}
                    </div>

                </div>
                

            
            </div>

            {/* Công nghệ tích hợp */}
            <section className="bg-white text-black py-12">
                <div className="container mx-auto text-center px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Công nghệ <span className="text-blue-600">tích hợp</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                        Xu hướng tích hợp công nghệ mới Blockchain, IoT và AI mang đến cho người dùng sự thuận tiện
                        trong tương tác và giao dịch cho người dùng là mục tiêu AME đang hướng tới.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* AI Card */}
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Trí tuệ nhân tạo AI</h3>
                            <ul className="space-y-2 text-gray-500">
                                <li>⚙️ Phát triển ứng dụng AI</li>
                                <li>🧠 Xử lý ngôn ngữ tự nhiên (NLP)</li>
                                <li>📈 Máy học (Machine Learning)</li>
                            </ul>
                        </div>

                        {/* Blockchain Card */}
                        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Công nghệ chuỗi khối</h3>
                            <ul className="space-y-2 text-white">
                                <li>🎨 Phát triển thị trường NFT</li>
                                <li>📱 Phát triển ứng dụng</li>
                                <li>🔗 Hợp đồng thông minh (SC)</li>
                                <li>💰 Ví tiền mã hóa (DEX/CEX)</li>
                            </ul>
                        </div>

                        {/* IoT Card */}
                        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Internet vạn vật IoT</h3>
                            <ul className="space-y-2 text-white">
                                <li>🔄 Chuyển đổi sản xuất số</li>
                                <li>🌍 Ứng dụng Internet vào máy móc</li>
                                <li>💡 Giải pháp thương mại điện tử</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* Dịch vụ và giải pháp */}
            {/* <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Dịch vụ <span className="text-blue-600">và giải pháp</span>
                    </h2>

                    
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
                        {cardData.map((card, index) => (
                            <SwiperSlide key={index} className="py-4 px-2">
                                <div className="flex flex-col h-[350px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-[25px]">
                                    
                                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90"></div>
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-white text-2xl font-bold">{card.title}</div>
                                        </div>
                                    </div>

                                    
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-base font-light leading-relaxed text-gray-700 flex-grow">
                                            {card.description}
                                        </p>
                                      
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section> */}

            {/* Logo Ticker */}
            <div className="overflow-hidden py-3 mt-6">
                <div className="flex w-max animate-marquee space-x-8">
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt={`logo-${index}`} className="h-6 object-contain" />
                    ))}
                </div>
            </div>



            x









        </>
    );
};

export default HomePage;
