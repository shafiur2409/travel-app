import React from "react";

const ContactForm = () => {
  return (
    <form>
      <label>Name:</label>
      <input type="text" placeholder="Your Name" required />
      
      <label>Email:</label>
      <input type="email" placeholder="Your Email" required />
      
      <label>Message:</label>
      <textarea rows="4" placeholder="Your Message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
