import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { SmallCard } from "../components/SmallCard";
import { Header } from "./../components/Header";

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();

  return {
    props: {
      exploreData,
    },
  };
}

const Home: NextPage = ({ exploreData }: any) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/** Pull some data from a server - API endpoints*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: any) => (
              <SmallCard
                img={item.img}
                key={item.location}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
