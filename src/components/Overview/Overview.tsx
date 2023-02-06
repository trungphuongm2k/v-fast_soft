import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';
import styles from './Overview.module.scss';
const cx = classNames.bind(styles);
interface Props {
  company: {
    id: string;
    name: string;
    logo: string;
    motto: string;
    mottotitle: string;
    mottolist: [string];
    description: string;
  };
}

function Overview(props: Props) {
  const img = useRef<any>();
  const [ani, setAni] = useState<boolean>(false);
  useEffect(() => {
    setAni(true);
    function handleMouseMove(e: MouseEvent) {
      if (img.current != null && window.scrollY < 700) {
        console.log('mousemove');
        img.current.style.transform = `translate(${(10 * e.clientX) / 1e3}px, ${
          (10 * e.clientY) / 1e3
        }px)`;
      }
    }
    document.addEventListener('mousemove', handleMouseMove);
    return function cleanup() {
      console.log('remove event mousemove');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section
      className={`laptop:grid grid-cols-2 ${cx(
        'overview',
        `${ani ? 'overview-ani' : ''}`
      )}`}
    >
      <div className={cx('overview-left')}>
        <div
          className={`m-auto p-[20px] laptop:float-right w-full tablet:w-[600px] laptop:w-[520px] laptop:pt-[100px] ${cx(
            'overview-left_main'
          )}`}
        >
          <h1 className="text-[#fff] text-3xl laptop:text-4xl desktop:text-5xl leading-[30px] laptop:leading-[50px] font-bold mb-[20px]">
            {props.company.motto}
          </h1>
          <p className="text-[#fff] text-base laptop:text-lg desktop:text-xl">
            {props.company.mottotitle}
          </p>
          <ul className={cx('overview-left_list')}>
            {props.company.mottolist.map((item, index) => {
              return (
                <li
                  className="text-base laptop:text-lg desktop:text-xl"
                  key={index}
                >
                  <FaCheck className="text-[#00e4ff] text-base laptop:text-lg desktop:text-xl mr-3" />
                  {item}
                </li>
              );
            })}
          </ul>
          <Link className={cx('overview-left_btn')} href="/contact">
            LIÊN HỆ VỚI CHÚNG TÔI
          </Link>
          <p className="text-[#fff] text-sm laptop:text-base desktop:text-lg mt-5">
            {props.company.description}
          </p>
        </div>
      </div>
      <div className={cx('overview-right')}>
        <img
          className={`m-auto w-[380px] tablet:w-[450px] laptop:w-[700px] laptop:m-0 ${cx(
            'overview-right_img'
          )}`}
          src="/banner-vfast.png"
          alt="CÔNG TY GIẢI PHÁP CÔNG NGHỆ V-FAST"
          ref={img}
          // width={800}
          // height={800}
        />
      </div>
    </section>
  );
}

export default Overview;
