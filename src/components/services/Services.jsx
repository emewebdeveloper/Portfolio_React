import React from 'react'
import './services.css'
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>User research and testing </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Wireframing and prototyping</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Visual design</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Interaction design</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Information architecture</p>
          </li>
        
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>HTML/CSS/JavaScript</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Responsive design</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Version control</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Front-end frameworks</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Back-end development</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Database management</p>
          </li>
          </ul>
        </article>

        {/* End Of WEB DEVELOMENT */}
        


        <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className="service__list">
          
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Writing and editing</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>SEO optimization</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Social media management</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Graphic design</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Video production</p>
          </li>
          </ul>
        </article>

        {/* END */}
      </div>
    </section>
  )
}

export default Services