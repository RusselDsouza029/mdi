import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';
import ToTop from './components/ToTop';
import TvShows from './components/TvShows';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="div-h1">
        <p className="top-head">MDI</p>
      </div>
      <HashRouter>
        <ToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/shows/:id' element={<TvShows />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
