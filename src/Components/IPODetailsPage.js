import React from "react";
import { useParams, Link } from "react-router-dom";
import "../style/IPODetailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";




const IPODetailsPage = () => {
  const { ipoId } = useParams();

  const ipoDetailsData = {
    1: {
      name: "GO AIR",
      img:"https://tse3.mm.bing.net/th?id=OIP.PGcAqoV-ChMFywkU95p6MQHaHa&pid=Api&P=0&h=180",
      company: "GO AIR Private Limited",
      issueSize: "₹3,600 – 3,700 Cr.",
      priceRange: "₹100 – 200",
      minAmount: "₹50,000",
      lotSize: "150 shares/lots",
      issueDate: "12 Dec – 15 Dec 22",
      listedOn: "15 Dec 22",
      listingPrice: "₹150",
      listingGain: "₹10 (10.0%)",
      timeline: [
        { label: "Bidding starts", date: "12 Dec 2023" },
        { label: "Bidding ends", date: "15 Dec 2023" },
        { label: "Allotment finalization", date: "17 Dec 2023" },
        { label: "Refund initiation", date: "18 Dec 2023" },
        { label: "Demat transfer", date: "19 Dec 2023" },
        { label: "Listing date", date: "21 Dec 2023" },
      ],
      about: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?
    
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?`,
    },
    2: {
      name: "BAJAJ ENERGY",
      img:"https://tse3.mm.bing.net/th?id=OIP.nTGsO0-1jnB75_zXpJAD6QAAAA&pid=Api&P=0&h=180",
      company: "Bajaj Energy Limited",
      issueSize: "₹3,600 – 3,700 Cr.",
      priceRange: "₹100 – 200",
      minAmount: "₹50,000",
      lotSize: "150 shares/lots",
      issueDate: "10 Dec – 12 Dec 22",
      listedOn: "13 Dec 22",
      listingPrice: "₹160",
      listingGain: "₹15 (12.0%)",
      timeline: [
        { label: "Bidding starts", date: "10 Dec 2023" },
        { label: "Bidding ends", date: "12 Dec 2023" },
        { label: "Allotment finalization", date: "14 Dec 2023" },
        { label: "Refund initiation", date: "15 Dec 2023" },
        { label: "Demat transfer", date: "16 Dec 2023" },
        { label: "Listing date", date: "18 Dec 2023" },
      ],
      about: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?
       
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?`,
    },
    3: {
      name: "OYO",
      img:"https://static.vecteezy.com/system/resources/previews/018/970/086/original/oyo-white-logo-on-red-background-free-vector.jpg",
      company: "OYO Private Limited",
      issueSize: "₹3,600 – 3,700 Cr.",
      priceRange: "₹100 – 200",
      minAmount: "₹50,000",
      lotSize: "150 shares/lots",
      issueDate: "To be announced",
      listedOn: "To be announced",
      listingPrice: "₹150",
      listingGain: "₹10 (10.0%)",
      // timeline: [
      //   { label: "Bidding starts", date: "12 Dec 2023" },
      //   { label: "Bidding ends", date: "15 Dec 2023" },
      //   { label: "Allotment finalization", date: "17 Dec 2023" },
      //   { label: "Refund initiation", date: "18 Dec 2023" },
      //   { label: "Demat transfer", date: "19 Dec 2023" },
      //   { label: "Listing date", date: "21 Dec 2023" },
      // ],
      about: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?
       
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. Iste 
      dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis, 
      itaque tenetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem distinctio modi. 
      Iste dolore provident unde itaque omnis accusamus labore, ab doloremque saepe error sapiente expedita in. Perspiciatis,
       itaque tenetur?`,
    },
  };

  const ipoDetails = ipoDetailsData[ipoId];

  if (!ipoDetails) {
    return <div>IPO details not found</div>;
  }

  return (
    <div className="ipo-details-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; Market watch
      </nav>

      <div className="ipo-header">
       
        <div className="ipo-title">
        <div>
        <button className="back-button">
         <Link to="/">
        <FontAwesomeIcon icon={faAngleLeft} /> 
        </Link>
       </button>
        </div>

          <img
          src={ipoDetails.img}
            alt={ipoDetails.name}
          />
          <div>
            <h1>{ipoDetails.name}</h1>
            <p>{ipoDetails.company}</p>
          </div>
        </div>
        <div>
        <button className="download-button">download</button>
        </div>
        <button className="apply-button">Apply now</button>
      </div>

      <div className="ipo-details">
        <div className="details-head">
        <h2>IPO details</h2> 
       
        <div className="ipo-stats">
          <div>
            <p>Issue size</p>
            <h3>{ipoDetails.issueSize}</h3>
          </div>
          <div>
            <p>Price range</p>
            <h3>{ipoDetails.priceRange}</h3>
          </div>
          <div>
            <p>Minimum amount</p>
            <h3>{ipoDetails.minAmount}</h3>
          </div>
          <div className="lot-size">
            <p>Lot size</p>
            <h3>{ipoDetails.lotSize}</h3>
          </div>
          <div>
            <p>Issue date</p>
            <h3>{ipoDetails.issueDate}</h3>
          </div>
          <div className="listed-on">
            <p>Listed on</p>
            <h3>{ipoDetails.listedOn}</h3>
          </div>
          <div className="listed-price">
            <p>Listed price</p>
            <h3>{ipoDetails.listingPrice}</h3>
          </div>
          <div className="list-gain">
            <p>Listing gain</p>
            <h3>{ipoDetails.listingGain}</h3>
          </div>
          </div>
        </div>

        {/* <div className="ipo-timeline">
          <h2>IPO timeline</h2>
          <ul>
            {ipoDetails.timeline.map((event, index) => (
              <li key={index}>
                <div className="timeline-circle"></div>
                
                <p>{event.label}</p>
                <span>{event.date}</span>
            
              </li>
            ))}
          </ul>
        </div> */}

{/* <div className="ipo-timeline">
        <h3>IPO timeline</h3>
        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-circle active"></div>
            <p>Bidding Starts</p>
            <p>12 Dec 2023</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-circle active"></div>
            <p>Bidding Ends</p>
            <p>15 Dec 2023</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-circle active"></div>
            <p>Allotment Finalization</p>
            <p>18 Dec 2023</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-circle active"></div>
            <p>Refund Initiation</p>
            <p>18 Dec 2023</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-circle active"></div>
            <p>Demat transfer</p>
            <p>18 Dec 2023</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-circle active"></div>
            <p>Listing Date</p>
            <p>21 Dec 2023</p>
          </div>
        </div>
      </div> */}


<div className="timeline">
<h2>IPO timeline</h2>
<div className="ipo-timeline">

  <div className="ipo-step active">
    <div className="grey">✔</div>
    <div>
      <div className="step-label">Bidding starts</div>
      <div className="step-date">12 Dec 2023</div>
    </div>
  </div>
  <div className="ipo-step">
    <div className="circle">✔</div>
    <div>
      <div className="step-label">Bidding ends</div>
      <div className="step-date">15 Dec 2023</div>
    </div>
  </div>
  <div className="ipo-step">
    <div className="circle">✔</div>
    <div>
      <div className="step-label">Allotment finalisation</div>
      <div className="step-date">18 Dec 2023</div>
    </div>
  </div>
  <div className="ipo-step">
    <div className="circle">✔</div>
    <div>
      <div className="step-label">Refund initiation</div>
      <div className="step-date">18 Dec 2023</div>
    </div>
  </div>
  <div className="ipo-step">
    <div className="circle">✔</div>
    <div>
      <div className="step-label">Demat transfer</div>
      <div className="step-date">18 Dec 2023</div>
    </div>
  </div>
  <div className="ipo-step">
    <div className="circle">✔</div>
    <div>
      <div className="step-label">Listing date</div>
      <div className="step-date">21 Dec 2023</div>
    </div>
  </div>
</div>
</div>


        <div className="about-company">
          <h2>About the company</h2>
          <p>{ipoDetails.about}</p>
          <br />
          <p>{ipoDetails.about}</p>
        </div>
      </div>
    </div>
  );
};

export default IPODetailsPage;
