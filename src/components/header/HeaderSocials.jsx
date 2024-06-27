import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
   <div className="header__socials">
    <a href="https://www.linkedin.com/in/web-developer-designer/" target='_blank'><BsLinkedin/></a>
    <a href="https://twitter.com/Hammad_Saboor07" target='_blank'><FaTwitter/></a>
    <a href="https://www.instagram.com/hammad_saboor_/" target='_blank'><FiInstagram/></a>
   </div>
  )
}

export default HeaderSocials