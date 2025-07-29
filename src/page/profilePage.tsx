import LOGO_SMART from "../assets/images/logoProfile/logo_smart_nen.png";
import LOGO_BINH_MINH from "../assets/images/logoProfile/logoBinhMinh.png";
import LOGO_AME from "../assets/images/logoProfile/logoAME.png";
import LOGO_TECA from "../assets/images/logoProfile/Logo_teca.png";
import { motion } from "framer-motion";


const ProfilePage: React.FC = () => {
  
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen ">

            {/* text đoạn đầu */}
            <div className="container  px-[40px] md:px-[120px] py-[30px]  grid grid-cols-1 md:grid-cols-3  gap-x-4    min-h-screen  ">
                {/* text */}
                
                <div className=" md:col-span-2 mx-auto mt-30 px-6 py-16 text-center  flex justify-items-center items-center ">

                    <div className="   ">
                    <motion.h1           
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-4xl font-extrabold text-left"
                    >
                        <span className="bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent">
                        Chúng tôi một doanh nghiệp trẻ<br/> với phương châm kinh doanh
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto text-justify"
                    >
                        AME với quan điểm khách hàng là trọng tâm, nhằm đáp ứng nhu cầu ngày càng tăng của khách hàng, chúng tôi đã luôn nỗ lực hết mình để vươn tới sự hoàn thiện về chất lượng và dịch vụ để đạt được muc đích cung cấp:  
                        <span className="italic font-bold"> “SẢN PHẨM CÓ CHẤT LƯỢNG CAO NHẤT, GIÁ THÀNH HỢP LÝ NHẤT, DỊCH VỤ SAU BÁN HÀNG TỐT NHẤT”. </span>
                        AME đã xây dựng được chiến lược kinh doanh đúng đắn với phương châm:
                        <span className="italic font-bold"> “TẠO NÊN GIÁ TRỊ TỪ SỰ ĐỔI MỚI, VƯƠN TỚI SỰ HOÀN THIỆN VỀ CHẤT LƯỢNG VÀ DỊCH VỤ”.</span>
                    </motion.p>
                        
                    
                    </div> 
                   
                </div>

                {/* logo */}
                <div className="container mx-auto mt-30 px-6 py-16 flex justify-items-center items-center  ">
                    <motion.img
                        src={LOGO_AME}
                        alt="LOGO_AME"
                        className=" flexjustify_center max-w-full   "
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Giới thiệu công ty */}
            <div className="px-[40px] md:px-[120px] pt-[90px] ">
                <div className="container mx-auto  px-6 py-6 text-center text-4xl md:text-6xl font-extrabold"> 
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }} 
                        className=" bg-teal-600  bg-clip-text text-transparent">
                        Giới thiệu công ty
                    </motion.h1>
                </div>
                <motion.p 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="container text-lg text-gray-500 mt-6 max-w-5xl mx-auto text-justify"
                    >
                        Công ty TNHH Công Nghệ AME thành lập theo Luật công ty Việt Nam với Giấy phép 
                        đăng ký kinh doanh số 319494/24 do Sở KH&ĐT Hà Nội cấp ngày 26/09/2024 cấp, 
                        chuyên sâu sản xuất giải pháp tổng thể về công nghệ thông tin và viễn thông. 
                        Với muc tiêu cung cấp phần mềm chất lượng cao, tối ưu hóa quy trình công việc, 
                        tăng năng suất và tiết kiệm chi phí. Cùng với sự phát triển của ngành Viễn thông 
                        và Tin học, AME TECH. LTD cũng đã phát triển mạnh mẽ cả về cơ sở vật chất, khoa học 
                        công nghệ và năng lực cán bộ. <br/>
                        Hiện nay AME TECH. LTD định hướng vào các dịch vụ tin học viễn thông mới, tiên tiến 
                        và những ứng dụng công nghệ cao. Từ giai đoạn đầu hoạt động AME TECH. LTD đã chú 
                        trọng công tác tuyển dụng và đào tạo các cán bộ cho các ứng dụng chuyên sâu và mở 
                        rộng, trong đó bao gồm các thạc sĩ, kỹ sư phần mềm, phần cứng được đào tạo trong nước 
                        và ngoài nước, có kinh nghiệm triển khai các dự dự án thực tế.<br/>
                        Sự phát triển mạnh mẽ của AME TECH. LTD đạt được nhờ vào chất lượng sản phẩm và dịch 
                        vụ mà công ty cung cấp cho khách hàng và được chứng minh bởi uy tín cuả công ty 
                        đối với các khách hàng của mình.<br/>

                        AME TECH. LTD có một tập thể nhân viên đoàn kết, lao động quên mình, có kỷ luật và phong cách 
                        làm việc theo tinh thần đồng đội, có khả năng làm chủ, nắm bắt nhanh các công nghệ mới, chủ động 
                        sáng tạo trong nghiên cứu ứng dụng, chuyển giao công nghệ sản  xuất. Đội ngũ nhân sự của AME TECH. LTD 
                        là nhân tố quan trọng, là nguồn nhân lực luôn luôn sẵn sàng hoàn thành xuất sắc các công việc được giao, 
                        phục vụ tận tụy và làm hài lòng khách hàng, là vốn quý nhất của  AME TECH. LTD để ngày càng phát triển lớn mạnh.<br/>

                        AME TECH. LTD có quan hệ hợp tác với nhiều đối tác ngành viễn thông và tin học 
                        trong nước định hướng sẽ mở rộng thị trường ra các nước khác trên thế giới. Các mối quan
                         hệ này hỗ trợ cho AME TECH. LTD nắm bắt được các công nghệ mới và có đủ khả năng thực hiện được các dự án lớn.<br/>


                    {/* <ReactMarkdown>{text1}</ReactMarkdown> */}
                </motion.p>

            </div>

            {/* Các hoạt động */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" px-[40px] md:px-[120px] py-[30px] "
                >
                <div className="container mx-auto  px-6 py-6 text-center text-4xl md:text-6xl font-extrabold"> 
                    <h1 className=" bg-teal-600   bg-clip-text   text-transparent">
                    Các hoạt động chính của công ty 
                    </h1>
                </div>
                <div className="container text-lg text-gray-500 mt-6 max-w-5xl mx-auto text-justify"> 
                Công ty AME TECH. LTD hướng tới sự phát triển vào các lĩnh vực công nghệ mũi nhọn như: Công nghệ Điện tử - Thông tin - Viễn thông,  
                Phát triển hạ tầng, Công nghệ môi trường, Công nghệ vật liệu mới... Tập trung đầu tư để sản xuất ra những sản phẩm công nghệ cao, 
                xây dựng và tăng cường sự liên kết giữa các Trung tâm nghiên cứu khoa học - Công ty - các cơ sở sản xuất nhằm tận dụng những ưu thế sẵn có.<br/>
	            Là đơn vị hoạt động rộng trên nhiều lĩnh vực, Công ty đã cố gắng hoàn thành nhiều đề tài phục vụ quốc phòng - an ninh, 
                sản phẩm nghiên cứu của Công ty đa dạng, nhiều sản phẩm của công ty được các đối tác khách hàng tín nhiệm.
                </div>


            </motion.div>

            {/* Các công việc */}
            <div className="container mx-auto px-[60px] md:px-[150px] py-12 grid grid-cols-1 md:grid-cols-3 gap-[50px]  ">
            

                {workData.map((work,id) => ( 
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative "
                        key={id}
                    >
                        <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">{work.id}</span>
                        <h3 className="text-xl font-bold text-gray-800 pl-[7px] ">{work.title}</h3>
                        <p className="text-gray-600 mt-2 text-justify pl-[7px] "> {work.content} </p>
                    </motion.div>

                ))} 
            
            </div>

            {/* Đối tác toàn diện */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }} 
                className="container mx-auto  px-6 py-6 text-center text-4xl md:text-6xl font-extrabold"
                > 
                    <h1 className="bg-teal-600  bg-clip-text text-transparent">
                    Đối tác toàn diện 
                    </h1>
            </motion.div>
            <div className="container px-[120px] py-[20px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="container relative flex justify-center items-center   ">
                    <a href="http://bmdt.vn/" target="_blank" rel="noopener noreferrer" >
                        <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        src={LOGO_SMART} 
                         alt="LOGO_SMART"
                        className=" flex justify_center rounded-4xl w-[150px] "
                        />
                    </a>
                </div>

                <div className="container relative flex justify-center items-center   ">
                    <a href="https://tecapro.com.vn/" target="_blank" rel="noopener noreferrer" >
                        <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        src={LOGO_TECA} 
                         alt="LOGO_TECA"
                        className=" flex justify_center rounded-4xl w-[150px] "
                        />
                    </a>
                </div>
            
                <div className="container relative flex justify-center items-center    ">
                    <a href="http://bmdt.vn/" target="_blank" rel="noopener noreferrer" >
                        <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        src={LOGO_BINH_MINH} 
                         alt="LOGO_BINH_MINH"
                        className=" flex justify_center rounded-4xl w-[200px] "
                        />
                    </a>
                </div>
            </div>

        </div>
        </>
    );
};


