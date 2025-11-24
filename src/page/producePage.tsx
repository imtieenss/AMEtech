//==============================================================================
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BHXH from "../assets/images/Produce/BHXH.png";
import BCDC from "../assets/images/Produce/Binh_chủng_đặc_công.jpg";
import THADS from "../assets/images/Produce/Thi_hành_án_DS.jpg";
import QLTT from "../assets/images/Produce/Quản_lý_tư_tưởng.jpg";
import VBDT from "../assets/images/Produce/van_ban_dien_tu.png";
import CTC from "../assets/images/Produce/Cuc_tai_chinh.png";
import AMEMCI from "../assets/images/Produce/AMEMCI.png";
import { motion } from "framer-motion";

// tỉ lệ ảnh là 4:3

const projects = [
   {
    id: "ame-mci-4.0",
    title: "Phần mềm quản lý giám sát và điều khiển thiết bị từ xa AME-MCI 4.0",
    date: "15/12/2024",
    image: AMEMCI,  
  },
  {
    id: "van-ban-dien-tu",
    title: "Phần mềm chuyển đổi văn bản điện tử, Kho lưu trữ tài liệu",
    date: "01/06/2025",
    image: VBDT,
  },
  {
    id: "co-so-du-lieu-ke-hoach-dau-tu", 
    title: "Phần mềm hệ thống cơ sở dữ liệu ngành kế hoạch và đầu tư",
    date: "24/05/2025",
    image: CTC,
  },
  {
    id: "quan-ly-chi-phi-bhyt",
    title: "Phần mềm hỗ trợ quản lý và kê khai chi phí khám chữa bệnh BHYT",
    date: "19/01/2025",
    image: BHXH,
  },
  {
    id: "chi-huy-dieu-hanh-dac-cong",
    title: "Phần mềm phục vụ công tác chỉ huy điều hành tại Binh Chủng Đăc Công",
    date: "08/12/2024",
    image: BCDC,
  },
  {
    id: "quan-ly-thi-hanh-an-dan-su",
    title: "Phần mềm quản lý CSDL thi hành án dân sự trong Quân đội",
    date: "25/10/2024",
    image: THADS,
  },
  {
    id: "quan-ly-tu-tuong-bo-doi",
    title: "Phần mềm quản lý tư tưởng Bộ Đội",
    date: "01/10/2024",
    image: QLTT,
  },
];

const ProducePage: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/producePage/${projectId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-[120px]">
      <div className="container mt-[80px] text-black text-center px-[40px] md:px-[120px] ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          <span className="bg-teal-600 text-transparent bg-clip-text font-sans">
            DỰ ÁN TIÊU BIỂU
          </span>
        </motion.h2>
      </div>

      <div className="container px-[40px] md:px-[150px] grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mt-[100px]">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
          >
            <motion.div
              className="aspect-[4/3] overflow-hidden shadow-md"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
              />
            </motion.div>

            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <div className="flex items-center text-[#91ff00ae] mt-2 mb-[50px]">
              <FaCalendarAlt className="mr-2 text-black" />
              <span className="text-black">{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProducePage;
