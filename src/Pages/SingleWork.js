import { useParams } from 'react-router-dom';
import projects from '../data';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import GoToTop from '../GoToTop';

const SingleWork = function () {
  const { id } = useParams();

  const newP = projects.find((project) => +id === project.id);
  const { image, year, title, sample1, sample2, sample3 } = newP;

  return (
    <section className='container'>
      <Navbar />
      <main className='single-work-content'>
        <div>
          <div>{year}</div>
          <h2>{title}</h2>
        </div>

        <div className='single-grid'>
          <img src={image} alt='project' className='main-project-image' />
          <img src={sample1} alt='project' className='sample1' />
          <img src={sample2} alt='project' className='sample2' />
          <img src={sample3} alt='project' className='sample3' />
        </div>
      </main>
      <Footer />
      <GoToTop />
    </section>
  );
};

export default SingleWork;
