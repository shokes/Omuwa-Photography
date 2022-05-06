import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Slide } from 'react-awesome-reveal';
const Contact = function () {
  return (
    <section className='container'>
      <Navbar />
      <div className='contact-container'>
        <Slide direction='up' duration={200}>
          <div className='contact'>
            <h3>Need Some Beautiful Portraits?</h3>
            <h3>Let's Work Together!</h3>
          </div>
        </Slide>

        <div className='contact-details'>
          <Slide direction='up' duration={600}>
            <div>
              <div className='contact-head'>WhatsApp/Call</div>
              <a className='contact-info' href='tel:080-835-945-05'>
                08083594505
              </a>
            </div>
          </Slide>
          <Slide direction='up' duration={1100}>
            <div>
              <div className='contact-head'>Email</div>
              <a className='contact-info' href='oyatioshoke@yahoo.com'>
                oyatioshoke@yahoo.com
              </a>
            </div>
          </Slide>
          <Slide direction='up' duration={1600}>
            <div>
              <div className='contact-head'>Twitter</div>
              <a className='contact-info' href='https://twitter.com/Airshokes'>
                @airshokes
              </a>
            </div>
          </Slide>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Contact;
