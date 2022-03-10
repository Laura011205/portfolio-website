import React, { useEffect } from "react";
import "./SubmissionFeedback.css";

const SubmissionFeedback = ({ feedbackContent, hideFeedback }) => {
  useEffect(() => {
    setTimeout(() => {
      hideFeedback();
    }, 4000);
  });
  return (
    <>
      <div className="feedback">{feedbackContent}</div>
    </>
  );
};

export default SubmissionFeedback;
