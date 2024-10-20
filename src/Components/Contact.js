import React, { useState } from 'react';

const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the parent's onSubmit function
  };

  return (
    <div className="text-center">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="name" placeholder="Name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <textarea name="message" placeholder="Message" className="form-control" rows="3" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;