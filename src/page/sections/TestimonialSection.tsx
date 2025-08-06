import React from "react";

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
};

const TestimonialCard: React.FC<Testimonial> = ({ name, role, feedback }) => (
  <div className="flex flex-col overflow-hidden bg-white shadow-xl rounded-2xl">
    <div className="flex flex-col justify-between flex-1 px-6 py-8">
      <div className="flex-1">
        {/* ngôi sao */}
        <div className="flex items-center space-x-1  justify-center">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.179c.969 0 1.371 1.24.588 1.81l-3.384 2.457a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.538 1.118l-3.384-2.456a1 1 0 00-1.175 0l-3.384 2.456c-.783.57-1.838-.196-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.046 9.394c-.783-.57-.38-1.81.588-1.81h4.179a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
        </div>
        
        <blockquote className="mt-8">
          <p className="text-2xl font-pj text-gray-900 text-justify ">
            “{feedback}”
          </p>
        </blockquote>
      </div>
      <div className="mt-8">
        <div className="w-full h-px bg-gray-200"></div>
        <div className="flex items-center mt-6">
          <div className="ml-4">
            <p className="text-3xl font-bold text-gray-900 font-pj">{name}</p>
            {/* <p className="mt-0.5 text-sm font-pj text-gray-600">{role}</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Tầm nhìn",
      role: "",
      feedback:
        "Trở thành đơn vị tiên phong trong lĩnh vực công nghệ, luôn đổi mới sáng tạo để mang đến những giải pháp tối ưu, góp phần phát triển xã hội số hiện đại.",
    },
    {
      name: "Sứ mệnh",
      role: "",
      feedback:
        "Cung cấp các sản phẩm và dịch vụ công nghệ chất lượng cao, lấy khách hàng làm trung tâm, đồng hành cùng đối tác trong hành trình chuyển đổi số bền vững.",
    },
    {
      name: "Giá trị cốt lõi",
      role: "",
      feedback:
        "Chính trực, sáng tạo, tận tâm và hợp tác là nền tảng để chúng tôi phát triển bền vững, xây dựng niềm tin với khách hàng và cộng đồng.",
    },
    {
      name: "Triết lý kinh doanh",
      role: "",
      feedback:
        "Lấy con người làm gốc, lấy công nghệ làm nền tảng và đặt giá trị cộng đồng lên hàng đầu trong mọi hoạt động kinh doanh và phát triển.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Dẫn lối bởi trí tuệ, kiến tạo bằng tri thức
            </h2>
            
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
