import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin, BsYoutube } from 'react-icons/bs'
 
const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        CodeWithDoris
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://x.com/dorisjenny27'
          target='_blank'
          rel='noreferrer noopener'
        >
          <IoLogoTwitter />
        </a>
        <a
          href='https://www.linkedin.com/in/doris-okereke-11b65b137/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://www.youtube.com/channel/UCBfE8bZceHtpxg5ALYT0etw'
          target='_blank'
          rel='noreferrer noopener'
        >
          <BsYoutube />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; CodeWithDoris. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
