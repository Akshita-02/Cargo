import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SimpleSlider from "../../components/HomeSlider/SimpleSlider";
const About = () => {
  return (
    <>
      <Navbar />
      <SimpleSlider />
      <div className="about_container">
        <h1>Welcome</h1>
        <div className="about-content">
          <p>
            Hana International Logistics is a full service freight forwarder
            dedicated to providing businesses with reliable, cost-effective
            shipping solutions. As a NVOCC, we are able to offer highly
            competitive rates and a wide range of sailing schedules with the
            best transit times thanks to our strong partnerships with major
            carriers and global network in the industry. We strive to make sure
            each shipment gets delivered on time with friendly customer service.
          </p>
          <p>
            We know no business is alike, which is why we we customize our
            services to the needs of each business. We handle LCL (Less Than
            Container Load) and FCL (Full Container Load) shipments so
            regardless of the size of your shipment, your business matters to
            us.
          </p>

          <p>
            Hana will work with our clients so they can have the most fluid
            experience possible.​
          </p>

          <button className="btn">View All Services</button>
        </div>

        <div className="mission">
          <h1>Our Mission</h1>
          <li>Delivering Timely and Safely</li>
          <li>Cost Effective Solutions</li>
          <li>Competitive Rates</li>
          <li>High Customer Satisfaction</li>
        </div>

        <div className="contact-us">
          <h4>Contact us today for a free rate quotation.</h4>
          <button className="btn">Request Quote</button>
        </div>
      </div>
      <div className="license">
        <div className="licence-content">
          <h3>FMC LICENSED</h3>
          <p>
            Hana Freight, LLC. DBA Hana International Logistics OTI No. 026502NF
            Hana Group, LLC. OTI No. 030101NF
          </p>

          <p>
            The Federal Maritime Commission (FMC) is a US federal agency
            responsible for regulating US ocean borne international
            transportation. Licensed NVOCC's can negotiate contracts with steam
            ship lines and issue their own house bill of lading. Furthermore,
            they are bonded which provides a safety net and more support in case
            of emergencies due to the strict regulations set by the FMC.
          </p>

          <h3>NVOCC</h3>
          <p>
            We are a NVOCC (Non-Vessel Operating Common Carrier) Freight
            Forwarder. We provide ocean freight services as a "carrier" and are
            able to issue their own House Bill of Lading. NVOCC can offer
            freedom and flexibility with finding the right vessel and sailing
            schedule that fits your needs and budget.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
