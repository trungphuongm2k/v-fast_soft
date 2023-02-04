import Body from '../layout/Body';
import { useEffect } from 'react';
import {
  getCompany,
  getPartner,
  getService,
  getSolution,
} from '../api/fetchApi';
export interface Props {
  company: {
    id: string;
    name: string;
    logo: string;
    motto: string;
    mottotitle: string;
    mottolist: [string];
    description: string;
  };
  partner: [
    {
      id: string;
      name: string;
      img: string;
      url: string;
    }
  ];
  service: [
    {
      id: string;
      img: string;
      title: string;
      description: string;
    }
  ];
  solution: {
    id: string;
    title: string;
    description: string;
  };
}
const Home = (props: Props) => {
  useEffect(() => {
    window.onload = () => {
      console.log('load done');
    };
  }, []);
  return (
    <div>
      <Body
        company={props.company}
        partner={props.partner}
        service={props.service}
        solution={props.solution}
      />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const [resCompany, resService, resSolution, resPartner] = await Promise.all(
      [getCompany(), getService(), getSolution(), getPartner()]
    );
    // const resCompany = await getCompany();
    const company = resCompany.data[0]
      ? resCompany.data[0]
      : {
          id: 1,
          name: 'string',
          logo: 'vfast-logo-full-1669569213044.png',
          motto: 'Phát triển ứng dụng theo cách của bạn',
          mottotitle: 'Công ty giải pháp công nghệ V-Fast sẽ cung cấp cho bạn:',
          mottolist: [
            'Đội ngũ thiết kế chuyên nghiệp, tận tình',
            'Sự tận tụy với khách hàng',
            'Giải pháp công nghệ với chất lượng tối ',
          ],
          description:
            'Chúng tôi cam kết đem đến cho khách hàng dịch vụ với chất lượng tốt nhất để xây dựng hình ảnh kinh doanh, vận hành doanh nghiệp một cách hoàn hảo!',
        };

    // const resService = await getService();
    const service =
      resService.data || resService.data.length === 0
        ? resService.data
        : [
            {
              id: '630234b0e579d51bf0077081',
              img: 'exclusive-1669569266671.png',
              title: 'Sản phẩm độc quyền',
              description:
                'Phát triển sản phẩm theo các yêu cầu riêng, đặc biệt và duy nhất.',
            },
            {
              id: '630234d5e579d57dba077082',
              img: 'multi-flatform-1669569350080.png',
              title: 'Ứng dụng đa nền tảng',
              description:
                'Các sản phẩm trên nền tảng Website, App, Game mobile, thiết bị thông minh - nhúng!',
            },
            {
              id: '630234f2e579d53861077083',
              img: 'erp-1669569376483.png',
              title: 'Ứng dụng ERP',
              description: 'Quản lý doanh nghiệp theo cách của bạn.',
            },
            {
              id: '6302350be579d59fa1077084',
              img: 'ai-1669569394214.png',
              title: 'Ứng dụng trí tuệ nhân tạo AI',
              description: 'Xử lý hình ảnh, âm thanh, giọng nói!',
            },
          ];

    // const resSolution = await getSolution();
    const solution = resSolution.data[0]
      ? resSolution.data[0]
      : {
          id: '6301a97ce579d5662a07707d',
          title: 'Chúng tôi có những gì bạn muốn!',
          description:
            'Công ty Giải pháp Công nghệ V-FAST cung cấp một loạt các giải pháp công nghệ đáp ứng các nhu cầu cụ thể của khách hàng làm việc tại nhiều tổ chức cũng như các doanh nghiệp kinh doanh. Nhiệm vụ phát triển phần mềm của chúng tôi bao gồm: Phát triển sản phẩm độc quyền, Hệ thống ERP, Website, App và Game mobile, Hệ thống ứng dụng trí tuệ nhân tạo AI, Phát triển thiết bị thông minh, thiết bị nhúng ...',
        };

    // const resPartner = await getPartner();
    const partner =
      resPartner.data || resPartner.data.length === 0
        ? resPartner.data
        : [
            {
              id: '630235b8e579d5f5b4077085',
              name: 'sunny media',
              img: 'sunny-media-1669569444874.jpeg',
              url: 'https://sunnymedia.net/',
            },
            {
              id: '63023646e579d551c5077087',
              name: 'sgm music',
              img: 'sgm-music-1669569464101.jpeg',
              url: 'https://sgm-music.com/',
            },
            {
              id: '6302366ae579d53f3d077088',
              name: 'vietstem',
              img: 'viet-stem-1669569483880.jpeg',
              url: 'https://vietstem.com/',
            },
            {
              id: '6302368be579d50f06077089',
              name: 'vnpt',
              img: 'vnpt-1669569524891.jpeg',
              url: 'https://vnpt.com.vn/',
            },
            {
              id: '630236c3e579d5d19f07708b',
              name: 'lihaco',
              img: 'lihaco-brand-1669569539052.jpeg',
              url: 'https://lihaco.com.vn/',
            },
            {
              id: '630236dbe579d5768e07708c',
              name: 'anicon',
              img: 'anicon-1669569557909.jpeg',
              url: 'https://anicon.asia/',
            },
            {
              id: '635aafebd168f51afb570565',
              name: 'CCS Gia Huy',
              img: 'css-giahuy-1669569567338.jpeg',
              url: 'https://ccsgiahuy.com/',
            },
            {
              id: '635ab288d168f50ed3570568',
              name: 'Nam Sao English',
              img: 'namsao-1669569575167.jpeg',
              url: 'http://www.anhngunamsao.edu.vn/',
            },
          ];

    return {
      props: { company, partner, service, solution },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
}
export default Home;
