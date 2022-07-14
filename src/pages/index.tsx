import type { NextPage } from "next";
import Head from "next/head";
import Body from "../layout/Body";
import { useEffect, useState } from "react";
import Footer from "../layout/Footer";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    window.onload = () => {
      setLoading(false);
      console.log("load done");
    };
  }, []);
  return (
    <div>
      <Head>
        <title>V-FAST TECH CO.,LTD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body />
    </div>
  );
};

export default Home;
