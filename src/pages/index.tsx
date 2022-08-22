import Body from "../layout/Body";
import { useEffect } from "react";
import { getCompany, getPartner, getService, getSolution } from "../api/fetchApi";
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
  partner: [{
    id: string;
    name: string;
    img: string;
    url: string;
  }];
  service: [{
    id: string;
    img: string;
    title: string;
    description: string;
  }];
  solution: {
    id: string;
    title: string;
    description: string;
  }
}
const Home = (props: Props) => {
  useEffect(() => {
    window.onload = () => {
      console.log("load done");
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
    const resCompany = await getCompany();
    const company = resCompany.data[0];

    const resService = await getService();
    const service = resService.data;

    const resSolution = await getSolution();
    const solution = resSolution.data[0];

    const resPartner = await getPartner();
    const partner = resPartner.data;

    return {
      props: { company, partner, service, solution },
      revalidate: 60,
    }
  } catch (error) {
    return { notFound: true };
  }
}
export default Home;
