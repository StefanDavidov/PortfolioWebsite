import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faPhone, faEnvelope, faMessage, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ContactForm() {
    const form = useRef();
  
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o4lk6r7', 'template_r1sq5em', form.current, 's_TWC-eJQZYqTxSK2')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
      <div className="center">
        <form ref={form} onSubmit={sendEmail}>
          <div className="rowForm">
            <div className="input-group">
            <input type="text" id="name" name="user_name" required></input>
            <label for="name">Your name <FontAwesomeIcon icon={faPerson} /></label>
            </div>
            <div className="input-group">
            <input type="text" id="number" name="user_number" required></input>
            <label for="number">Phone Number <FontAwesomeIcon icon={faPhone}/></label>
            </div>
          </div>
          <div className="input-group">
           <input type="email" id="email" name="user_email" required></input>
           <label for="email">Email Adress <FontAwesomeIcon icon={faEnvelope} /></label>
          </div>
          <div className="input-group">
           <textarea id="message" rows="5" name="message" required></textarea>
           <label for="message">Message <FontAwesomeIcon icon={faMessage} /></label>
          </div>
          <button type="submit" value='Send' className='divFormButton'>Submit <FontAwesomeIcon icon={faCheck} /></button>
        </form>
      </div>
    );
  }