import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { FaAngleDown, FaAlignJustify, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import { getCompany } from "../../api/fetchApi";
const cx = classNames.bind(styles);

function Header() {
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  const [logo, setLogo] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const { pathname } = useRouter();
  const header = useRef<any>();
  useEffect(() => {
    (async () => {
      try {
        const resCompany = await getCompany();
        const company = resCompany.data[0];
        setLogo(company.logo as string);
        setCompanyName(company.name as string);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const positionScroll = window.scrollY;
      const headerElement = header.current;
      if (headerElement != null) {
        if (positionScroll <= 100) {
          headerElement.style.height = "100px";
        } else {
          headerElement.style.height = "65px";
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return function cleanup() {
      console.log("remove event scroll header");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOpenModal = () => {
    setClickMenu(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setClickMenu(false);
    document.body.style.overflow = "auto";
  };
  return (
    <header ref={header} className={cx("header")}>
      <nav className={`${cx("nav")} w-full desktop:w-[1270px]`}>
        <div className={cx("nav-logo")}>
          <Link href="/">
            <a>
              <img
                className={cx("img-logo")}
                src={process.env.HOST_NAME_API + "/" + logo}
                alt="logo vfast"
              />
            </a>
          </Link>
        </div>
        <h1
          className={`${cx(
            "nav-title"
          )}  font-bold hidden tablet:block tablet:text-2xl laptop:text-3xl uppercase `}
        >
          {companyName}
        </h1>
        <div className={`${cx("nav-laptop")} hidden laptop:block`}>
          <ul
            className={`${cx(
              "nav-laptop_list"
            )} text-lg font-bold text-[#6d6d6d]`}
          >
            <li>
              <Link href="/">
                <a style={{ color: `${pathname == "/" ? "blue" : ""}` }}>
                  Trang chủ <FaAngleDown className={cx("nav-laptop_icon")} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a style={{ color: `${pathname == "/contact" ? "blue" : ""}` }}>
                  Liên hệ <FaAngleDown className={cx("nav-laptop_icon")} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/policy">
                <a style={{ color: `${pathname == "/policy" ? "blue" : ""}` }}>
                  Chính sách <FaAngleDown className={cx("nav-laptop_icon")} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${cx("btn-menu")} laptop:hidden`}
          onClick={() => {
            handleOpenModal();
          }}
        >
          <FaAlignJustify className={cx("btn-menu_icon")} />
        </div>
        {true && (
          <div
            className={cx(
              "nav-mobile",
              `${clickMenu ? "nav-mobile_open" : ""}`
            )}
            onClick={(e) => {
              if (e.target != e.currentTarget) return;
              handleCloseModal();
            }}
          >
            <div className={cx("nav-mobile_main")}>
              <FaTimes
                className="float-right text-2xl m-9 mt-11 cursor-pointer"
                onClick={() => {
                  handleCloseModal();
                }}
              />
              <div className={cx("nav-logo_mobile")}>
                <img
                  className={cx("img-logo-mobile")}
                  src="/vfast-logo.png"
                  alt="logo vfast"
                />
              </div>
              <span className="italic text-sm">
                Chúng tôi có những thứ bạn muốn!!!
              </span>
              <ul className={cx("nav-mobile_list")}>
                <li>
                  <Link href="/">
                    <a
                      onClick={() => {
                        handleCloseModal();
                      }}
                    >
                      Trang chủ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      onClick={() => {
                        handleCloseModal();
                      }}
                    >
                      Liên Hệ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/policy">
                    <a
                      onClick={() => {
                        handleCloseModal();
                      }}
                    >
                      Chính sách
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
