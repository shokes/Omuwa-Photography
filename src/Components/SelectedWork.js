import projects from '../data';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const SelectedWork = function () {
  return (
    <section className='container'>
      <h5>SELECTED WORK</h5>
      {projects.map((project) => {
        const { year, title, id } = project;
        return (
          <Slide direction='up' triggerOnce>
            <div key={id} className='selected-works-flex'>
              <div>{year}</div>
              <div className='selected-title'>{title}</div>
            </div>
          </Slide>
        );
      })}
      <Link to='/work' className='all-projects'>
        ALL PROJECTS
      </Link>
    </section>
  );
};

export default SelectedWork;
