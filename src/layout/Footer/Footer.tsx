import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer")}>
      <h1>CÔNG TY GIẢI PHÁP CÔNG NGHỆ V-FAST</h1>
      <img className="w-[120px]" src="logo-vfast.png" alt="v-fast-logo" />
      <div>
        <h3>Địa chỉ:</h3>
        <p>- Phố Trần Cung, Bắc Từ Liêm, Hà Nội</p>
        <p>- Phố Thọ Tháp, Dịch Vọng, Cầu Giấy, Hà Nội</p>
      </div>
    </footer>
  );
}

export default Footer;
