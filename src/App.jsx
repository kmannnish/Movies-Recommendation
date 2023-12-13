import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Genre from "./components/Genre/Genre";
import MovieInformation from './components/MovieInformation/MovieInformation';

function App() {

  // blue #227fb4
  // grey #227fb4
  // light grey #9ca3af
  // Auto Class SOrting 

  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/movie/:id' element={<MovieInformation />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
