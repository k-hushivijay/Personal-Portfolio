// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zb180fd",       // Your Service ID
        "template_qocnbge",      // Your Template ID
        formRef.current,
        "OJEoEUSKZnkG3g6NB"      // Your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input name="name" type="text" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
