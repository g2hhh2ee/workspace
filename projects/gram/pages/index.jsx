import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
};

export default Home;
