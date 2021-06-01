import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import PageWraper from '../components/PageWraper';
import Section from '../components/Section';

const ContactMe = () => {
  return (
    <PageWraper>
      <PageHead title="Edwin Tantawi | Contact" />
      <Navbar />
      <main className="flex-grow">
        <Header
          title="Contact"
          description="Chat with me through some of the contacts you can call to get acquainted with each other"
        />
        <Section className="pt-0">
          <ul>
            <li>
              <a
                href="mailto:edwintantawi@gmail.com"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-envelope"></i> edwintantawi@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+6282388386923"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                +62 823 8838 6923
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/wintantawi"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
                @wintantawi
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/edwintantawi.5"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
                Edwin Tantawi
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/edwin-tantawi-909138193/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
                Edwin Tantawi
              </a>
            </li>
            <li>
              <a
                href="https://github.com/edwintantawi"
                target="__blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                edwintantawi
              </a>
            </li>
          </ul>
        </Section>
      </main>
      <Footer />
    </PageWraper>
  );
};

export default ContactMe;
