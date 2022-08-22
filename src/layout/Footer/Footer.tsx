import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaYoutube, FaGooglePlusG } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCompany, getContact } from "../../api/fetchApi";
const cx = classNames.bind(styles);

function Footer() {
  const [logo, setLogo] = useState<string>("");
  const [add, setAdd] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const resCompany = await getCompany();
        const resContact = await getContact();
        const company = resCompany.data[0];
        const contact = resContact.data[0];
        setLogo(company.logo);
        setAdd(contact.add);
        setEmail(contact.email);
        setPhone(contact.phone);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <footer className={cx("footer")}>
      <div className="flex flex-col tablet:flex-row justify-center">
        <div className=" p-[15px]">
          <h1>
            <img
              className="w-[120px] py-5"
              src={process.env.HOST_NAME_API + "/" + logo}
              alt="Công ty giải pháp công nghệ v-fast"
            />
          </h1>
          <p>
            - {add}
          </p>
          <p>
            <a href={`mailto:${email}`}>
              - Email: {email}
            </a>
          </p>
          <p>
            <a href={`tel:${phone}`}>- Phone: {phone}</a>
          </p>
          <div className={cx("contact-icon")}>
            <a href="#" className="text-[#3e1cfd]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#c01616]">
              <FaYoutube />
            </a>
            <a href="#" className="text-[#dc2c18]">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
        <div className="p-[15px]  laptop:w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.125488635246!2d105.78844071950445!3d21.030175303408523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe706fbbcb6c30c88!2sThe%20Park%20Home!5e0!3m2!1svi!2s!4v1657869458279!5m2!1svi!2s"
            width="100%"
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
