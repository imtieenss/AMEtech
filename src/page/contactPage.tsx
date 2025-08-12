


import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md"; 

const ContactPage: React.FC = () => {
    return (
        <div className="">
            <div className=" flex flex-col justify-center container mx-auto pt-[150px] min-h-screen ">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-center text-teal-600  mb-[10px] md:mb-[40px]"
                >
                    Liên hệ với chúng tôi
                </motion.h2>
                


                <div className="px-[40px] md:px-[100px] py-2 md:py-10 grid md:grid-cols-2 gap-10 items-center text-xl">
                    {/* Left Content */}
                    <div className=" py-[10px] md:py-[40px] ">
                        <motion.h2 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl text-center md:text-left font-bold mb-6"
                        >AME.TECH LOCATION
                        </motion.h2>

                        {/* lịch làm việc */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-start mb-3"
                        >
                            <FaCalendarAlt className="text-xl mt-1 mr-3" />
                            <div>
                                <p>Monday - Friday</p>
                                <p className="text-sm text-gray-600">7:30 am - 17:00 pm</p>
                            </div>
                        </motion.div>

                        {/* Địa chỉ */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-start mb-3"
                        >
                            <FaMapMarkerAlt className="text-xl mt-1 mr-3" />
                            <div>
                                <p> Số 8 Khu N4 DA nhà ở Xuân Đỉnh, Ngõ 40, Đường Xuân La, Phường Xuân Đỉnh, Hà Nội</p>
                                <p className="text-sm text-gray-600">Address</p>
                            </div>
                        </motion.div>

                        {/* phone */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center mb-3"
                        >
                        <FaPhoneAlt className="text-xl mr-3" />
                        <div>
                            <p>0826611611</p>
                            <p className="text-sm text-gray-600">Phone Number</p>
                        </div>
                        </motion.div>

                        {/* email */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center mb-3"
                        >
                        <MdAttachEmail className="text-2xl mr-3" />
                        <div>
                            <p>Amecompany08@gmail.com</p>
                            <p className="text-sm text-gray-600">Email</p>
                        </div>
                        </motion.div>
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

       
        </div>
        
    );
};

export default ContactPage;
