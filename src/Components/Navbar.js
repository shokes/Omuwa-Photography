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
            work
          </Link>
          <Link to='/about' className='nav-list'>
            about
          </Link>
          <Link to='/contact' className='nav-list'>
            contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
