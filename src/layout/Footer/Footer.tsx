import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaYoutube, FaGooglePlusG } from "react-icons/fa";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className="flex flex-col tablet:flex-row justify-center">
        <div className="min-w-[200px]  max-w-[600px] p-[15px]">
          <h2>CÔNG TY GIẢI PHÁP CÔNG NGHỆ V-FAST</h2>
          <img
            className="w-[120px] p-[5px]"
            src="vfast-logo.png"
            alt="v-fast-logo"
          />
          <p>
            V-FAST là một công ty phần mềm có trụ sở chính tại Cầu Giấy - Hà Nội
            chuyên về phát triển ứng dụng đa nền tảng, phần mềm doanh nghiệp,
            AI, IOT, ...
          </p>
        </div>
        <div className=" p-[15px]">
          <h2>ADRESS</h2>
          <p>- Phố Thọ Tháp, Dịch Vọng, Cầu Giấy, Hà Nội</p>
          <p>
            <a href="mailto:contact@vfastsoft.com">
              - Email: contact@vfastsoft.com
            </a>
          </p>
          <p>
            <a href="tel:+84972734861">- Phone: 0972734861</a>
          </p>
          <div className={cx("contact-icon")}>
            <a href="#" className="hover:text-[#3e1cfd]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#c01616]">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#dc2c18]">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
        <div className="p-[15px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0382218035165!2d105.7914558!3d21.0311566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab48d61e409b%3A0x1d8a8a0ed83de8fd!2zUC4gVGjhu40gVGjDoXAsIEThu4tjaCBW4buNbmcsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1657864716796!5m2!1svi!2s"
            width="300"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <p className="text-[#737373] pt-1 italic">All © Copyright</p>
    </footer>
  );
}

export default Footer;
