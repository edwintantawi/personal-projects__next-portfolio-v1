import Link from 'next/link';
import Card from '../components/Card';
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-8">
            {dataSite.projects.map((item) => (
              <Card title={item.title} stack={item.stack} image={item.image} />
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
