import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import PageWraper from '../components/PageWraper';

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
      </main>
      <Footer />
    </PageWraper>
  );
};

export default AboutMe;
