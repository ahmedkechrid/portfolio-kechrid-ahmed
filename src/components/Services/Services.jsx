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
          <h3>Web Development</h3>
        </div>
        <div className="service__list">
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>I specialize in building dynamic and responsive web applications using React.js,
               ensuring seamless user experiences across all devices.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>With a strong background in Node.js, I create efficient and scalable back-end services, 
              focusing on performance and security.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Proficient in SQL Server and MySQL,
               I design and manage robust databases that support complex application requirements.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>My experience with Angular allows me to develop feature-rich front-end applications with a strong emphasis on modularity and reusability.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>I also have a solid understanding of MongoDB,
               enabling me to handle NoSQL databases for applications requiring flexible and scalable data structures.</p>
          </li>
        </div>
      </article>
      
      {/* End UI/UX DESIGN */}
      <article className="service">
        <div className="service__head">
          <h3>Data Scientist</h3>
        </div>
        <div className="service__list">
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Machine Learning: Skilled in implementing machine learning algorithms for predictive modeling, classification,
               and regression tasks, using libraries such as TensorFlow, scikit-learn, and PyTorch.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Data Analytics: Proficient in analyzing large datasets to extract meaningful insights,
               identify patterns, and support data-driven decision-making, utilizing tools like Python, R, and SQL.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Data Visualization: Experienced in creating visually compelling and informative charts,
               graphs, and dashboards using tools like Matplotlib, Seaborn,
                Tableau, and Power BI to effectively communicate data findings.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Statistical Analysis: Strong foundation in statistical methods to validate models, 
              conduct hypothesis testing, and perform exploratory data analysis.</p>
          </li>
          <li> 
            <AiOutlineCheck className='service__list-icons'/>
            <p>Data Preprocessing: Adept at cleaning, transforming,
               and preparing data for analysis, ensuring accuracy and consistency in results.</p>
          </li>
        </div>
      </article>
      
      
     </div>
      </section>
  )
}

export default Services