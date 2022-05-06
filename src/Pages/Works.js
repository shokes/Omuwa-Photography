import Navbar from '../Components/Navbar';
import projects from '../data';
import Footer from '../Components/Footer';
import { Zoom } from 'react-awesome-reveal';

import Work from '../Components/Work';

const Works = function () {
  return (
    <section className='container'>
      <Navbar />
      <div className='works'>
        <h2>FEATURED WORKS</h2>
        <div className='work-grid'>
          <Zoom cascade triggerOnce duration={600}>
            {projects.map((project) => {
              const { id } = project;
              return <Work key={id} {...project} />;
            })}
          </Zoom>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Works;
