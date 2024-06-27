import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hbl4e36', 'template_hkgnjfs', form.current, 'Y-pGrJYuueygG8w9l')
      .then((result) => {
          console.log('Message send Successfully');
      }, (error) => {
          console.log('Invalid required items');
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hammadsaboor02@gmail.com</h5>
            <a href="mailto:hammadsaboor02@gmail.com" target='_blank'>Send Me Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>hammad_saboor_</h5>
            <a href="https://www.instagram.com/hammad_saboor_/" target='_blank'>Send Me Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/+923037921472T" target='_blank'>Send Me Message</a>
          </article>
        </div>
        {/* End of contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required/>
          <input type="email" name="Email" placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact