import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageHead from '../components/PageHead';
import PageWraper from '../components/PageWraper';

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
      </main>
      <Footer />
    </PageWraper>
  );
};

export default ContactMe;
