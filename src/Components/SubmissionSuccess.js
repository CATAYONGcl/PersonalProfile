import React from 'react';
import '../App.css';

const SubmissionSuccess = ({ name, email, message }) => {
  return (
    <div className="text-center">
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent successfully.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
};

export default SubmissionSuccess;