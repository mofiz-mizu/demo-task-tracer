import React from "react";

function Contact() {
  return (
    <div className="container">
      <h3>Contact Us</h3>
      <div className="form-control">
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div className="form-control">
        <label>Message</label>
        <textarea name="message" placeholder="Type Your Message..." rows="10" cols="57"></textarea>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </div>
  );
}

export default Contact;
