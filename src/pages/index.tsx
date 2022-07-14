import type { NextPage } from "next";
import Body from "../layout/Body";
import { useEffect, useState } from "react";
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
      <Body />
    </div>
  );
};

export default Home;
