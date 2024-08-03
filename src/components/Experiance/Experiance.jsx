import React from 'react'
import"./Experiance.css"
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='container experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experiance_content'>
            <article className='experiace_details'>
             <BsFillPatchCheckFill className='experiace_details-icons'/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
           </article>
           <article className='experiace_details'>
             <BsFillPatchCheckFill className='experiace_details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
           <article className='experiace_details'>
             <BsFillPatchCheckFill className='experiace_details-icons'/>
             <div>
             <h4>JAVASCRIPT</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experiace_details'>
              <BsFillPatchCheckFill className='experiace_details-icons'/>
             <div><h4>bootstrap</h4>
             <small className='text-light'>Experienced</small></div>
           </article>
           <article className='experiace_details'>
             <BsFillPatchCheckFill className='experiace_details-icons'/>
             <div>
             <h4>REACT</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experiace_details'>
             <BsFillPatchCheckFill className='experiace_details-icons'/>
             <div>
             <h4>ANGULAR</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
        </div>
        </div>
        
      
       <div className='container experience_backend'>
        <h3>Backend Development</h3>
        <div className='experiance_content'>
          <article className='experiace_details'>
            <BsFillPatchCheckFill className='experiace_details-icons'/>
            <div>
            <h4>NODEJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experiace_details'>
            <BsFillPatchCheckFill className='experiace_details-icons'/>
            <div>
            <h4>MONGODB</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experiace_details'>
            <BsFillPatchCheckFill className='experiace_details-icons'/>
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experiace_details'>
            <BsFillPatchCheckFill className='experiace_details-icons'/>
           <div>
           <h4>PYTHON</h4>
           <small className='text-light'>Beginner</small>
           </div>
          </article>  
          <article className='experiace_details'>
            <BsFillPatchCheckFill className='experiace_details-icons'/>
           <div>
           <h4>PHP</h4>
           <small className='text-light'>Beginner</small>
           </div>
          </article>
        
           </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experiance