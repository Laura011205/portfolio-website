import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubmissionFeedback from "../SubmissionFeedback/SubmissionFeedback";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackContent, setFeedbackContent] = useState("");

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
          setFeedbackContent("Your message has been sent!");
          setShowFeedback(true);
        },
        (error) => {
          console.log(error.text);
          setFeedbackContent("An error occurred, please try again later :(");
          setShowFeedback(true);
        }
      );

    e.target.reset();
  };

  const hideFeedback = () => {
    setShowFeedback(false);
    setFeedbackContent("");
  };

  return (
    <>
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
        <div className="form-footer">
          <div className="form-btn-wrapper">
            <button type="submit" className="form-btn">
              Send Message
            </button>
          </div>
          <div className="feedback-wrapper">
            {showFeedback && (
              <SubmissionFeedback
                hideFeedback={hideFeedback}
                feedbackContent={feedbackContent}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
