import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function showPage(view) {
  switch (view) {
    case 'My Projects':
      return (
        <Projects />
      )
    case 'Contact Me':
      return (
        <Contact />
      )
    default: // 'About Me'
      return (
        <About />
      )
  }
}

function App() {

  const [view, setView] = useState('About Me');
  
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap" rel="stylesheet"></link>
      <link href="./App.css" rel="stylesheet"/>
      <header className='bg-dark-gray text-offWhite'>
        <h1 className="font-oswald fw-600 pt-3 display-3">My Portfolio</h1>
        <Nav setView={setView}/>
      </header>
      <div className="">
        {showPage(view)}
      </div>
      <footer className="mt-auto py-3 bg-dark-gray text-offWhite">
        These Will be the links to the github and linkedIn
      </footer>
    </div>
  );
}

export default App;
