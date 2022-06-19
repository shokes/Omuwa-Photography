import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SelectedWork from '../Components/SelectedWork';

import GetInTouch from '../Components/GetInTouch';

const Home = function () {
  return (
    <>
      <div className='container'>
        <Navbar />
      </div>

      <Hero />
      <SelectedWork />
      <GetInTouch />
    </>
  );
};

export default Home;
