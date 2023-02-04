import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { getContact } from '../api/fetchApi';
interface Props {
  contact: {
    id: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    add: string;
  };
}

function Contact(props: Props) {
  return (
    <>
      <NextSeo
        title="Liên hệ"
        description="Công ty Giải pháp Công nghệ V-FAST cung cấp một loạt các giải pháp công nghệ đáp ứng các nhu cầu cụ thể của khách hàng làm việc tại nhiều tổ chức cũng như các doanh nghiệp kinh doanh."
      />
      <main className="h-screen w-full">
        <div className="relative w-full h-full pt-[100px]">
          {/* // eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src="/contact.jpg"
            alt="Hợp tác với chúng tôi"
          />
          <div className="absolute top-1/2 left-0 translate-y-[-50%] bg-[#0000007b] w-full h-full p-[20px] flex flex-col justify-center items-center">
            <h1 className="text-[#fff] text-3xl font-semibold py-5">
              {props.contact.title}
            </h1>
            <hr className="w-[100px] border-2" />
            <p className="text-[#fff] p-5 text-xl text-center">
              {props.contact.description}
            </p>

            <FaPhoneAlt className="text-[#fff] text-4xl  pb-2" />
            <a
              className="text-[#fff] text-xl pb-2"
              href={`tel:${props.contact.phone}`}
            >
              {props.contact.phone}
            </a>
            <FaEnvelope className="text-[#fff] text-4xl  pb-2" />
            <a
              className="text-[#fff] text-xl pb-2"
              href={`mailto:${props.contact.email}`}
            >
              {props.contact.email}
            </a>
            <FaMapMarkedAlt className="text-[#fff] text-4xl  pb-2" />
            <p className="text-[#fff] text-xl pb-2">{props.contact.add}</p>
          </div>
        </div>
      </main>
    </>
  );
}
export async function getStaticProps() {
  try {
    const resContact = await getContact();
    const contact = resContact.data[0];

    return {
      props: { contact },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
}
export default Contact;
