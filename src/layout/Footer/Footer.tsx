import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer")}>
      <h1>CÔNG TY GIẢI PHÁP CÔNG NGHỆ V-FAST</h1>
      <div>
        <h3>Địa chỉ:</h3>
        <p>- Ngõ 195, Phố Trần Cung, Bắc Từ Liêm, Hà Nội</p>
        <p>- P.701, Số 8, Phố Thọ Tháp, Dịch Vọng, Cầu Giấy, Hà Nội</p>
      </div>
    </footer>
  );
}

export default Footer;
