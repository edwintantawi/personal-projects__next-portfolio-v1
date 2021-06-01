import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import PageWraper from '../components/PageWraper';
import Section from '../components/Section';

const AboutMe = () => {
  return (
    <PageWraper>
      <PageHead title="Edwin Tantawi | About" />
      <Navbar />
      <main className="flex-grow">
        <Header
          title="About"
          description="Get acquainted further about me, story and biography of my life, so that we get to know each other better"
        />
        <Section className="!pt-0">
          {/* <img
              src="/pic.webp"
              alt=""
              className="rounded-full border-8 border-orange w-40 h-40 mr-16  mb-10"
            /> */}
          <p className="leading-7 md:!leading-8 lg:!leading-10 text-xs md:text-sm lg:text-base text-black-900 mb-5">
            My name is Edwin Tantawi, I am a student at STMIK Mikroskil Medan, I
            live in Tanjung Morawa, Deli Serdang district, North Sumatra,
            Indonesia. My current activity is as a student, and while deepening
            the world of web development, currently focusing on the Web
            Frontend, build a portfolio by working on personal projects,
            studying on several online learning platforms, documentation on the
            internet, and Youtube. for now I'm focusing on learning Webpack and
            React JS technology.
          </p>
          <p className="leading-7 md:!leading-8 lg:!leading-10 text-xs md:text-sm lg:text-base text-black-900">
            My goal now is to master Frontend and Backend and mobile technology
            and become a Fullstack Developer. So that I can build a solution to
            an existing problem easily. Even though it is not easy and it takes
            a long time, I believe I can achieve it if I practice and learn
            continuously. as for Projects i complated at
            <Link href="/project">
              <a className="text-orange font-semibold"> here</a>
            </Link>
            .
          </p>
          <p className="leading-7 md:!leading-8 lg:!leading-10 text-xs md:text-sm lg:text-base text-black-900">
            Let's be friends and Learn Together, if you want to talk directly,
            please contact me via email, or my social media at
            <Link href="/contact">
              <a className="text-orange font-semibold"> here </a>
            </Link>
            do not hesitate to contact me, whether acquainted or asking, I will
            try to help.
          </p>
        </Section>
      </main>
      <Footer />
    </PageWraper>
  );
};

export default AboutMe;
