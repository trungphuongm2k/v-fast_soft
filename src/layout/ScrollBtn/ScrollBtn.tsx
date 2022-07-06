import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
function ScrollBtn() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className=" w-[50px] h-[50px] fixed  bottom-[50px] right-[50px] bg-[#b2ddfaaf] hover:bg-[#96ccf0af] rounded-full flex flex-col items-center justify-center"
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <FaChevronUp className="text-[#1143a7] text-xl" />
    </button>
  );
}

export default ScrollBtn;
