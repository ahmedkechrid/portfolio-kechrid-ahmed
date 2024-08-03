import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_7wvrzkc', 'template_8g9sv8d', form.current, 'b6f0qEEzJv_N6tnjd')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>ahmdkechrid@gmail.com</h5>
              <a href='mailto:ahmdkechrid@gmail.com' target='__blank'>Send A Message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>ahmed kechrid</h5>
              <a href='https://m.me/profile.php?id=100012394171686' target='__blank'>Send A Message</a>
            </article>
            <article className="contact__option">
              <FaWhatsapp className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>+216 52311291</h5>
              <a href='https//api.whatsapp.com/send?phone+21652311291' target='__blank'>Send A Message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea  name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message </button>


        </form>
      </div>
    </section>
  )
}

export default Contact