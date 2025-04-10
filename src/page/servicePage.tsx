//import LAYER_1 from "../assets/images/logoService/"

import TECH_CONSULTING_1 from "../assets/images/logoService/1_Technology_consulting.png"
import RESEARCH_2 from "../assets/images/logoService/2_Research_and_development.png"
import PROJECT_3 from "../assets/images/logoService/3_project_management.png"
import TEST_4 from "../assets/images/logoService/4_Test.png"
import MAINTENANCE_5 from "../assets/images/logoService/5_maintenance_and_operation.png"
import SECURITY_6 from "../assets/images/logoService/6_security.png"
import MAY_CHU from "../assets/images/logoService/service.png"
import CAM_GIAO_THONG from "../assets/images/logoService/CAM_giao_thong.png"
import CAM_ICON from "../assets/images/logoService/CAM_icon.png"
import CAM_NHA_MAY from "../assets/images/logoService/CAM_nha_may.png"
import MAN_HINH from "../assets/images/logoService/Man_hinh_to.png"
import HOI_NGHI from "../assets/images/logoService/hoi_nghi_truyen_hinh.png"






const ServicePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  " >


            {/* luôn đồng hành cùng khách hàng */}
            <div className="  mx-auto px-[40px] md:px-[170px] pt-[260px] pb-[210px] text-center md:text-left bg-white ">
                <h1 className="text-2xl md:text-5xl text-left font-bold leading-tight ">
                 <span className="bg-gradient-to-r from-green-600 via-red-900 to-orange-600 text-transparent bg-clip-text">
                 Chúng tôi luôn đồng hành cùng<br /> khách hàng 
                 tạo ra những sản phẩm tốt nhất
                </span>
                </h1>

                <p className="mt-4 text-xl md:text-2xl md:w-3/4 text-justify font-normal ">
                Đáp ứng nhu cầu đa dạng của Khách hàng, AME tập trung vào nghiên cứu và phát triển công nghệ, triển khai các dự án cung cấp trang thiết bị 
                và phần mềm với độ bảo mật cao các cơ quan quan trọng của Đảng và Nhà nước như: Cục Tác chiến Bộ Quốc Phòng, Cục Kế hoạch Đầu tư, 
                Binh chủng Đặc công, Tổng cục chính trị, Thư viện Quân đội… Khai thác, viết và triển khai các phần mềm dịch vụ.
                </p>
            </div>

            {/* chuyển đổi số */}
            <div className="container   mx-auto px-[40px] md:px-[120px]  pt-[80px] mb-[100px]">
                <h2 className="text-4xl md:text-6xl text-center font-bold text-black">
                        Cung cấp <br />
                        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                        Dịch vụ chuyển đổi số 
                        </span>
                </h2>
                
                <div  className=" flex flex-col justify-end items-end mt-11">
                    <p className=" mt-4 md:w-4/5  text-xl text-gray-800 text-justify ">
                    Công ty AME là đơn vị tiên phong trong lĩnh vực chuyển đổi số, sở hữu đội ngũ chuyên gia giàu kinh nghiệm 
                    và công nghệ tiên tiến. Với năng lực triển khai các giải pháp số hóa toàn diện, công ty đã khẳng định vị 
                    thế qua nhiều dự án. Chúng tôi cam kết cung cấp các hệ thống thông minh, an toàn và tối ưu, đáp ứng đầy 
                    đủ các yêu cầu khắt khe của khác hàng. Nhờ sự am hiểu sâu sắc về quy trình hành chính công, AME luôn đảm 
                    bảo tiến độ và hiệu quả cao trong từng dự án. Sự kết hợp giữa công nghệ hiện đại và khả năng tùy chỉnh 
                    linh hoạt giúp công ty tạo ra những giải pháp bền vững, thúc đẩy quá trình chuyển đổi số quốc gia.
                    </p>
                </div>


            </div>

            {/* 6 kĩ năng */}
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto px-[120px] " >
                {softData.map((soft,id) => (
                    <div key={id} className=" flex flex-col  items-center  rounded-lg   h-[200px] ">
                        <img
                            src={soft.icon}
                            alt="soft.icon"
                            className=" flex justify_center items-center w-[120px] "
                        />
                        <h3 className="text-lg font-semibold mt-5">{soft.title}</h3>
                    </div>
                ))}
            </div>
            
            {/* máy chủ */}
            <div className=" mx-auto mt-[100px] pb-[90px]   px-[40px] md:px-[190px]   bg-white pt-[70px] ">
                <div className="text-black text-center ">
                    <h2 className="text-5xl md:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                        Hệ thống máy chủ và lưu trữ
                        </span>
                    </h2>
                    <p className="mt-[40px] text-xl text-gray-700 text-justify  ">
                    Dựa trên thiết bị và công nghệ của các đối tác hàng đầu thế giới về lưu trữ như 
                    FUJITSU, DELL, EMC, Netapp, HP...chúng tôi tích hợp và xây dựng giải pháp lưu trữ 
                    tối ưu cho hệ thống thông tin của khách hàng, cho phép khách hàng nâng cao khả năng 
                    quản lý, tăng hiệu năng truy xuất, đảm bảo tính ổn định, sẵn sàng và độ an toàn của dữ liệu.
                    </p>
                </div>

                <div className="flex justify-center mt-[70px]">
                    <img
                        src={MAY_CHU}
                        alt="Digital Services"
                        //className="w-full max-w-lg"
                    />
                </div>

                
            </div>

            {/* CAMERA */}
            <div className="container mt-[80px] text-black text-center   px-[40px] md:px-[120px] ">
                <h2 className="text-4xl md:text-6xl font-bold"> 
                    <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                        Camera giám sát
                    </span>
                </h2>
            </div>

            {/* ẢNH CAM */}
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto px-[90px] mb-[80px] "  >
                {camData.map((cam,id) => (
                    <div key={id} className=" flex flex-col  items-center  rounded-lg   h-[200px]">
                        <img
                            src={cam.icon}
                            alt={cam.icon}
                        />
                        <h3 className="text-lg font-semibold mt-5">{cam.title}</h3>
                    </div>
                ))}
            </div>


            <div className=" text-left  mx-auto mt-[100px] pb-[90px] px-[40px] md:px-[190px] bg-white pt-[70px] ">
                <div className="text-black text-center ">
                    <h2 className="text-5xl md:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                        Màn hình hiển thị tấm lớn
                        </span>
                    </h2>
                    <p className="mt-[40px] text-xl text-gray-700 text-justify  ">
                    Màn hình tấm lớn được ghép thành từ nhiều mô-đun bằng kỹ thuật ghép nối đặc biệt sẽ trở thành một màn hình lớn duy nhất. Người sử dụng có thể hiển thị các nguồn tín hiệu video ở bất cứ vị trí nào trên màn hình. Màn hình lớn có thể hiển thị đồng thời nhiều nguồn hình ảnh khác nhau với các vùng hiển thị có thể điều chỉnh kích thước tùy ý. Có thể thiết kế sẵn một số kịch bản hiển thị tùy ý, dễ dàng thay đổi giao diện hiển thị theo ý muốn. 
                    </p>
                </div>

                <div className="flex justify-center mt-[70px]">
                    <img
                        src={MAN_HINH}
                        alt="Digital Services"
                        //className="w-full max-w-lg"
                    />
                </div>
            </div>


            <div className="container mt-[80px] text-black text-center   px-[40px] md:px-[120px] ">
                <h2 className="text-4xl md:text-6xl font-bold"> 
                    <span className="bg-gradient-to-r from-red-800 to-orange-400 text-transparent bg-clip-text">
                    Hội nghị truyền hình
                    </span>
                </h2>
                <p className="mt-[40px] text-xl text-gray-700 text-justify  ">
                Ngày nay, với sự phát triển nhanh chóng của hạ tầng mạng băng rộng, dịch vụ Hội nghị truyền hình đang dần trở nên phổ biến trên thế giới cũng như ở Việt Nam. Giải pháp hội nghị truyền hình dựa trên công nghệ IP của Tanberd hỗ trợ nhiều giao thức (H.320, H.323, SIP, SCCP) cho phép triển khai hệ thống Hội nghị truyền hình tiên tiến nhưng vẫn tận dụng được cơ sở hạ tầng sẵn có.
                </p>
            </div>
            <div className="flex justify-center mt-[70px]">
                    <img
                        src={HOI_NGHI}
                        alt="HOI_NGHI "
                        //className="w-full max-w-lg"
                    />
                </div>




        </div>
    );
};


const camData = [
    {
        id:"1",
        title: "Hệ thống giám sát giao thông",
        icon: CAM_GIAO_THONG,
    },
    {
        id:"2",
        title: "AIIOT camera",
        icon: CAM_ICON,
        
    },
    {
        id:"3",
        title: "Quản lý an ninh",
        icon: CAM_NHA_MAY,
        
    }, 
];

const softData = [
    {
        id:"1",
        title: "Tư vấn công nghệ",
        icon: TECH_CONSULTING_1,
    },
    {
        id:"2",
        title: "Nghiên cứu và phát triển",
        icon: RESEARCH_2,
        
    },
    {
        id:"3",
        title: "Quản lý dự án",
        icon: PROJECT_3,
        
    }, 
    {
        id:"4",
        title: "Kiểm thử phần mềm",
        icon: TEST_4,
    },
    {
        id:"5",
        title: "Xây dựng, vận hành và bảo trì sản phẩm",
        icon: MAINTENANCE_5,
    },
    {
        id:"6",
        title: "Đảm bảo an toàn bảo mật",
        icon: SECURITY_6,
    },
];






export default ServicePage;







    