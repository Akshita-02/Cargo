import React from "react";

import "./quotation.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeadTitle from "../../comman/HeadTitle";
const Quotation = () => {
  return (
    <>
      <Navbar />
      <HeadTitle />

      <div className="form-Section">
        <h2>Request Your Quote</h2>
        <p> Once we receive </p>
        <p> your request, we'll reply within 24-48 hours.</p>
        <div className="form-section">
          <div className="personal-data">
            <form action="/">
              <div className="first">
                <label for="fname">
                  Name
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Name"
                  />
                </label>
                <label for="fname">
                  Business Name
                  <input
                    type="text"
                    id="bName"
                    name="Business"
                    placeholder="Business Name"
                  />
                </label>
              </div>
              <div className="second">
                <label for="lname">Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                </label>
                <label for="lname">Phone
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
                </label>
              </div>
              <div className="third">
                <label>Select a service</label>
                <select name="Service" id="service">
                  <option value="ocian">Ocean Freight</option>
                  <option value="Air">Air Freight</option>
                </select>
                <label for="lname">Commoditu</label>
                <input
                  type="text"
                  id="comidity"
                  name="commidity"
                  placeholder="What will you be shiping"
                />
              </div>
              <label for="fname">Origin</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location City, Country"
              />

              <div className="additional-data">
                <h3>What additional Sevices will you need?</h3>
                <label>
                  Dryage
                  <input type="checkbox" id="b1" name="dryage" />{" "}
                </label>
                <label>
                  Storage
                  <input type="checkbox" id="b3" name="storage" />
                </label>
                <label>
                  Customs Clearance
                  <input type="checkbox" id="b4" name="customs Clearance" />
                </label>
                <label>
                  None
                  <input type="checkbox" id="b4" name="none" />{" "}
                </label>
              </div>

              <div className="additional-comment">
                <h5>Additional Comments </h5>
                <textarea name="" id=""></textarea>
              </div>
            </form>
          </div>
        </div>
        <button className="btn">Submit</button>
      </div>
      <Footer />
    </>
  );
};

export default Quotation;
