import { Link } from 'react-router-dom';

const Footer = function () {
  return (
    <section className='section-footer'>
      <div className='footer'>
        <ul className='footer-nav-lists'>
          <Link to='/' className='footer-nav-list'>
            HOME
          </Link>
          <Link to='/work' className='footer-nav-list'>
            WORK
          </Link>
          <Link to='/about' className='footer-nav-list'>
            ABOUT
          </Link>
          <Link to='/contact' className='footer-nav-list'>
            CONTACT
          </Link>
        </ul>

        <div className='rights'>© 2022 Contrast Photography</div>
      </div>
    </section>
  );
};
export default Footer;
