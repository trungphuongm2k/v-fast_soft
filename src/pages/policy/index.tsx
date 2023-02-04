import styles from './Policy.module.scss';
import classNames from 'classnames/bind';
import { getPolicy } from '../../api/fetchApi';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
const cx = classNames.bind(styles);

interface Props {
  policyContent: string;
}

function Policy(props: Props) {
  const innerHtml = () => {
    const policyContent = props.policyContent as string;
    return { __html: policyContent };
  };
  return (
    <>
      <NextSeo
        title="Chính sách"
        description="Công ty Giải pháp Công nghệ V-FAST cung cấp một loạt các giải pháp công nghệ đáp ứng các nhu cầu cụ thể của khách hàng làm việc tại nhiều tổ chức cũng như các doanh nghiệp kinh doanh."
      />
      <main
        className={`w-full laptop:w-[90%] desktop:w-[80%] max-w-[1300px] pt-[100px] pb-[50px] m-auto ${cx(
          'policy'
        )}`}
      >
        <div
          className="w-full p-[20px]"
          id="policyContent"
          dangerouslySetInnerHTML={innerHtml()}
        ></div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await getPolicy();
    const policyContent = res.data[0].content
      ? res.data[0].content
      : {
          policyContent: '',
        };
    return {
      props: { policyContent },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default Policy;
