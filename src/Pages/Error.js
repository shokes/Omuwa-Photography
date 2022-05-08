import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error = function () {
  return (
    <section className='container'>
      <Navbar />
      <p className='error'>Oops! this page is unavailable..</p>
      <Footer />
    </section>
  );
};

export default Error;
