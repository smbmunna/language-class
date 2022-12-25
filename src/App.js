import './App.css';
import Home from './Components/Home/Home';
import Course from './Components/Course/Course';
import Feature from './Components/Event/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/course' element={<Course/>}/>
        <Route exact path='/events' element={<Feature/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
