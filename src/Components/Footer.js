import { Link } from 'react-router-dom';

const Footer = function () {
  return (
    <section>
      <div className='footer'>
        <ul className='main-nav-lists'>
          <Link to='/' className='nav-list'>
            Home
          </Link>
          <Link to='/work' className='nav-list'>
            WORK
          </Link>
          <Link to='/about' className='nav-list'>
            ABOUT
          </Link>
          <Link to='/contact' className='nav-list'>
            CONTACT
          </Link>
        </ul>

        <div>© 2022 Contrast Photography</div>
      </div>
    </section>
  );
};
export default Footer;
