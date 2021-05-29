import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <div>
      <Head>
        <title>Edwin Tantawi</title>
      </Head>
      <Navbar />
      <div className="h-screen bg-hero bg-center bg-cover xl:bg-contain bg-no-repeat pt-10 flex items-center">
        <div className="container-sm sm:container px-3 -mt-14">
          <div className="flex items-center">
            <span>Hi, I'm</span>
            <span className="inline-block w-10 bg-orange-gradient h-1 ml-3"></span>
          </div>
          <h1 className="font-bold text-black-900 text-5xl sm:text-7xl lg:text-8xl">
            Edwin Tantawi
          </h1>
          <h2 className="font-semibold text-orange text-lg sm:text-3xl lg:text-4xl mt-1 lg:mt-3">
            [ Frontend Web Developer ]
          </h2>
          <p className="max-w-sm text-gray-600 text-sm lg:text-base  mt-4">
            I am a student from Indonesia, who focuses on web development,
            especially frontend web development.
          </p>
          <div className="flex flex-col xs:flex-row mt-8">
            <Link href="/contactme">
              <a className="px-8 py-3 bg-orange-gradient rounded-md font-semibold text-sm text-center text-white mr-0 mb-3 xs:mr-4 xs:mb-0">
                Get in Touch
              </a>
            </Link>
            <Link href="/aboutme">
              <a className="px-8 py-3 bg-white rounded-md font-semibold text-sm text-center  text-black-900 border-2 border-orange">
                Know more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
