import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import "./singleContact.css";

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
        `https://hri-backend-server.onrender.com/allContacts/${contactId}`,
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

  const { isLoading } = useQuery("singleData", fetchSingleData, {
    refetchInterval: 120000,
    refetchIntervalInBackground: true,
  });
  return (
    <>
      {singleData && (
  <div className="single-panel">
    <header className="panel-header">
      <h1>{singleData.user.subject}</h1>
      <div className="sender-info">
        <span>{singleData.user.name}</span>
        <span>{singleData.user.email}</span>
      </div>
    </header>
    <main className="panel-content">
      <p className="content-label">Content:</p>
      <p>{singleData.user.content}</p>
      </main>
  </div>
)}

    </>
  );
}

export default SinglePanel;
