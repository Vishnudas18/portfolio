import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch,Routes } from 'react-router-dom';
import Aboutme from './Components/Aboutme';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Header1 from './Components/Header1';
import Home from './Components/Home';
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
       <Header1/>
       <Home/>
       <Aboutme/>
       <Education/>
       <Skills/>
       <Project/>
       <Footer/>
    </div>
  );
}

export default App;
