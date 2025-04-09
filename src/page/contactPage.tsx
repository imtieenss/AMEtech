
//const images = import.meta.glob("../assets/images/logoHome/logo*.png", { eager: true });

import LOGO from "../assets/images/logo.png"
import ZALO from "../assets/images/zalosvg.svg"
import { FaPhone,} from "react-icons/fa"

const ContactPage: React.FC = () => {
    return (
        <>
            <div className=" flex flex-col justify-center container mx-auto  px-[120px] pt-[150px] ">
                <h2 className="text-4xl font-bold">Liên hệ</h2>
                
                

                <section id="hero" className="relative container mx-auto px-8 pb-[150px] pt-[0px] md:pt-[80px]">
                    {/* Video Background */}
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
                </section>


            </div>

       
        </>
        
    );
};

export default ContactPage;
