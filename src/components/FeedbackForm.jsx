import React from "react";
import { useFormik } from "formik";

const FeedbackForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      eventName: "",
      eventDate: "",
      message: "",
      rating: 0,
    },

    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "First name is required";
      }

      if (!values.lastName) {
        errors.lastName = "Last name is required";
      }

      if (!values.phone) {
        errors.phone = "Phone is required";
      } else if (!/^[0-9]+$/.test(values.phone)) {
        errors.phone = "Phone must contain only digits";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!values.email.includes("@")) {
        errors.email = "Invalid email";
      } else {
       const existingFeedback =
       JSON.parse(localStorage.getItem("feedbacks")) || [];

       const emailExists = existingFeedback.some((feedback) => feedback.email === values.email);

      if (emailExists) {
       errors.email = "This email has already submitted feedback";
        }
      }

      if (!values.eventName) {
        errors.eventName = "Event name is required";
      }

      if (!values.eventDate) {
        errors.eventDate = "Event date is required";
      }

      if (!values.message) {
        errors.message = "Message is required";
      }

      if (values.rating === 0) {
        errors.rating = "Please select a rating";
      }

      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      const existingFeedback =
        JSON.parse(localStorage.getItem("feedbacks")) || [];

      const updatedFeedback = [...existingFeedback, values];

      localStorage.setItem("feedbacks", JSON.stringify(updatedFeedback));

      alert("Feedback submitted successfully!");
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      
      <p className="section-title">PERSONAL INFORMATION</p>

      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="error-text">{formik.errors.firstName}</p>
        )}
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="error-text">{formik.errors.lastName}</p>
        )}
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="error-text">{formik.errors.phone}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="error-text">{formik.errors.email}</p>
        )}
      </div>

     
      <p className="section-title">EVENT DETAILS</p>

      <div>
        <label>Event Name</label>
        <input
          type="text"
          name="eventName"
          value={formik.values.eventName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.eventName && formik.errors.eventName && (
          <p className="error-text">{formik.errors.eventName}</p>
        )}
      </div>

      <div>
        <label>Event Date</label>
        <input
          type="date"
          name="eventDate"
          value={formik.values.eventDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.eventDate && formik.errors.eventDate && (
          <p className="error-text">{formik.errors.eventDate}</p>
        )}
      </div>

      
      <p className="section-title">YOUR EXPERIENCE</p>

      <div>
        <label>How would you rate the overall experience?</label>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={ star <= formik.values.rating ? "star active": "star"}
              onClick={() => {
                formik.setFieldValue("rating", star);
                formik.setFieldTouched("rating", true);
              }}
            >
              ★
            </span>
          ))}
        </div>

        {formik.errors.rating && (
          <p className="error-text">{formik.errors.rating}</p>
        )}
      </div>

      <div>
        <label>Feedback Message</label>
        <textarea
          name="message"
          rows="4"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="error-text">{formik.errors.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">
        Submit Feedback
      </button>

    </form>
  );
};

export default FeedbackForm;