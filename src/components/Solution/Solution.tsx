import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./Solution.module.scss";
const cx = classNames.bind(styles);
function Solution() {
  const parent = useRef<any>();
  const child = useRef<any>();
  const [ani, setAni] = useState<boolean>(false);
  useEffect(() => {
    function handleScroll(e: any) {
      if (parent.current != null && child.current != null) {
        const vitriManhinh = parent.current.getClientRects()[0].top;
        if (vitriManhinh < 600 && ani == false) {
          setAni(true);
        }

        if (vitriManhinh > 700 || vitriManhinh < -400) return;
        child.current.style.transform = `translateY( -${Math.floor(
          window.scrollY / 3
        )}px )`;
      }
    }
    document.addEventListener("scroll", handleScroll);
    return function cleanup() {
      console.log("remove event scroll");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={cx("solution", `${ani ? "solution-ani" : ""}`)}
      ref={parent}
    >
      <img src="background-tech.jpg" ref={child} alt="v-fast backgroungd" />
      <div className={cx("overlay")}>
        <div className={cx("overlay-main")}>
          <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-semibold text-[#fff] mb-[20px]">
            Chúng tôi có những gì bạn muốn!
          </h2>
          <hr className="w-[130px] h-[5px] bg-white" />
          <p className=" text-[#fff] p-4 w-full tablet:text-lg tablet:w-[600px] laptop:w-[900px] laptop:text-xl">
            Công ty Giải pháp Công nghệ V-FAST cung cấp một loạt các giải pháp
            công nghệ đáp ứng các nhu cầu cụ thể của khách hàng làm việc tại
            nhiều tổ chức cũng như các doanh nghiệp kinh doanh. Nhiệm vụ phát
            triển phần mềm của chúng tôi bao gồm: Phát triển sản phẩm độc quyền,
            Hệ thống ERP, Website, App và Game mobile, Hệ thống ứng dụng trí tuệ
            nhân tạo AI, Phát triển thiết bị thông minh, thiết bị nhúng ...
          </p>
        </div>
        <Link href="/contact">
          <a className={cx("solution-btn")}>Tìm hiểu kỹ hơn</a>
        </Link>
      </div>
    </section>
  );
}

export default Solution;
