import React from 'react'
import"./Services.css"
import { AiOutlineCheck } from "react-icons/ai";


const Services = () => {
  return (
    <section id='services'>
     <h5> What I Offre</h5>
     <h2> Services</h2>
     <div className="container services_container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <div className="service__list">
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </div>
      </article>
      {/* End UI/UX DESIGN */}
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <div className="service__list">
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </div>
      </article>
      {/* End  Web Development  */}
      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <div className="service__list">
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </div>
      </article>
     </div>
      </section>
  )
}

export default Services