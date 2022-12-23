import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';
import Portfilio from './component/Portfilio';
import Service from './component/Service';

function App() {
  
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/portfilio" element={<Portfilio/>}/>
        <Route  path="/service" element={<Service/>}/>
      </Routes>    </div>
  );
}

export default App;
