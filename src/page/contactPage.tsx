


// import LOGO from "../assets/images/logo.png"
// import ZALO from "../assets/images/zalosvg.svg"
// import { FaPhone,} from "react-icons/fa"

import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
    return (
        <>
            <div className=" flex flex-col justify-center container mx-auto pt-[150px] ">
                <h2 className="text-4xl font-bold text-center">Liên Hệ</h2>
                
                
                 
                {/*<section id="hero" className="relative container mx-auto px-8 pb-[150px] pt-[0px] md:pt-[80px]">
                    
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-[100%] h-[80%] object-cover -z-10 scale-110 opacity-70"
                        style={{ transform: "scaleX(-1)" }}
                    >
                        <source src="videos/backdrop.mp4" type="video/mp4" />
                    </video>

                    
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-14 mt-[80px] md:mt-0">

                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={LOGO}
                                alt="HomePage_Pic"
                                className="homepage-pic max-w-full"
                                
                            />
                        </div>

                        
                        <div className="w-full lg:w-1/2 flex justify-center">

                            <div className=" flex flex-col items-center justify-center gap-[30px] w-full max-w-md  ">
                                <a
                                    href="tel:0976618962" 
                                    className="flex items-center justify-center bg-green-500 text-white text-lg font-semibold py-3 rounded-full shadow-lg hover:bg-orange-400 transition gap-2 w-[300px] "
                                >
                                    <FaPhone size={24} />
                                    0976618962
                                </a>
                                <a
                                    href="https://zalo.me" target="_blank"
                                    className="flex items-center justify-center bg-blue-50 text-back text-lg font-semibold py-3 rounded-full shadow-lg hover:bg-blue-200 transition gap-4 w-[300px]"
                                >
                                    <img src= {ZALO} alt="Zalo" className="w-8 h-8" />
                                    Zalo
                                </a>
                            </div>
                        </div>


                    </div>
                </section> */}


                <div className="px-[40px] md:px-[100px] py-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="py-[40px]">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">AME.TECH LOCATION</h2>

                    <div className="flex items-start mb-3">
                    <FaCalendarAlt className="text-xl mt-1 mr-3" />
                    <div>
                        <p>Monday - Saturday</p>
                        <p className="text-sm text-gray-600">7:30 am - 17:00 pm</p>
                    </div>
                    </div>

                    <div className="flex items-start mb-3">
                    <FaMapMarkerAlt className="text-xl mt-1 mr-3" />
                    <div>
                        <p> Số 8 Khu N4 DA nhà ở Xuân Đỉnh, Ngõ 40, Đường Xuân La,<br/> Phường Xuân Tảo, Quận Bắc Từ Liêm, Hà Nội</p>
                        <p className="text-sm text-gray-600">Address</p>
                    </div>
                    </div>

                    <div className="flex items-center mb-3">
                    <FaPhoneAlt className="text-xl mr-3" />
                    <div>
                        <p>0976618962</p>
                        <p className="text-sm text-gray-600">Phone Number</p>
                    </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                    title="ame-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.829479073351!2d105.8056209759391!3d21.03929778736114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2e2f505a35%3A0x629de1cf4c758ee7!2zNDAgWHXDom4gTGE!5e0!3m2!1svi!2s!4v1712742084042!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>



            </div>

       
        </>
        
    );
};

export default ContactPage;
