import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3kxu1at",
        "template_1imx90h",
        form.current,
        "HniQSCQQnQSFhiQoi"
      )
      .then(
        (result) => {
          alert("email sent successfully");
        },
        (error) => {
          alert("error sending email");
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dorisjenny27@gmail.com</h5>
            <a
              href='mailto: dorisjenny27@gmail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsTwitter className='contact__option-icon' />
            <h4>X</h4>
            <h5>dorisjenny27</h5>
            <a
              href='https://x.com/dorisjenny27'
              target='_blank'
              rel='noreferrer noopener'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Doris-okereke</h5>
            <a
              href='https://www.linkedin.com/in/doris-okereke-11b65b137/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
