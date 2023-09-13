import React from "react";

import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeadTitle from "../../comman/HeadTitle";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeadTitle />
      <div className="h1">
        <h1>Contact Us</h1>
      </div>
      <form>
        <div className="left">
          <h3>Send your inquiry and we'll reply within 24-48 hours.</h3>
        </div>
        <div class="right">
          <div class="col">
            <label> First Name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label>Last Name</label>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
          <div class="col">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="col">
            <label>Message</label>
            <input type="text" class="form-control" placeholder="Message" />
          </div>
        </div>

        <button className="btn">Submit</button>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
