import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import Overview from "../../components/Overview";
import Brands from "../../components/Brands";
import Solution from "../../components/Solution";
import Services from "../../components/Services";
const cx = classNames.bind(styles);
function Body() {
  return (
    <main className={cx("main")}>
      <Overview />
      <Solution />
      <Brands />
      <Services />
    </main>
  );
}

export default Body;
