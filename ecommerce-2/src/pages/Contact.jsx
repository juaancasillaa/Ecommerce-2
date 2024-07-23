import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validate = () => {
    let formErrors = {};

    if (!values.name) {
      formErrors.name = 'Name is required';
    }
    if (!values.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!values.phone) {
      formErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(values.phone)) {
      formErrors.phone = 'Phone number is invalid';
    }
    if (!values.subject) {
      formErrors.subject = 'Subject is required';
    }
    if (!values.message) {
      formErrors.message = 'Message is required';
    }

    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axios.post('/Contact', values)
        .then(res => console.log("Successfully Submitted"))
        .catch(err => console.log(err));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              name="name"
              placeholder='Enter Name'
              className='form-control rounded-0'
              onChange={handleChange}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              name="email"
              placeholder='Enter Email'
              className='form-control rounded-0'
              onChange={handleChange}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="phone"><strong>Phone</strong></label>
            <input
              type="text"
              name="phone"
              placeholder='Enter Phone'
              className='form-control rounded-0'
              onChange={handleChange}
            />
            {errors.phone && <span className="text-danger">{errors.phone}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="subject"><strong>Subject</strong></label>
            <input
              type="text"
              name="subject"
              placeholder='Enter Subject'
              className='form-control rounded-0'
              onChange={handleChange}
            />
            {errors.subject && <span className="text-danger">{errors.subject}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="message"><strong>Message</strong></label>
            <textarea
              name="message"
              placeholder='Enter Message'
              className='form-control rounded-0'
              onChange={handleChange}
            />
            {errors.message && <span className="text-danger">{errors.message}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
