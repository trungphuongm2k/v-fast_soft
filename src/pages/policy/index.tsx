import styles from "./Policy.module.scss";
import classNames from "classnames/bind";
import { getPolicy } from "../../api/fetchApi";
import Head from "next/head";
const cx = classNames.bind(styles);

interface Props {
  policyContent: string
}

function Policy(props: Props) {
  const innerHtml = () => {
    const policyContent = props.policyContent as string;
    return { __html: policyContent }
  }
  return (
    <>
      <Head>
        <title>Chính sách</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          id="metaDescription"
          name="description"
          content="Công ty Giải pháp Công nghệ V-FAST cung cấp một loạt các giải pháp công nghệ đáp ứng các nhu cầu cụ thể của khách hàng làm việc tại nhiều tổ chức cũng như các doanh nghiệp kinh doanh."
        ></meta>
        <meta
          property="og:description"
          content="Công ty Giải pháp Công nghệ V-FAST cung cấp một loạt các giải pháp công nghệ đáp ứng các nhu cầu cụ thể của khách hàng làm việc tại nhiều tổ chức cũng như các doanh nghiệp kinh doanh."
        ></meta>
      </Head>
      <main
        className={`w-full laptop:w-[90%] desktop:w-[80%] max-w-[1300px] pt-[100px] pb-[50px] m-auto ${cx(
          "policy"
        )}`}
      >
        <div className="w-full p-[20px]" id="policyContent" dangerouslySetInnerHTML={innerHtml()}>
        </div>
      </main>
    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await getPolicy();
    const policyContent = res.data[0].content;
    return {
      props: { policyContent },
      revalidate: 60,
    }
  } catch (error) {
    return { notFound: true };
  }
}

export default Policy;
