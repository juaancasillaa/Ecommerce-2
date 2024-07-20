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

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.values});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/Contact', values)
      .then(res => console.log("Successfully Submitted"))
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" name="name" placeholder='Enter Name' className='form-control rounded-0' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" name="email" placeholder='Enter Email' className='form-control rounded-0' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="phone"><strong>Phone</strong></label>
            <input type="phone" name="phone" placeholder='Enter Phone' className='form-control rounded-0' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="subject"><strong>Subject</strong></label>
            <input type="text" name="subject" placeholder='Enter Subject' className='form-control rounded-0' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="message"><strong>Message</strong></label>
            <input type="text" name="message" placeholder='Enter Message' className='form-control rounded-0' onChange={handleChange} />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;