const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">


            <div className="  container mx-auto px-[120px] py-[60px]  flex flex-row gap-x-60  ">
                
                {/* Thông tin công ty| grid grid-cols-1 md:grid-cols-2  ở trên*/}
                <div className="text-left   w-2/5 ">
                    {/* <img src="logo.png" alt="Fidel Logistics" className="h-12 mb-4" /> */}
                    <h3 className="font-bold text-lg">VỀ CHÚNG TÔI </h3>
                    <p className="mt-2"><strong>CÔNG TY TNHH CÔNG NGHỆ AME</strong></p>
                    <p className="mt-2"><strong>Địa chỉ:</strong> Số 8 Khu N4 DA nhà ở Xuân Đỉnh, Ngõ 40, Đường Xuân La, Phường Xuân Tảo, Quận Bắc Từ Liêm, Hà Nội </p>
                    <p className="mt-2"><strong>Điện thoại:</strong> 0976618962</p>
                    <p className="mt-2"><strong>Email:</strong> Amecompany08@gmail.com</p>
                    <p className="mt-2"><strong>Mã số doanh nghiệp:</strong> 0110846518</p>
                </div>
                
                {/* Chính sách pháp lý pl-[200px] */}
                <div className="text-left " >
                    <h3 className="font-bold text-lg">CHÍNH SÁCH PHÁP LÝ</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-white " >&gt; Chính sách bảo mật</a></li>
                        <li><a href="#" className="text-white " >&gt; Chính sách bảo hành </a></li>
                        <li><a href="#" className="text-white " >&gt; Chính sách vận chuyển</a></li>
                        <li><a href="#" className="text-white " >&gt; Chính sách đổi hàng</a></li>
                        <li><a href="#" className="text-white " >&gt; Quy định thanh toán</a></li>
                    </ul>
                </div>



                
            </div>

            {/* test */}

    



                {/* end */}

            
            <p>AME TECHNOLOGY COMPANY LIMITED.</p>
        </footer>
    );
};

export default Footer;
