import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvbka0f",
        "template_j9smhs2",
        form.current,
        "yAe7lsBUa_MwYgyi_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="contact-name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="contact-email"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="contact-message"
      ></textarea>
      <button type="submit" className="form-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
