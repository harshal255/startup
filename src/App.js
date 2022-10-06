
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import About from './components/About';
import Startups from './components/Startups';
import Contact from './components/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <div classNameName="App">

   
    <Router>
    <Header></Header>
    
    <Routes>
   
     <Route path="/" element={<Hero></Hero>} />
     <Route path="/startups" element={<Startups></Startups>} />
     <Route path="/about" element={<About></About>} />
     <Route path="/contact" element={<Contact></Contact>} />
     </Routes>
    </Router>
    

  

    </div>
  );
}

export default App;
  