import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Hammad Saboor</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Test">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
        <a href="https://www.facebook.com/hammad.raja.07"><BsFacebook/></a>
        <a href="https://www.instagram.com/hammad_saboor_/"><BsInstagram/></a>
        <a href="https://twitter.com/Hammad_Saboor07"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hammad Saboor. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer