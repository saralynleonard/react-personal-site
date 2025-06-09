import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectList from './pages/Projects';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import logoImg from './assets/saralyn-logo.png'
import Footer from './components/Footer';
import EducationList from './pages/Education';
import ExperienceList from './pages/Experience';
import React, { useEffect } from 'react';

function NotFound() {
  return (
    <main className='error'>
      <svg className='error-img' enable-background="new 0 0 64 64" height="400" viewBox="0 0 64 64" width="400" xmlns="http://www.w3.org/2000/svg"><g style={{fill: "none", stroke: "#ffb300", strokeWidth:"2", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterLimit: "10"}}><path d="m39 46 2-1h18c0 2.761-2.238 5-5 5h-44c-2.762 0-5-2.239-5-5h18l2 1z"/><path d="m55 41v-29h-46v29"/><path d="m47 18-8 8"/><path d="m17 18 8 8"/><path d="m47 26-8-8"/><path d="m17 26 8-8"/><path d="m20 33h24"/><path d="m35 33v5c0 1.657 1.343 3 3 3s3-1.343 3-3v-5"/><path d="m38 33v4"/></g></svg>
      <h2>Page Not Found!</h2>
      {/* <img src={errorImg} className='error-img'></img> */}
    </main>
  )
}

function App() {

useEffect(() => {
  const handleMouseMove = (e) => {
    document.body.style.background =
      `radial-gradient(
        circle at ${e.clientX}px ${e.clientY}px,#20263a 0px,  #0a0f1c 600px)`;
  };
  window.addEventListener("mousemove", handleMouseMove);
  document.body.style.background = "#0a0f1c"; 
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    document.body.style.background = "#0a0f1c";
  };
}, []);


  return (
    <div className="App">
      <header>
        <img src={logoImg} className='logo' alt='site logo'></img>
        <h1>Saralyn Leonard</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path='/react-personal-site' element={<Home />} />
        <Route path='/react-personal-site/experience' element={<ExperienceList />} />
        <Route path='/react-personal-site/education' element={<EducationList />} />
        <Route path='/react-personal-site/projects' element={<ProjectList />} />     
        <Route path='*' element={<NotFound />} />     
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
