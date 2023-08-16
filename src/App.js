import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/gym_website'>
            <Header />
            <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/about' element={<About />}/>
                  <Route path='/services' element={<Services />}/>
                  <Route path='/gallery' element={<Gallery />}/>
                  <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
