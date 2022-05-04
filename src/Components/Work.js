const Work = function ({ image, year, title }) {
  return (
    <section>
      <div>
        <img className='project-image' src={image} alt='project-image' />
        <h4>{title}</h4>
        <div>{year}</div>
      </div>
    </section>
  );
};

export default Work;
