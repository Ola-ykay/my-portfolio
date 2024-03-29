import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from 'react-typed';
import '../Styles/Hero.css';
import { motion } from 'framer-motion';

const Intro = ({ theme }) => {
  return (
    <section className={`home-sec ${theme === 'dark' ? 'dark' : ''}`} id='home'>
      
      <motion.div className='home-details' initial={{opacity:0, x:-150}}
          whileInView={{opacity : 1 , x:0}}
          transition = {{ duration:2, ease:"easeInOut"}}>
        <h1>Hello!
          <span> I'm Olayinka</span> &#128075;,
        </h1>
        <div className="typewriter">
          <Typed
            strings={["I'm a Frontend Developer."]}
            typeSpeed={80}
            backSpeed={50}
            loop

          />
        </div>
        <div className='intro-sec'>
          <p>
            A Software Engineer passionate about creating interactive applications and experiences on the web.
          </p>
          <div className={`home-links ${theme === 'dark' ? 'dark' : ''}`}>
          <a href="/Olayinka_Fagbemi.pdf" download="">Resumé</a>

             
       <a href="https://www.linkedin.com/in/fagbemiolayinka/" target="_blank" rel="noreferrer">
            <FaLinkedin />
         </a>

        <a href="https://github.com/Ola-ykay" target="_blank" rel="noreferrer">
            <FaGithub />
         </a>

        <a href="https://twitter.com/Benoor_codes" target="_blank" rel="noreferrer">
            <FaTwitter />
         </a>
     </div>
        </div>
      </motion.div>
     
   

       <motion.div className='my-image' initial={{opacity:0, x:150}}
          whileInView={{opacity : 1 , x:0}}
          transition = {{ duration:2, ease:"easeInOut"}}>
        <img src='/myImage.png' alt='' height='300px' loading="lazy" />
      </motion.div>
    </section>
  )
}

export default Intro