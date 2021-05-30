import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import PageWraper from '../components/PageWraper';
import Section from '../components/Section';
import dataSite from '../data/data-site';

const Project = () => {
  return (
    <PageWraper>
      <PageHead title="Edwin Tantawi | Project" />
      <Navbar />
      <main className="flex-grow">
        <Header
          title="Project's"
          description="some of the projects that I've worked on to completion with some
              of the technologies I have learned and mastered"
        />

        <Section className="pt-2 md:pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            {dataSite.projects.map((item) => (
              <div
                key={item.title}
                className="border border-gray-300 rounded-lg pt-7 px-6 text-center overflow-hidden h-60 sm:h-96 md:h-80 2xl:h-80 group">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-orange">
                  <h3 className="font-semibold text-lg sm:text-xl text-black-500">
                    {item.title}
                  </h3>
                </a>
                <p className="text-xs text-gray-500 mb-4">{item.stack}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="min-w-full shadow-card w-full transform translate-y-8 transition duration-500 group-hover:translate-y-2"
                />
              </div>
            ))}
          </div>
        </Section>
        <Section title="GET IN TOUCH" near className="text-center bg-gray-100">
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

export default Project;
