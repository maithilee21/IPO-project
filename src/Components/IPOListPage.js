import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/IPOListPage.css";

const IPOListPage = () => {
  const navigate = useNavigate();

  // Dummy data for IPOs
  const ipoList = [
    {
      id: 1,
      name: "GO AIR",
      img:"https://tse3.mm.bing.net/th?id=OIP.PGcAqoV-ChMFywkU95p6MQHaHa&pid=Api&P=0&h=180",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      lotSize: "100 Shares/5 Lots",
    },
    {
      id: 2,
      name: "BAJAJ ENERGY",
      img:"https://tse3.mm.bing.net/th?id=OIP.nTGsO0-1jnB75_zXpJAD6QAAAA&pid=Api&P=0&h=180",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      lotSize: "100 Shares/5 Lots",
    },
    {
      id: 3,
      name: "OYO",
      img:"https://static.vecteezy.com/system/resources/previews/018/970/086/original/oyo-white-logo-on-red-background-free-vector.jpg",
      issueDate: "To be announced",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      lotSize: "100 Shares/5 Lots",
    },
  ];

  // Navigate to details page with IPO ID
  const handleRowClick = (ipo) => {
    navigate(`/ipo-details/${ipo.id}`);
  };

  return (
    <div className="ipo-list-container">
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Company / Issue Date</th>
            <th>Issue Size</th>
            <th>Price Range</th>
            <th>Min Invest/Qty</th>
          </tr>
        </thead>
        <tbody>
          {ipoList.map((ipo) => (
            <tr key={ipo.id} onClick={() => handleRowClick(ipo)}>
              <td>
              <img
              src={ipoList.img}
               alt={ipoList.name}
              />
                <strong>{ipo.name}</strong>
                <p>{ipo.issueDate}</p>
              </td>
              <td>{ipo.issueSize}</td>
              <td>{ipo.priceRange}</td>
              <td>
                {ipo.minInvest}
                <br />
                {ipo.lotSize}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOListPage;
