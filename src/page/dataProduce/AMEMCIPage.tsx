import React from 'react';
import { ArrowLeft, Calendar, Server, Cpu, Shield, TrendingUp, Bell, Settings, Network, Smartphone } from 'lucide-react';
import AMEDASHBOARD from '../../assets/images/Produce/ameIOT/dashboardAME.png';
import AMEDieuKhien from '../../assets/images/Produce/ameIOT/AMEDieuKhien.png';
import AMEThongKe from '../../assets/images/Produce/ameIOT/AMEThongKe.png';
import AMEBanDo from '../../assets/images/Produce/ameIOT/AMEBanDo.png';
import AMEGiamSat from '../../assets/images/Produce/ameIOT/AMEGiamSat.png';


const AMEMCIPage: React.FC = () => {
  const navigate = () => window.history.back();

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Giám sát Real-time",
      desc: "Theo dõi áp suất, điện năng, pH, EC, ORP, DO, nhiệt độ, độ ẩm... liên tục 24/7"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Điều khiển từ xa",
      desc: "Bật/tắt, điều chỉnh công suất máy móc qua web/mobile mọi lúc mọi nơi"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Cảnh báo thông minh",
      desc: "AI tự động phát hiện sự cố, gửi cảnh báo qua SMS, Email, App ngay lập tức"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bảo mật đa lớp",
      desc: "Mã hóa dữ liệu, xác thực đa yếu tố, quản lý quyền truy cập theo vai trò"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Tích hợp SCADA",
      desc: "Kết nối ERP, SCADA, AI, Blockchain để tối ưu quy trình sản xuất"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Quản lý đa địa điểm",
      desc: "Điều khiển hàng trăm trạm từ xa trên một nền tảng cloud duy nhất"
    }
  ];

  const techs = [
    { name: "React.js", color: "bg-blue-100 text-blue-700" },
    { name: "Node.js", color: "bg-green-100 text-green-700" },
    { name: "C#", color: "bg-purple-100 text-purple-700" },
    { name: "Python", color: "bg-yellow-100 text-yellow-700" },
    { name: "React Native", color: "bg-cyan-100 text-cyan-700" },
    { name: "IoT", color: "bg-orange-100 text-orange-700" },
    { name: "AI/ML", color: "bg-pink-100 text-pink-700" },
    { name: "SCADA", color: "bg-indigo-100 text-indigo-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={navigate}
          className="flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-all hover:translate-x-[-4px] duration-300"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          <span className="font-semibold">Quay lại danh sách dự án</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
              IoT CÔNG NGHIỆP 4.0
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AME-MCI 4.0
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nền tảng giám sát và điều khiển thiết bị từ xa
            <br />
            <span className="text-teal-600 font-semibold">tích hợp AI thông minh</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <Calendar className="text-teal-600 mr-3 w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-500">Hoàn thành</p>
                <p className="font-bold text-gray-900">12/2025</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <Cpu className="text-teal-600 mr-3 w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-500">Nhà phát triển</p>
                <p className="font-bold text-gray-900">AME TECH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-8 md:p-16">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <img
                src={AMEDASHBOARD}
                alt="AME-MCI 4.0 Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Giao diện hệ thống
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trải nghiệm giao diện trực quan, hiện đại và dễ sử dụng
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dashboard thống kê */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <img
                  src={AMEThongKe}
                  alt="Dashboard thống kê"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Dashboard Thống kê</h3>
                  <p className="text-sm text-gray-200">Biểu đồ và chỉ số hoạt động real-time</p>
                </div>
              </div>
            </div>

            {/* Menu điều khiển */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                <img
                  src={AMEDieuKhien}
                  alt="Menu điều khiển"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Menu Điều khiển</h3>
                  <p className="text-sm text-gray-200">Giao diện điều khiển thiết bị từ xa</p>
                </div>
              </div>
            </div>

            {/* Giám sát thiết bị */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <img
                  src={AMEGiamSat}
                  alt="Giám sát thiết bị"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Giám sát Thiết bị</h3>
                  <p className="text-sm text-gray-200">Theo dõi trạng thái và thông số thiết bị</p>
                </div>
              </div>
            </div>

            {/* Báo cáo phân tích */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <img
                  src={AMEBanDo}
                  alt="Bản đồ thiết bị"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Bản đồ thiết bị</h3>
                  <p className="text-sm text-gray-200">Xem vị trí và trạng thái thiết bị trên bản đồ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Tổng quan giải pháp
          </h2>
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-teal-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>AME-MCI 4.0</strong> là hệ thống SCADA phân tán điều khiển qua Internet, được phát triển bởi <strong>Công ty TNHH Công nghệ AME</strong>. Giải pháp tích hợp AI để cảnh báo sự cố tự động, dự đoán hỏng hóc và tối ưu công suất thông minh.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center">
                  <Server className="mr-2 w-5 h-5" /> Hệ trung tâm
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Máy chủ VPS làm OPC Server, tiếp nhận và lưu trữ dữ liệu liên tục từ toàn bộ mạng lưới trạm từ xa.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center">
                  <Network className="mr-2 w-5 h-5" /> Mạng lưới trạm
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PLC điều khiển kết nối Internet qua 3G/4G, thu thập dữ liệu từ cảm biến và tủ điện điều khiển.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Tính năng nổi bật
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hệ thống toàn diện với các chức năng mạnh mẽ phục vụ quản lý và vận hành
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-teal-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Lợi ích vượt trội
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center border-2 border-teal-200 hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-bold text-teal-600">30%</span>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Tiết kiệm chi phí</h3>
              <p className="text-gray-700">Giảm chi phí vận hành và bảo trì thiết bị đáng kể</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-bold text-blue-600">50%</span>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Xử lý nhanh hơn</h3>
              <p className="text-gray-700">Giảm thời gian phát hiện và xử lý sự cố hiệu quả</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-bold text-green-600">99.9%</span>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Uptime cao</h3>
              <p className="text-gray-700">Hoạt động ổn định 24/7 không gián đoạn</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Công nghệ sử dụng
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Nền tảng hiện đại với các công nghệ tiên tiến nhất
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((tech, index) => (
              <span
                key={index}
                className={`${tech.color} px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Tính năng nâng cao
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Công nghệ tiên tiến mang lại hiệu suất vượt trội
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Báo cáo & Phân tích */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 rounded-xl p-3 mr-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Báo cáo & Phân tích</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-teal-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Tự động tạo báo cáo theo lịch định kỳ hoặc sự kiện</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-teal-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Xuất báo cáo HTML, RTF, lưu vào SQL/ODBC/DBF</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-teal-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Phân tích xu hướng, dự đoán bảo trì dựa trên AI</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-teal-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Tích hợp với hệ thống báo cáo bên thứ ba</span>
                </li>
              </ul>
            </div>
            
            {/* Bảo mật & Quản trị */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-xl p-3 mr-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bảo mật & Quản trị</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Xác thực đa yếu tố: mật khẩu, vân tay, khuôn mặt</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Phân quyền theo vai trò: Admin, Kỹ thuật viên, Giám sát</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Mã hóa dữ liệu end-to-end, chống tấn công mạng</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 text-xl font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-700 leading-relaxed">Audit log đầy đủ, theo dõi mọi hoạt động</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AMEMCIPage;