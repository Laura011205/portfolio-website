import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-content">
        <div className="contact-content-wrapper">
          <h4 className="contact-title">Get in Touch</h4>
          <p className="contact-text">
            I am open to Fall 2022 internship opportunities and freelance
            projects. <br /> Feel free to reach out :)
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
