import React, { useEffect, useState } from "react";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadFeedbacks = () => {
    const storedFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedback);
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="feedback-page">
      <div className="feedback-top">
        <h1>Community Feedback</h1>
      </div>

      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbacks.map((item, index) => (
          <div key={index} className="feedback-card">
            <h3>
              {item.firstName} {item.lastName}
            </h3>

            <div className="rating-stars">
              {"★".repeat(item.rating)}
            </div>

            <div className="feedback-message">
              {item.message}
            </div>

            <div className="feedback-meta">
              <span>{item.email}</span>
              <span>{item.phone}</span>
              <span>{item.eventName}</span>
              <span>{item.eventDate}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FeedbackList;