import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import "./singlePanel.css"

function SinglePanel() {
  const { contactId } = useParams();
  const [singleData, setSingleData] = useState();

  const fetchSingleData = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Unathorized access");
      return;
    }

    try {
      const response = await fetch(
        `https://hri-backend-server.onrender.com/allVendors/${contactId}`,
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


  

  console.log(singleData)
  const {isLoading} = useQuery('singleData', fetchSingleData, {
    refetchInterval: 120000,
    refetchIntervalInBackground: true,
  })
  return  <>
  {singleData && (
        <div className="card-container">
          <div className="info-card">
            <h1 className="name">{singleData.user.name}</h1>
            <p className="email">{singleData.user.email}</p>
          </div>
          <div className="details-section">
            <div className="detail-row">
              <div className="detail-label">Company:</div>
              <div className="detail-content">{singleData.user.company}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Phone:</div>
              <div className="detail-content">{singleData.user.phone}</div>
            </div>
          </div>
        </div>
      )}
</>
}

export default SinglePanel;