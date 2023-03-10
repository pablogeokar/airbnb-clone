import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { LargeCard } from "../components/LargeCard";
import { MediumCard } from "../components/MediumCard";
import { SmallCard } from "../components/SmallCard";
import { Header } from "./../components/Header";

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();

  const res1 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = await res1.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

const Home: NextPage = ({ exploreData, cardsData }: any) => {
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

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item: any) => (
              <MediumCard key={item.img} title={item.title} img={item.img} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          buttonText="Get Inspired"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
