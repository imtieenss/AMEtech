

import TECH_CONSULTING_1 from "../assets/images/logoService/1_Technology_consulting.png"
import RESEARCH_2 from "../assets/images/logoService/2_Research_and_development.png"
import PROJECT_3 from "../assets/images/logoService/3_project_management.png"
import TEST_4 from "../assets/images/logoService/4_Test.png"
import MAINTENANCE_5 from "../assets/images/logoService/5_maintenance_and_operation.png"
import SECURITY_6 from "../assets/images/logoService/6_security.png"


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
        title: "Xây dựng, vận hành <br/> và bảo trì sản phẩm",
        icon: MAINTENANCE_5,
    },
    {
        id:"6",
        title: "Đảm bảo an toàn bảo mật",
        icon: SECURITY_6,
    },
];





const ProducePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto px-[120px] " >
                {softData.map((soft,id) => (
                    <div key={id} className=" flex flex-col  items-center  rounded-lg   h-[200px] bg-amber-300 ">
                        <img
                            src={soft.icon}
                            alt="soft.icon"
                            className=" flex justify_center items-center w-[120px] "
                        />
                        <h3 className="text-lg font-semibold mt-5">{soft.title}</h3>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProducePage;
