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
        <div className="container-sm sm:container px-3 -mt-14 mx-auto text-center md:text-left">
          <div className="flex">
            <span className="flex items-center mx-auto md:mx-0">
              Hi, I'm
              <span className="inline-block w-6 md:w-10 bg-orange-gradient h-1 ml-2"></span>
            </span>
          </div>
          <h1 className="font-bold text-black-900 text-5xl sm:text-7xl lg:text-8xl">
            Edwin Tantawi
          </h1>
          <h2 className="font-semibold text-orange text-lg sm:text-3xl lg:text-4xl mt-1 lg:mt-3">
            [ Frontend Web Developer ]
          </h2>
          <p className="max-w-[280px] md:max-w-sm text-gray-600 text-xs lg:text-base mt-4 mx-auto md:mx-0">
            I am a student from Indonesia, who focuses on web development,
            especially frontend web development.
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <Link href="/contactme">
              <a className="px-12 py-4 bg-orange-gradient rounded-md font-semibold text-xs md:text-sm text-center text-white mr-0 mb-3 md:mr-2 md:mb-0 tracking-wider">
                Get in Touch
              </a>
            </Link>
            <Link href="/aboutme">
              <a className="px-12 py-4 rounded-md font-semibold text-xs md:text-sm text-center border-collapse text-black-900 underline tracking-wider">
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
