import classNames from "classnames/bind";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.scss";
const cx = classNames.bind(styles);
function Services() {
  const services = useRef<any>();
  const [ani, setAni] = useState<boolean>(false);
  const handleScroll = () => {
    if (services.current == null) return;
    const vitriManhinh = services.current.getClientRects()[0].top;
    if (vitriManhinh - screen.height < 60 && ani == false) {
      setAni(true);
    }
    if (vitriManhinh - screen.height < 0) {
      document.removeEventListener("scroll", handleScroll);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return function cleanup() {
      console.log("remove event scroll service");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const info = [
    {
      img: "/info/exclusive.png",
      title: "Sản phẩm độc quyền",
      description:
        "Phát triển sản phẩm theo các yêu cầu riêng, đặc biệt và duy nhất.",
    },
    {
      img: "/info/multi-flatform.png",
      title: "Ứng dụng đa nền tảng",
      description:
        "Các sản phẩm trên nền tảng Website, App, Game mobile, thiết bị thông minh - nhúng!",
    },
    {
      img: "/info/erp.png",
      title: "Ứng dụng ERP",
      description: "Quản lý doanh nghiệp theo cách của bạn.",
    },
    {
      img: "/info/ai.png",
      title: "Ứng dụng trí tuệ nhân tạo AI",
      description: "Xử lý hình ảnh, âm thanh, giọng nói!",
    },
  ];
  return (
    <section className={cx("services")}>
      <div
        className={`w-full laptop:m-auto laptop:w-[1000px] ${cx(
          "services-info"
        )}`}
      >
        <img
          className={cx("services-info_img")}
          src="/services.png"
          alt="Dịch vụ của v-fast"
        />
      </div>
      <div
        className={`w-full laptop:m-auto laptop:w-[1000px] desktop:w-[1300px] grid grid-cols-2 laptop:grid-cols-4 gap-[10px] desktop:gap-[50px] ${cx(
          "services-main"
        )}`}
        ref={services}
      >
        {info.map((item, index) => {
          return (
            <div
              key={index}
              className={cx(
                "services-main_item",
                `${ani ? "services-main_ani" : ""}`
              )}
            >
              <img src={item.img} alt="" />
              <div>
                <h3 className="text-lg laptop:text-xl desktop:text-2xl">
                  {item.title}
                </h3>
                <p className="laptop:text-lg ">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`w-full laptop:w-[1000px] desktop:w-[1300px] ${cx(
          "services-connect"
        )}`}
      >
        <h3 className="text-lg laptop:text-xl desktop:text-2xl">
          Nếu bạn đã sẵn sàng tin tưởng giao dự án của mình cho chúng tôi? Thật
          tuyệt vời hãy kết nối ngay với chúng tôi để được sử dụng những dịch vụ
          tốt nhất!
        </h3>
        <Link href="/contact">
          <a className={cx("services-connect_btn")}>LIÊN HỆ VỚI CHÚNG TÔI</a>
        </Link>
      </div>
    </section>
  );
}

export default Services;
