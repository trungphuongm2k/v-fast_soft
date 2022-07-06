import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import Overview from "../../components/Overview";
import Brands from "../../components/Brands";
import Solution from "../../components/Solution";
const cx = classNames.bind(styles);
function Body() {
  return (
    <main className={cx("main")}>
      <Overview />
      <Solution />
      <Brands />
    </main>
  );
}

export default Body;
