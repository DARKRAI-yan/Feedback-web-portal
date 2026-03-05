import React from "react";
import FeedbackForm from "../components/FeedbackForm";

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <div className="title-section">
        <h1>Community Event Feedback</h1>
        <p>Help us improve by submitting your feedback below</p>
      </div>

      <div className="form-container">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackPage;