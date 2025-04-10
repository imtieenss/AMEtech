const Footer: React.FC = () => {
    return (
        <footer className="  bg-gray-800 text-white text-center  mt-8">


            <div className="   mx-auto px-[40px] md:pl-[160px] pr-[50px]  grid grid-cols-1 md:grid-cols-3  gap-x-  ">
                
                {/* Thông tin công ty| grid grid-cols-1 md:grid-cols-2  ở trên  flex flex-row gap-x-60         */}
                <div className="text-left py-[60px]  ">
                    
                    <h3 className="font-bold text-lg">VỀ CHÚNG TÔI </h3>
                    <p className="mt-2"><strong>CÔNG TY TNHH CÔNG NGHỆ AME</strong></p>
                    <p className="mt-2"><strong>Địa chỉ:</strong> Số 8 Khu N4 DA nhà ở Xuân Đỉnh, Ngõ 40, Đường Xuân La, Phường Xuân Tảo, Quận Bắc Từ Liêm, Hà Nội </p>
                    <p className="mt-2"><strong>Điện thoại:</strong> 0976618962</p>
                    <p className="mt-2"><strong>Email:</strong> Amecompany08@gmail.com</p>
                    <p className="mt-2"><strong>Mã số doanh nghiệp:</strong> 0110846518</p>
                </div>
                
                {/* Chính sách pháp lý  */}
                <div className="text-left py-[60px]   pl-0 md:pl-[70px] "  >
                    <h3 className="font-bold text-lg">CHÍNH SÁCH PHÁP LÝ</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-white " >&gt; Chính sách bảo mật</a></li>
                        <li><a href="#" className="text-white " >&gt; Chính sách bảo hành </a></li>
                        <li><a href="#" className="text-white " >&gt; Chính sách vận chuyển</a></li>
                        <li><a href="#" className="text-white " >&gt; Chính sách đổi hàng</a></li>
                        <li><a href="#" className="text-white " >&gt; Quy định thanh toán</a></li>
                    </ul>
                </div>

                {/* Map */}
                <div className=" map-section mt-[50px] w-70% md:w-100%   shadow-md rounded-lg">
                <div className="gmap-frame pr-[25px] md:pr-[50px]">
                    <iframe 
                        width="100%"     
                        height="250"  
                        src="https://maps.google.com/maps?width=350&amp;height=250&amp;hl=en&amp;q=Ng%C3%B5%2040,%20%C4%90%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20La,%20Ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20T%E1%BA%A3o,%20Qu%E1%BA%ADn%20B%E1%BA%AFc%20T%E1%BB%AB%20Li%C3%AAm,%20H%C3%A0%20N%E1%BB%99i+(AME.TECH)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.gps.ie/collections/drones/"></a>
                    </iframe>
                </div>
            </div>
                
            </div>


            <p className="py-[20px]">AME TECHNOLOGY COMPANY LIMITED.</p>
        </footer>
    );
};

export default Footer;








<iframe width="350" height="250"  scrolling="no"  
    src="https://maps.google.com/maps?width=350&amp;height=250&amp;hl=en&amp;q=Ng%C3%B5%2040,%20%C4%90%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20La,%20Ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20T%E1%BA%A3o,%20Qu%E1%BA%ADn%20B%E1%BA%AFc%20T%E1%BB%AB%20Li%C3%AAm,%20H%C3%A0%20N%E1%BB%99i+(AME.TECH)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    <a href="https://www.gps.ie/collections/drones/">buy drones</a>
</iframe>
