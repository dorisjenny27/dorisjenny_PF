import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
  <div className="service__head">
    <h3>Backend Development</h3>
    <small className=''><i>Available</i></small>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Design and develop RESTful APIs using ASP.NET Core.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Implement database solutions with Entity Framework Core.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Create microservices architectures with .NET.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Develop secure authentication and authorization systems.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Optimize database performance and query efficiency.</p>
    </li>           
  </ul>
</article>
{/* END OF BACKEND DEVELOPMENT */}

<article className='service'>
  <div className="service__head">
    <h3>Frontend Development</h3>
    <small className=''><i>Available</i></small>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Building responsive and interactive UIs with React.js.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>State management using Redux or Context API.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Creating reusable components and custom hooks.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Implementing modern CSS techniques and animations.</p>
    </li>
    {/* <li>
      <BiCheck className='service__list-icon'/> 
      <p>Optimizing frontend performance and load times.</p>
    </li>                          */}
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Integration with RESTful APIs and handling asynchronous operations.</p>
    </li>                         
  </ul>
</article>
{/* FRONTEND DEVELOPMENT */}

<article className='service'>
  <div className="service__head">
    <h3>Database & DevOps</h3>
    <small className=''><i>Available</i></small>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>ORM with Entity Framework Core for efficient data access.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Cloud services: AWS and Azure for deployments.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Database management: PostgreSQL, MS SQL Server, MySQL.</p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Implementing CI/CD pipelines for automated deployments.</p>
    </li>
    {/* <li>
      <BiCheck className='service__list-icon'/> 
      <p>Containerization with Docker for consistent environments.</p>
    </li> */}
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Database performance tuning and query optimization.</p>
    </li>
  </ul>
</article>
{/* DATABASE & DEVOPS */}

      </div>
    </section>
  )
}

export default Services