import LOGO_SMART from "../assets/images/logoProfile/logo_smart_nen.png";
import LOGO_BINH_MINH from "../assets/images/logoProfile/logoBinhMinh.png";
import LOGO_AME from "../assets/images/logoProfile/logoAME.png";
import LOGO_TECA from "../assets/images/logoProfile/Logo_teca.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

const ProfilePage: React.FC = () => {
    //Giới thiệu cty 
    const [text1, setText1] = useState('');
    useEffect(() => {
        // Fetch or import the .md file
        fetch('/src/assets/text/gioi-thieu-cty.md')
        .then(response => response.text())
        .then(text => setText1(text))
        .catch(error => console.error('Error loading markdown:', error));
    }, []);

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            {/* text đoạn đầu */}
            <div className="container mx-auto px-[120px] py-[30px]  flex flex-row gap-x-4 ">
                {/* text */}
                <div className="container mx-auto mt-30 px-6 py-16 text-left w-2/3"> 
                    <motion.h1           
                    initial={{ opacity: 0, y: 50 }}  // Bắt đầu ẩn và nằm thấp
                    animate={{ opacity: 1, y: 0 }}  // Hiện dần và bay lên
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-4xl font-extrabold"
                    >
                        <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        Chúng tôi một doanh nghiệp trẻ<br/> với phương châm kinh doanh
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto text-justify"
                    >
                        AME với quan điểm khách hàng là trọng tâm, nhằm đáp ứng nhu cầu ngày càng tăng của khách hàng, chúng tôi đã luôn nỗ lực hết mình để vươn tới sự hoàn thiện về chất lượng và dịch vụ để đạt được muc đích cung cấp:  
                        <span className="italic font-bold"> “SẢN PHẨM CÓ CHẤT LƯỢNG CAO NHẤT, GIÁ THÀNH HỢP LÝ NHẤT, DỊCH VỤ SAU BÁN HÀNG TỐT NHẤT”. </span>
                        AME đã xây dựng được chiến lược kinh doanh đúng đắn với phương châm:
                        <span className="italic font-bold"> “TẠO NÊN GIÁ TRỊ TỪ SỰ ĐỔI MỚI, VƯƠN TỚI SỰ HOÀN THIỆN VỀ CHẤT LƯỢNG VÀ DỊCH VỤ”.</span>
                    </motion.p>
                </div>

                <div className="container mx-auto mt-30 px-6 py-16 w-1/3 flex justify-items-center items-center ">
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
            <div>
                <div className="container mx-auto  px-6 py-6 text-center text-4xl md:text-6xl font-extrabold"> 
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }} 
                        className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        Giới thiệu công ty
                    </motion.h1>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="container text-lg text-gray-500 mt-6 max-w-5xl mx-auto text-justify"
                    > 
                    <ReactMarkdown>{text1}</ReactMarkdown>
                </motion.div>

            </div>

            {/* Các hoạt động */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=" px-[120px] py-[30px] "
                >
                <div className="container mx-auto  px-6 py-6 text-center text-4xl md:text-6xl font-extrabold"> 
                    <h1 className="bg-gradient-to-r from-orange-500 to-purple-600  bg-clip-text   text-transparent">
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
            <div className="container mx-auto px-[150px] py-12 grid grid-cols-1 md:grid-cols-3 gap-[50px]  ">
            
                {/* 1 */}
                <div className="relative">
                    <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">1</span>
                    <h3 className="text-xl font-bold text-gray-800 ">Công nghệ thông tin<br/> và truyền thông</h3>
                    <p className="text-gray-600 mt-2 text-justify">
                    Thiết kế nhiều các hệ thống mạng và phần mềm cho các dự án trọng điểm mang tính chất quốc gia 
                    </p>
                </div>

                {/* 2 */}
                <div className="relative">
                    <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">2</span>
                    <h3 className="text-xl font-bold text-gray-800 ">Giải pháp Camera giám sát</h3>
                    <p className="text-gray-600 mt-2 text-justify">
                    Lắp đặt và quản trị sử dụng hệ thống Camera kĩ thuật số để giám sát giao thông; an ninh của công ty, chung cư, tòa nhà…
                    </p>
                </div>


                {/* 3 */}
                <div className="relative">
                    <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">3</span>
                    <h3 className="text-xl font-bold text-gray-800 ml-1">Giải pháp <br/> bảo mật hệ thống <br/> </h3>
                    <p className="text-gray-600 mt-2 ml-1 text-justify">
                    cung cấp cho các giải pháp bảo mật tối ưu nhất với mọi yêu cầu của khách hàng.
                    </p>
                </div>

                {/* 4 */}
                <div className="relative">
                    <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">4</span>
                    <h3 className="text-xl font-bold text-gray-800 ml-1">Giải pháp hệ thống <br/> máy chủ và lưu trữ</h3>
                    <p className="text-gray-600 mt-2 ml-1 text-justify">
                    tích hợp và xây dựng giải pháp lưu trữ tối ưu cho hệ thống thông tin của khách hàng, 
                    cho phép khách hàng nâng cao khả năng quản lý, tăng hiệu năng truy xuất, đảm bảo tính ổn định, sẵn sàng và độ an toàn của dữ liệu.
                    </p>
                </div>



                {/* 5 */}
                <div className="relative">
                    <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">5</span>
                    <h3 className="text-xl font-bold text-gray-800 ml-1">Hệ thống màn hình lớn</h3>
                    <p className="text-gray-600 mt-2 ml-1 text-justify">
                    Màn hình tấm lớn được ghép thành từ nhiều mô-đun bằng kỹ thuật ghép nối đặc biệt sẽ 
                    trở thành một màn hình lớn duy nhất. Người sử dụng có thể hiển thị các nguồn tín hiệu video ở bất cứ vị trí nào trên màn hình
                    </p>
                </div>

                {/* 6 */}
                <div className="relative">
                    <span className="absolute -left-10 top-0 text-7xl font-bold text-gray-600">6</span>
                    <h3 className="text-xl font-bold text-gray-800 ml-1">Giải pháp hội nghị truyền hình <br/> </h3>
                    <p className="text-gray-600 mt-2 ml-1 text-justify">
                    Hội nghị truyền hình (Video conference) cho phép những người tham dự tại nhiều địa 
                    điểm từ những quốc gia khác nhau có thể nhìn thấy và trao đổi trực tiếp với nhau 
                    qua màn hình tivi như đang họp trong cùng một căn phòng. 
                    </p>
                </div>

                
            
            </div>

            {/* Đối tác toàn diện */}
            <div className="container mx-auto  px-6 py-6 text-center text-4xl md:text-6xl font-extrabold"> 
                    <h1 className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Đối tác toàn diện 
                    </h1>
            </div>
            <div className="container px-[120px] py-[20px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="container relative flex justify-center items-center   ">
                    <a href="http://bmdt.vn/" target="_blank" rel="noopener noreferrer" >
                        <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        src={LOGO_SMART} // Thay bằng ảnh thực tế của bạn
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
                        src={LOGO_TECA} // Thay bằng ảnh thực tế của bạn
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
                        src={LOGO_BINH_MINH} // Thay bằng ảnh thực tế của bạn
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

export default ProfilePage;




