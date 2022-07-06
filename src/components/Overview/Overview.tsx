import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { FaCheck } from "react-icons/fa";
import styles from "./Overview.module.scss";
const cx = classNames.bind(styles);
function Overview() {
  const img = useRef<any>();
  const [ani, setAni] = useState<boolean>(false);
  useEffect(() => {
    setAni(true);
    function handleMouseMove(e: MouseEvent) {
      console.log("mousemove");
      if (img.current != null) {
        img.current.style.transform = `translate(${(10 * e.clientX) / 1e3}px, ${
          (10 * e.clientY) / 1e3
        }px)`;
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    return function cleanup() {
      console.log("remove event mousemove");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section
      className={`laptop:grid grid-cols-2 ${cx(
        "overview",
        `${ani ? "overview-ani" : ""}`
      )}`}
    >
      <div className={cx("overview-left")}>
        <div
          className={`m-auto p-[20px] laptop:float-right w-full tablet:w-[600px] laptop:w-[520px] laptop:pt-[100px] ${cx(
            "overview-left_main"
          )}`}
        >
          <h1 className="text-[#fff] text-3xl laptop:text-4xl desktop:text-5xl leading-[30px] laptop:leading-[50px] font-bold mb-[20px]">
            Phát triển ứng dụng theo cách của bạn
          </h1>
          <p className="text-[#fff] text-base laptop:text-lg desktop:text-xl">
            Công ty giải pháp công nghệ V-Fast sẽ cung cấp cho bạn:
          </p>
          <ul className={cx("overview-left_list")}>
            <li className="text-base laptop:text-lg desktop:text-xl">
              <FaCheck className="text-[#00e4ff] text-base laptop:text-lg desktop:text-xl mr-3" />
              Đội ngũ thiết kế chuyên nghiệp, tận tình
            </li>
            <li className="text-base laptop:text-lg desktop:text-xl">
              <FaCheck className="text-[#00e4ff] text-base laptop:text-lg desktop:text-xl mr-3" />
              Sự tận tụy với khách hàng
            </li>
            <li className="text-base laptop:text-lg desktop:text-xl">
              <FaCheck className="text-[#00e4ff] text-base laptop:text-lg desktop:text-xl mr-3" />
              Giải pháp công nghệ với chất lượng tối ưu
            </li>
          </ul>
          <Link href="/contact">
            <a className={cx("overview-left_btn")}>LIÊN HỆ VỚI CHÚNG TÔI</a>
          </Link>
          <p className="text-[#fff] text-sm laptop:text-base desktop:text-lg mt-5">
            Chúng tôi cam kết đem đến cho khách hàng dịch vụ với chất lượng tốt
            nhất để xây dựng hình ảnh kinh doanh, vận hành doanh nghiệp một cách
            hoàn hảo!
          </p>
        </div>
      </div>
      <div className={cx("overview-right")}>
        <img
          className={`m-auto w-[380px] tablet:w-[450px] laptop:w-[700px] laptop:m-0 ${cx(
            "overview-right_img"
          )}`}
          src="banner-vfast.png"
          alt="CÔNG TY GIẢI PHÁP CÔNG NGHỆ V-FAST"
          ref={img}
        />
      </div>
    </section>
  );
}

export default Overview;
