import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';

const AboutMe = () => {
  return (
    <div>
      <PageHead title="Edwin Tantawi | Project" />
      <Navbar />
      <main>
        <section className="flex items-center pt-12">
          <div className="container-sm sm:container px-3 mx-auto text-center md:text-left">
            <h1 className="font-bold text-black-900 text-4xl sm:text-6xl lg:text-8xl">
              About Me
            </h1>
            <p className="max-w-[280px] md:max-w-sm text-gray-500 text-xs lg:text-base mt-4 mx-auto md:mx-0">
              some of the projects that I've worked on to completion with some
              of the technologies I have learned and mastered
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
