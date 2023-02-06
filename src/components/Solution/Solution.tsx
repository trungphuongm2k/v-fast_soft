import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Solution.module.scss';
const cx = classNames.bind(styles);
interface Props {
  solution: {
    id: string;
    title: string;
    description: string;
  };
}
function Solution(props: Props) {
  const parent = useRef<any>();
  const child = useRef<any>();
  const [ani, setAni] = useState<boolean>(false);
  useEffect(() => {
    function handleScroll(e: any) {
      if (parent.current != null && child.current != null) {
        const vitriManhinh = parent.current.getClientRects()[0].top;
        if (vitriManhinh < 600 && ani == false) {
          setAni(true);
        }
        if (vitriManhinh > screen.height || vitriManhinh < -400) return;
        child.current.style.transform = `translateY( -${Math.floor(
          window.scrollY / 3 - 200
        )}px )`;
      }
    }
    document.addEventListener('scroll', handleScroll);
    return function cleanup() {
      console.log('remove event scroll solution');
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section
      className={cx('solution', `${ani ? 'solution-ani' : ''}`)}
      ref={parent}
    >
      <img
        src="/background-tech.jpg"
        ref={child}
        alt="v-fast backgroungd"
        // width={800}
        // height={800}
      />
      <div className={cx('overlay')}>
        <div className={cx('overlay-main')}>
          <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-semibold text-[#fff] mb-[20px]">
            {props.solution.title}
          </h2>
          <hr className="w-[130px] h-[5px] bg-white" />
          <p className=" text-[#fff] p-4 w-full tablet:text-lg tablet:w-[600px] laptop:w-[900px] laptop:text-xl">
            {props.solution.description}
          </p>
        </div>
        <Link href="/contact" className={cx('solution-btn')}>
          Tìm hiểu kỹ hơn
        </Link>
      </div>
    </section>
  );
}

export default Solution;
