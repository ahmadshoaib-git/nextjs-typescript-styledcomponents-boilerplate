import React from "react";
import { HeaderWrapper } from "./header.style";
import Head from "next/head";
const Card: React.FC = () => {
  return (
    <HeaderWrapper>
      <Head>
        <title>NextJS Application</title>
        <meta name="description" content="Latest nextjs application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span>NextJS Application</span>
    </HeaderWrapper>
  );
};

export default Card;
