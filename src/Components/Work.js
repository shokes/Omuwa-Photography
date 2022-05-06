import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop';

const Work = function ({ image, year, title, id }) {
  return (
    <section>
      <Link to={`/work/${id}`} className='single-work'>
        <img className='project-image' src={image} alt='project' />
        <h4>{title}</h4>
        <div>{year}</div>
      </Link>
      <GoToTop />
    </section>
  );
};

export default Work;