const workData = [
    {
        id:"1",
        title: "Công nghệ thông tin và truyền thông",
        content: "Thiết kế nhiều các hệ thống mạng và phần mềm cho các dự án trọng điểm mang tính chất quốc gia " ,
    },
    {
        id:"2",
        title: "Giải pháp Camera giám sát",
        content: "Lắp đặt và quản trị sử dụng hệ thống Camera kĩ thuật số để giám sát giao thông; an ninh của công ty, chung cư, tòa nhà… " ,
        
    },
    {
        id:"3",
        title: "Giải pháp bảo mật hệ thống ",
        content: "cung cấp cho các giải pháp bảo mật tối ưu nhất với mọi yêu cầu của khách hàng. ",
        
    }, 
    {
        id:"4",
        title: "Giải pháp hệ thống máy chủ và lưu trữ",
        content: "tích hợp và xây dựng giải pháp lưu trữ tối ưu cho hệ thống thông tin của khách hàng, cho phép khách hàng nâng cao khả năng quản lý, tăng hiệu năng truy xuất, đảm bảo tính ổn định, sẵn sàng và độ an toàn của dữ liệu." ,
    },
    {
        id:"5",
        title: "Hệ thống màn hình lớn",
        content: "Màn hình tấm lớn được ghép thành từ nhiều mô-đun bằng kỹ thuật ghép nối đặc biệt sẽ trở thành một màn hình lớn duy nhất. Người sử dụng có thể hiển thị các nguồn tín hiệu video ở bất cứ vị trí nào trên màn hình ",
    },
    {
        id:"6",
        title: "Giải pháp hội nghị truyền hình",
        content: "Hội nghị truyền hình (Video conference) cho phép những người tham dự tại nhiều địa điểm từ những quốc gia khác nhau có thể nhìn thấy và trao đổi trực tiếp với nhau qua màn hình tivi như đang họp trong cùng một căn phòng. ",
    },
];

export default ProfilePage;






































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





