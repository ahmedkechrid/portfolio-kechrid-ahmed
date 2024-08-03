import React from 'react'
import "./About.css"
import img from "../../assests/cvahmed.jpg"
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiFolderStar } from "react-icons/pi";
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={img} alt="About image" />
            </div>
         </div>
         <div className="about__content">
          <div className="about__cards">
            <article className='about-card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className='about-card'>
              <PiFolderStar className='about__icon'/>
              <h5>Projects </h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam exercitationem libero repellendus
             itaque nisi amet ad vel quas natus illum, corrupti eos, dolore id in accusantium? Praesentium,
            veritatis reprehenderit.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
   )
}

export default About