import PageHead from '../components/PageHead';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import dataSite from '../data/data-site';
import Section from '../components/Section';
import Footer from '../components/Footer';
import PageWraper from '../components/PageWraper';
import Card from '../components/Card';

const Home = () => {
  return (
    <PageWraper>
      <PageHead />
      <Navbar />

      <main className="flex-grow">
        <section className="h-screen bg-hero bg-center bg-cover xl:bg-contain bg-no-repeat -mt-12 flex items-center">
          <div className="container-sm sm:container px-3 -mt-14 mx-auto text-center md:text-left">
            <div className="flex">
              <span className="flex items-center mx-auto md:mx-0">
                Hi, I'm
                <span className="inline-block w-6 md:w-10 bg-orange-gradient h-1 ml-2" />
              </span>
            </div>
            <h1 className="font-bold text-black-900 text-5xl sm:text-7xl lg:text-8xl">
              {dataSite.hero.name}
            </h1>
            <h2 className="font-semibold text-orange text-lg sm:text-3xl lg:text-4xl mt-1 lg:mt-3">
              [ {dataSite.hero.title} ]
            </h2>
            <p className="max-w-[280px] md:max-w-sm text-gray-500 text-xs lg:text-base mt-4 mx-auto md:mx-0">
              {dataSite.hero.short_bio}
            </p>
            <div className="flex flex-col md:flex-row mt-8">
              <Link href="/contactme">
                <a className="inline-block px-12 py-4 bg-orange-gradient rounded-md font-semibold text-xs md:text-sm text-center text-white mr-0 mb-3 md:mr-2 md:mb-0 tracking-wider">
                  Get in Touch
                </a>
              </Link>
              <Link href="/aboutme">
                <a className="inline-block px-12 py-4 rounded-md font-semibold text-xs md:text-sm text-center border-collapse text-black-900 underline tracking-wider">
                  Know more
                </a>
              </Link>
            </div>
          </div>
        </section>

        <Section title="WHAT CAN I DO">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-3">
            {dataSite.what_can_i_do.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-8 md:p-10 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-9 h-9 md:w-12 md:h-12"
                  />
                  <h3 className="ml-4 font-semibold text-black-900 text-base md:text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="SKILLS & TECHNOLOGY">
          <div className="flex flex-wrap space-x-2 md:space-x-3 justify-center">
            {dataSite.skills_technology.map((item) => (
              <div
                key={item.title}
                className="flex items-center space-x-1 md:space-x-3 mb-2 p-3 md:p-4 border border-gray-300 rounded-lg"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 md:w-8 md:h-8"
                />
                <h3 className="font-medium text-black-900 text-xs md:text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </Section>

        <Section title="A PROJECT I COMPLETED">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            {dataSite.projects
              .filter((filteredItem) => filteredItem.top)
              .map((item) => (
                <Card
                  title={item.title}
                  stack={item.stack}
                  image={item.image}
                />
              ))}
          </div>
          <div className="text-center mt-5 md:mt-8">
            <Link href="/project">
              <a className="text-gray-500 text-xs md:text-sm hover:text-orange transition">
                View all projects <i className="fas fa-chevron-right ml-1" />
              </a>
            </Link>
          </div>
        </Section>

        <Section title="GET IN TOUCH" className="text-center bg-gray-100">
          <p className="max-w-[250px] md:max-w-[400px] text-center mx-auto text-gray-500 mb-5 md:mb-8 text-xs md:text-sm">
            Is there anything I can help you with? My inbox and social media are
            always open to you, feel free to ask, I will try my best for you.
            Thank you for visiting.
          </p>
          <Link href="/contactme">
            <a className="inline-block px-12 py-3 bg-orange-gradient rounded-md font-semibold text-xs md:text-sm text-center text-white mr-0 mb-3 md:mr-2 md:mb-0 tracking-wider">
              Say Hi...
            </a>
          </Link>
        </Section>
      </main>

      <Footer />
    </PageWraper>
  );
};

export default Home;
