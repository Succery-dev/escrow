import type { NextPage } from "next";
import Head from "next/head";

import {
  Card,
  Footer,
  IntroSection,
  Navbar,
  ProductDescription,
  UseCases,
} from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QubePay</title>
        <meta name="description" content="Empowering relation between Freelancers and Organizations" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <IntroSection />
      <div>
        <div className=" w-4/5 max-w-[700px] h-[500px] mx-auto bg-black-200 shadow-card mt-20"></div>
      </div>
      <ProductDescription />
      <div id="demo">
        <div className="w-full bg-black-200 pb-20">
          <h1 className="text-primary xs:text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-center py-20">
            How it works
          </h1>
          <div className="bg-white rounded-lg shadow-card w-4/5 max-w-[700px] h-[500px] mx-auto"></div>
        </div>
      </div>
      <UseCases />
      <Footer />
    </div>
  );
};

export default Home;
