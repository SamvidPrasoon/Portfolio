import './index.css';
import React from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <div className='subpixel-antialiased text-2xl bg-gradient-to-b from-blue-50 to-transparent  w-full h-full absolute '>
   
        <Navbar />
        <Header />
        {/* <About />
        <Work />
        <Skills />
        <Projects />
        <Footer />  */}
      </div>
    </React.Fragment>
  );
}

export default App;
