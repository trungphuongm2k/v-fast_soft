import classNames from "classnames/bind";
import styles from "./Brands.module.scss";
const cx = classNames.bind(styles);
function Brands() {
  const partner = [
    {
      img: "sunny-media",
      url: "https://sunnymedia.net/",
    },
    {
      img: "3f-fruits",
      url: "https://3ffruits.com",
    },
    {
      img: "anicon",
      url: "https://anicon.asia/",
    },
    {
      img: "lihaco-brand",
      url: "https://lihaco.com.vn/",
    },
    {
      img: "m1-viettel",
      url: "http://m1.viettel.com.vn/",
    },
    {
      img: "mercury-media",
      url: "https://mercuryentertainment.net/",
    },
    {
      img: "sgm-music",
      url: "https://sgm-music.com/",
    },

    {
      img: "viet-stem",
      url: "https://vietstem.com/",
    },
  ];
  return (
    <section className={`tablet:h-[300px] ${cx("brands")}`}>
      <div
        className={`laptop:w-[900px] desktop:w-[1100px] ${cx(
          "brands-container"
        )}`}
      >
        <div className=" p-[10px] laptop:px-[50px]">
          <h2 className="text-[#3d5067] mt-2 laptop:text-xl font-bold mb-2">
            Đối tác của chúng tôi
          </h2>
          <div className="grid grid-cols-2 tablet:grid-cols-4  gap-[3px] ">
            {partner.map((p, index) => {
              return (
                <div className="h-[100px] laptop:h-[120px]" key={index}>
                  <a href={p.url} target="blank">
                    <img
                      className="w-full h-full "
                      src={`/partner/${p.img}.jpg`}
                      alt={p.img}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
