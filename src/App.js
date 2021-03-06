import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Works from './Pages/Works';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import SingleWork from './Pages/SingleWork';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work/:id' element={<SingleWork />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
