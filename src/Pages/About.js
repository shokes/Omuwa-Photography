import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import { Slide, Zoom } from 'react-awesome-reveal';

const About = function () {
  return (
    <section className='container'>
      <Navbar />
      <div>
        <div className='about-box'>
          <div>
            <Slide direction='up'>
              <h3>ABOUT ME</h3>
            </Slide>
            <Slide direction='up'>
              <p className='about-me-first'>
                I started my photography journey in 2017, using my Iphone 7 as
                my photography tool, I recently won an Apple Photography
                competition with winners being honored with Apple's exclusive
                CAMERA EXPERIENCE OFFICER [CEO] badge.
              </p>
              <p>
                Photography for me is not just looking, it's feeling and also an
                escape to a reality so subtle that it becomes more real than
                reality itself. I believe in perfect simplicity and a high will
                to improve my photography skills, my interest are in Macro,
                Landscape, Portrait, and Creative Photography.
              </p>
            </Slide>
          </div>
          <Zoom delay={300} duration={100}>
            <img
              src='https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwcGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              className='about-photo'
              alt='photographer'
            />
          </Zoom>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
