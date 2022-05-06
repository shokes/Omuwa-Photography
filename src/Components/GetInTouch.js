import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Slide } from 'react-awesome-reveal';
const GetInTouch = function () {
  return (
    <section className='container'>
      <div className='get-in-touch-box'>
        <Slide direction='up' triggerOnce>
          <div className='get-in-touch-content'>
            <h3>Let's take some amazing</h3>
            <h3> photos together</h3>
          </div>

          <Link to='/contact' className='get-in-touch'>
            get in touch
          </Link>
        </Slide>
      </div>

      <Footer />
    </section>
  );
};

export default GetInTouch;
