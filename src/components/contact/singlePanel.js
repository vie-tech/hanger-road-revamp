import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import "./singlePanel.css"
import PanelNavbar from "./panelNavbar";


function SinglePanel({vendorCount, contactCount}) {
  const { vendorId } = useParams();
  const [singleData, setSingleData] = useState("");

  const fetchSingleData = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Unathorized access");
      return;
    }

    try {
      const response = await fetch(
        `https://hri-backend-server.onrender.com/allVendors/${vendorId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (response.ok) {
        const dataFromServer = await response.json();
        setSingleData(dataFromServer);
      } else {
        console.log("Could not fetch data from server, try again later");
      }
    } catch (err) {
      console.log(err.message);
    }
  };


  

  const {isLoading} = useQuery('singleData', fetchSingleData, {
    refetchInterval: 120000,
    refetchIntervalInBackground: true,
  })
  return  <>

  {singleData && (
        <div className="card-container">
          <div className="info-card">
            <h1 className="name">{singleData.user.company}</h1>
            <p className="email">{singleData.user.email}</p>
          </div>
          <div className="details-section">
            <div className="detail-row">
              <div className="detail-label">Name:</div>
              <div className="detail-content">{singleData.user.name}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Phone:</div>
              <div className="detail-content">{singleData.user.phone}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Website:</div>
              <div className="detail-content">{singleData.user.website}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Address:</div>
              <div className="detail-content">{singleData.user.address}</div>
            </div>
          </div>
        </div>
      )}

</>
}

export default SinglePanel;
