import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = function () {
  return (
    <section className='container'>
      <Navbar />
      <div className='contact-container'>
        <div className='contact'>
          <h3>Need Some Beautiful Portraits?</h3>
          <h3>Let's Work Together!</h3>
        </div>
        <div className='contact-details'>
          <div>
            <div className='contact-head'>WhatsApp/Call</div>
            <a className='contact-info' href='tel:080-835-945-05'>
              08083594505
            </a>
          </div>
          <div>
            <div className='contact-head'>Email</div>
            <a className='contact-info' href='oyatioshoke@yahoo.com'>
              oyatioshoke@yahoo.com
            </a>
          </div>

          <div>
            <div className='contact-head'>Twitter</div>
            <a className='contact-info' href='https://twitter.com/Airshokes'>
              @airshokes
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Contact;
