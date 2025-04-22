import { useState } from 'react';
import { About } from '../About/About';
import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import { Work } from '../Work/Work';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="app-container">
        <Navbar />
        <Home />
        <div className="mask-wrapper">
          <div className="el"></div>
        </div>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      </div>
      
    </>
  );
}

export default App;
