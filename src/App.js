import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Github, Linkedin } from 'react-bootstrap-icons';

function showPage(view) {
  switch (view) {
    case 'My Projects':
      return <Projects />
    case 'Contact Me':
      return <Contact />
    default: // 'About Me'
      return <About />
  }
}

function App() {
  const [view, setView] = useState('About Me');

  useEffect(() => {
    // remove all focus
    const abtBtn = document.getElementById('About Me');
    const projBtn = document.getElementById('My Projects');
    const contBtn = document.getElementById('Contact Me');
    abtBtn.classList.remove('focus');
    projBtn.classList.remove('focus');
    contBtn.classList.remove('focus');
    // set focus to the active button
    const fcsBtn = document.getElementById(view);
    fcsBtn.classList.add('focus');
  }, [view]);

  return (
    <div className="App h-100 bg-light-gray">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap" rel="stylesheet"></link>
      <link href="./App.css" rel="stylesheet"/>
      <header className='bg-dark-gray text-offWhite'>
        <h1 className="font-oswald fw-600 pt-3 display-3">My Portfolio</h1>
        <Nav setView={setView}/>
      </header>
      <div className="container bg-light-gray">
        {showPage(view)}
      </div>
      <footer className="mt-auto py-3 bg-dark-gray text-offWhite">
        <a href="https://github.com/Alkarias" className="font-large">
          <Github className="mx-2"size={48}/>
        </a>
        <a href="https://www.linkedin.com/in/charles-morton-a56a4b241/" className="LI">
          <Linkedin className="mx-2" size={48}/>
        </a>
      </footer>
    </div>
  );
}

export default App;
