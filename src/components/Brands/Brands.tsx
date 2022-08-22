import classNames from "classnames/bind";
import styles from "./Brands.module.scss";
const cx = classNames.bind(styles);
interface Props {
  partner: [{
    id: string;
    name: string;
    img: string;
    url: string;
  }]
}

function Brands(props: Props) {
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
            {props.partner.map((p) => {
              return (
                <div className="h-[100px] laptop:h-[120px]" key={p.id}>
                  <a href={p.url} target="blank">
                    <img
                      className="w-full h-full "
                      src={process.env.HOST_NAME_API + "/" + p.img}
                      alt={p.name}
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
