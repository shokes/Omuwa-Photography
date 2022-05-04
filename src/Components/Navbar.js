import { Link } from 'react-router-dom';

const Navbar = function () {
  return (
    <nav className='container nav'>
      <Link to='/' className='logo'>
        Omuwa
      </Link>

      <div>
        <ul className='main-nav-lists'>
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
      </div>
    </nav>
  );
};
export default Navbar;
