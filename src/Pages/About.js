import Navbar from '../Components/Navbar';
import Omuwa from '../Images/Omuwa.jpg';
import Footer from '../Components/Footer';

const About = function () {
  return (
    <section>
      <Navbar />
      <div className='container'>
        <div className='about-box'>
          <div>
            <h3>ABOUT ME</h3>
            <p>
              I started my photography journey in 2017, using TECNO devices as
              my photography tool, I recently won a TECNO Photography
              competition with winners being honored with TECNO's exclusive
              CAMERA EXPERIENCE OFFICER [CEO] badge.
            </p>
            <p>
              Photography for me is not just looking, it's feeling and also an
              escape to a reality so subtle that it becomes more real than
              reality itself. I believe in perfect simplicity and a high will to
              improve my photography skills, my interest are in Macro,
              Landscape, Portrait, and Creative Photography
            </p>
          </div>
          <img src={Omuwa} className='about-photo' alt='photographer' />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
