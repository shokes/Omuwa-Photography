import projects from '../data';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

import GoToTop from '../GoToTop';

const SelectedWork = function () {
  return (
    <section className='container'>
      <h5>SELECTED WORK</h5>
      {projects.map((project) => {
        const { year, title, id } = project;
        return (
          <Slide key={id} cascade direction='up' triggerOnce>
            <div className='selected-works-flex'>
              <div>{year}</div>

              <Link to={`/work/${id}`} className='selected-title'>
                {title}
              </Link>
            </div>
          </Slide>
        );
      })}
      <Link to='/work' className='all-projects'>
        ALL PROJECTS
      </Link>
      <GoToTop />
    </section>
  );
};

export default SelectedWork;
