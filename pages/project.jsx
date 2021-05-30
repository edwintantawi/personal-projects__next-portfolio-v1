import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import Section from '../components/Section';
import dataSite from '../data/data-site';

const Project = () => {
  return (
    <div>
      <PageHead title="Edwin Tantawi | Project" />
      <Navbar />
      <main>
        <section className="flex items-center pt-12">
          <div className="container-sm sm:container px-3 mx-auto text-center md:text-left">
            <h1 className="font-bold text-black-900 text-4xl sm:text-6xl lg:text-8xl">
              Project's
            </h1>
            <p className="max-w-[280px] md:max-w-sm text-gray-500 text-xs lg:text-base mt-4 mx-auto md:mx-0">
              some of the projects that I've worked on to completion with some
              of the technologies I have learned and mastered
            </p>
          </div>
        </section>

        <Section className="!p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            {dataSite.projects.map((item) => (
              <div
                key={item.title}
                className="border border-gray-300 rounded-lg pt-7 px-6 text-center overflow-hidden h-60 sm:h-96 md:h-80 2xl:h-80 group md:last:col-span-2 xl:last:col-span-1">
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
                  className="min-w-full shadow-card w-full transform translate-y-8 transition duration-500 group-hover:translate-y-2 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
