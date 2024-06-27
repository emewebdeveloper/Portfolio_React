import React from 'react'
import './about.css'
import  ME  from "../../Assets/about-me.JPG";
import {FaAward} from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderAdd } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
        <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>EXPERIENCE</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>WorldWide Clients</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderAdd className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
            
          </div>
          <p>As a skilled UI/UX designer, web developer, and content creator, I am passionate about creating beautiful and functional digital experiences. With my expertise in user-centered design, front-end development, and content creation, I am able to bring ideas to life and deliver engaging and intuitive solutions that meet the needs of users and businesses alike.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About