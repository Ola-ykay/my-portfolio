import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import BeatLoader from "react-spinners/BeatLoader";
import {useState, useEffect} from 'react'

const override = {
  width: '70px',
  margin: "0 auto",
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border:'1px solid #002147',
  borderRadius: '10px',
};

function App() {
const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
    
  },[])

  
  return (
        <div>
          {
            loading ? 
     <BeatLoader
        color={"#002147"}
       cssOverride={override}
        loading={loading}
        size={15}
      /> : 
     <div className={`container ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme}/>
      <About theme={theme}/>
      <Skills theme={theme}/>
      <Projects theme={theme}/>
      <Contact theme={theme} />
      <Footer />
          </div>
          }
    </div>
   
  );
};

export default App;