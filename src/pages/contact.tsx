import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
function Contact() {
  return (
    <main className="h-screen w-full">
      <div className="relative w-full h-full pt-[100px]">
        <img
          className="w-full h-full object-cover"
          src="/contact.jpg"
          alt="Hợp tác với chúng tôi"
        />
        <div className="absolute top-1/2 left-0 translate-y-[-50%] bg-[#0000007b] w-full h-full p-[20px] flex flex-col justify-center items-center">
          <h1 className="text-[#fff] text-3xl font-semibold py-5">
            Liên hệ với chúng tôi!
          </h1>
          <hr className="w-[100px] border-2" />
          <p className="text-[#fff] p-5 text-xl text-center">
            Nếu bạn đã sẵn sàng tin tưởng giao dự án của mình cho chúng tôi?
            Thật tuyệt vời, hãy gọi điện hoặc mail cho chúng tôi, chúng tôi sẽ
            phản hồi cho bạn nhanh nhất có thể!
          </p>

          <FaPhoneAlt className="text-[#fff] text-4xl  pb-2" />
          <a className="text-[#fff] text-xl pb-2" href="tel:+84972734861">
            0972734861
          </a>
          <FaEnvelope className="text-[#fff] text-4xl  pb-2" />
          <a
            className="text-[#fff] text-xl pb-2"
            href="mailto:contact@vfastsoft.com"
          >
            contact@vfastsoft.com
          </a>
          <FaMapMarkedAlt className="text-[#fff] text-4xl  pb-2" />
          <p className="text-[#fff] text-xl pb-2">
            Phố Trần Cung, Bắc Từ Liêm, Hà Nội
          </p>
          <p className="text-[#fff] text-xl">
            Phố Thọ Tháp, Dịch Vọng, Cầu Giấy, Hà Nội
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
