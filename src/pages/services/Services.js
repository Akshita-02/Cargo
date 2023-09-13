import React from "react";
import "./services.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import sCard1 from "../../Assets/card1.jpg";
import sCard2 from "../../Assets/card2.webp";
import sCard3 from "../../Assets/card3.jpg";
import sCard4 from "../../Assets/card4.webp";
import netimg from "../../Assets/networking.webp";
import flowCht from "../../Assets/flowChart.gif";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="service-container">
        <div className="service_header">
          <img
            src="https://static.wixstatic.com/media/1525cd_663c38c007e24e38932fbd8483b2d94f~mv2.jpg/v1/fill/w_1899,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1525cd_663c38c007e24e38932fbd8483b2d94f~mv2.jpg"
            alt="service"
          />
        </div>
        <div className="service-heading">
          <h1>Our Services</h1>
        </div>

        <div className="services-content">
          <div className="col12">
            <h2>Expansive Network in Asia</h2>
            <p>All major ports in Asia services</p>
          </div>
          <div className="col2">
            <h2>Competitive Rates With Major Carriers</h2>
            <p>Maersk, HMM, Evergreen, ONE, CMA, and more. Quick Quotation.</p>
          </div>
          <div className="col3">
            <h2>Industry Experience</h2>
            <p>Over 20 years experience specializing in various commodities.</p>
          </div>
        </div>

        <div className="service-details">
          <p>
            We offer exceptional services to businesses nationwide. As a leading
            provider in our industry, we pride ourselves on our professionalism
            and reliability. With a large network of experienced overseas
            agents, our shipments reach its destination safely and efficiently.
            We look forward to helping your business with its daily logistics
            needs and becoming your trusted partner in success.
          </p>
        </div>

        <div className="service-list">
          <h1>Our Services</h1>

          <div className="service-card">
            <div className="card">
              <img src={sCard1} alt="sCard" />

              <h3>Ocean Freight FCL/LCL</h3>

              <p>
                We are able to offer highly competitive rates and a wide range
                of sailing schedules with the best transit times thanks to our
                strong partnerships with major carriers and global network in
                the industry.
              </p>
              <p>
                We handle both LCL (Less Than Container Load) and FCL (Full
                Container Load) shipments so regardless of the size of your
                business, Hana will work with our clients so they can have the
                most fluid transaction and experience possible.{" "}
              </p>
            </div>

            <div className="card">
              <img src={sCard2} alt="sCard2" />

              <h3>Customs Clearance ISF Filing</h3>

              <p>
                All international cargo must go through a rigid customs
                clearance process. Rules, regulations and laws differ from
                country to country and sometimes port to port within the same
                country. Customs clearance work involves preparation and
                submission of documentations required to facilitate export or
                imports into the country, representing client during customs
                examination, assessment, payment of duty and co taking delivery
                of cargo from customs after clearance along with documents.
                Having the right customs broker will facilitate your shipments
                without any delays or problems.
              </p>
            </div>

            <div className="card">
              <img src={sCard3} alt="sCard2" />

              <h3>Customs Clearance ISF Filing</h3>

              <p>
                All international cargo must go through a rigid customs
                clearance process. Rules, regulations and laws differ from
                country to country and sometimes port to port within the same
                country. Customs clearance work involves preparation and
                submission of documentations required to facilitate export or
                imports into the country, representing client during customs
                examination, assessment, payment of duty and co taking delivery
                of cargo from customs after clearance along with documents.
                Having the right customs broker will facilitate your shipments
                without any delays or problems.
              </p>
            </div>

            <div className="card">
              <img src={sCard4} alt="sCard2" />

              <h3>Customs Clearance ISF Filing</h3>

              <p>
                All international cargo must go through a rigid customs
                clearance process. Rules, regulations and laws differ from
                country to country and sometimes port to port within the same
                country. Customs clearance work involves preparation and
                submission of documentations required to facilitate export or
                imports into the country, representing client during customs
                examination, assessment, payment of duty and co taking delivery
                of cargo from customs after clearance along with documents.
                Having the right customs broker will facilitate your shipments
                without any delays or problems.
              </p>
            </div>
          </div>
        </div>

        <div className="shipment-sec">
          <div className="networking">
            <div className="n-detail">
              <h3>Networking Together, Shipment After Shipment</h3>
            </div>
            <div className="img">
              <img src={netimg} alt="network" />
            </div>
          </div>
          <div className="flowchart">
            <img src={flowCht} alt="flowChart" />
          </div>
        </div>

        <div className="license">
          <div className="licence-content">
            <h3>FMC LICENSED</h3>
            <p className="one">
              Hana Freight, LLC. DBA Hana International Logistics OTI No.
              026502NF Hana Group, LLC. OTI No. 030101NF
            </p>

            <p>
              The Federal Maritime Commission (FMC) is a US federal agency
              responsible for regulating US ocean borne international
              transportation. Licensed NVOCC's can negotiate contracts with
              steam ship lines and issue their own house bill of lading.
              Furthermore, they are bonded which provides a safety net and more
              support in case of emergencies due to the strict regulations set
              by the FMC.
            </p>

            <h3>NVOCC</h3>
            <p>
              We are a NVOCC (Non-Vessel Operating Common Carrier) Freight
              Forwarder. We provide ocean freight services as a "carrier" and
              are able to issue their own House Bill of Lading. NVOCC can offer
              freedom and flexibility with finding the right vessel and sailing
              schedule that fits your needs and budget.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
