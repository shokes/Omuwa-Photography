import Navbar from '../Components/Navbar';
import projects from '../data';
import Footer from '../Components/Footer';

import Work from '../Components/Work';

const Works = function () {
  return (
    <section className='container'>
      <Navbar />
      <div className='works'>
        <h2>FEATURED WORKS</h2>
        <div className='work-grid'>
          {projects.map((project) => {
            const { id } = project;
            return <Work key={id} {...project} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Works;
