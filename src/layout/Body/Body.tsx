import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import Overview from "../../components/Overview";
import Brands from "../../components/Brands";
import Solution from "../../components/Solution";
import Services from "../../components/Services";
import { Props } from "../../pages/index";
const cx = classNames.bind(styles);

function Body(props: Props) {
  return (
    <main className={cx("main")}>
      <Overview company={props.company} />
      <Services service={props.service} />
      <Solution solution={props.solution} />
      <Brands partner={props.partner} />
    </main>
  );
}

export default Body;
