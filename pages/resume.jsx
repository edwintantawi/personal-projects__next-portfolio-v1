import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import PageWraper from '../components/PageWraper';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import dataSite from '../data/data-site';

const Resume = () => {
  return (
    <PageWraper>
      <PageHead title="Edwin Tantawi | Resume" />
      <Navbar />
      <main className="flex-grow">
        <Header
          title="Resume"
          description="explore my experiences, rewards, and education, as well as my activeness"
        />
        <Section
          title="Courses i completed"
          smallSection
          align="left"
          className="pt-2 md:pt-2"
        >
          <div id="timeline-tree">
            {dataSite.courses.map((item, index) => (
              <Timeline
                key={index}
                timestamp={item.timestamp}
                title={item.title}
                subtitle={item.subtitle}
                descriptions={item.descriptions}
                list={item.list}
              />
            ))}
          </div>
        </Section>
        <Section
          title="Educational level"
          smallSection
          align="left"
          className="pt-2 md:pt-2"
        >
          <div id="timeline-tree">
            {dataSite.education.map((item, index) => (
              <Timeline
                key={index}
                timestamp={item.timestamp}
                title={item.title}
                subtitle={item.subtitle}
                descriptions={item.descriptions}
                list={item.list}
              />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </PageWraper>
  );
};

export default Resume;
