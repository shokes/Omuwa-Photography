import { Slide } from 'react-awesome-reveal';

const Hero = function () {
  return (
    <section className='container'>
      <Slide direction='up' triggerOnce duration={200}>
        <div className='main-hero-text'>
          <p>Omuwa</p>
          <p>Photography</p>
        </div>
      </Slide>
      <Slide direction='up' triggerOnce delay={200} duration={200}>
        <p className='quote'>
          Our lens capture your moments in all their flavor and fancies.
        </p>
      </Slide>
    </section>
  );
};

export default Hero;
