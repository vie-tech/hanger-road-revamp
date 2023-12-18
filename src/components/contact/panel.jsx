import React, { useEffect, useState, useRef } from "react";
import Loader from "../utility/loader";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PanelNavbar from "./panelNavbar";
import { Link } from "react-router-dom";
import SinglePanel from "./singlePanel";

import "./panel.css";

function Panel() {
  const [adminContactData, setAdminContactData] = useState("");
  const [adminVendorData, setAdminVendorData] = useState("");
  const [showVendor, setShowVendor] = useState(false);
  const [deletedAction, setDeletedAction] = useState(false);
  
 

 const abortControllerRef = useRef(new AbortController());
 useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Unauthorized access");
      return;
    }

    try {
      abortControllerRef.current = new AbortController();
      const { signal } = abortControllerRef.current;

      const contactResponse = await fetch(
        "https://hri-backend-server.onrender.com/allContacts",
        {
          signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      const vendorResponse = await fetch(
        "https://hri-backend-server.onrender.com/allVendors",
        {
          signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (contactResponse.ok && vendorResponse.ok) {
        const contactData = await contactResponse.json();
        const vendorData = await vendorResponse.json();

        setAdminContactData(contactData);
        setAdminVendorData(vendorData);
        setDeletedAction((prev) => !prev);
      
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch operation was aborted");
      } else {
        console.error(error.message);
      }
    }
  };

  fetchData();

  // Cleanup function
  return () => {
    abortControllerRef.current.abort();
  };
}, [deletedAction]);
  const deleteVendor = async (data) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(
      `https://hri-backend-server.onrender.com/allVendors/${data}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    if (response.ok) {
      console.log("You have deleted a vendor ticket");
      setDeletedAction((prev) => !prev);
    } else if (!response.ok) {
      console.log("Could not delete vendor ticket");
    }
  };

  const deleteContact = async (data) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(
      `https://hri-backend-server.onrender.com/allContacts/${data}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    if (response.ok) {
      console.log("You have deleted a Contact ticket");
      setDeletedAction((prev) => !prev);
    } else if (!response.ok) {
      console.log("Could not delete Contact ticket");
    }
  };

  const contactContent =
    adminContactData &&
    adminContactData.users.map((v) => {
      return (
        <div
          key={v._id}
          className={`panel-data ${
            showVendor === false ? "toggle-display" : ""
          }`}
        >
          <h2>Name:</h2>
          <p> {v.name}</p>
          <h2>Email:</h2>
          <p>{v.email}</p>
          <h2>Subject</h2>
          <p>{v.subject}</p>
          <h2>Time Sent:</h2>
          <p className="createdAt">
            {formatDistanceToNow(new Date(v.createdAt), { addSuffix: true })}
          </p>

          <div className="card-buttons">
            <Link to={`/panel/contact-details/${v._id}`}>
              <button className="single-btn">Details</button>
            </Link>
            <button
              style={{ background: "crimson" }}
              onClick={() => {
                deleteContact(v._id);
              }}
            >
              Resolved
            </button>
          </div>
        </div>
      );
    });

  const vendorContent =
    adminVendorData &&
    adminVendorData.users.map((v) => {
      return (
        <div
          key={v._id}
          className={`panel-data ${showVendor ? "toggle-display" : ""}`}
        >
          <h2>Name:</h2>
          <p> {v.name}</p>
          <h2>Company:</h2>
          <p>{v.company}</p>
          <h2>Email:</h2>
          <p>{v.email}</p>
          <h2>Phone:</h2>
          <p>{v.phone}</p>
          <h2>Time Sent:</h2>
          <p className="createdAt">
            {formatDistanceToNow(new Date(v.createdAt), { addSuffix: true })}
          </p>

          <div className="card-buttons">
            <Link to={`/panel/vendor-details/${v._id}`}>
              <button className="single-btn">Details</button>
            </Link>
            <button
              style={{ background: "crimson" }}
              onClick={() => {
                deleteVendor(v._id);
              }}
            >
              Resolved
            </button>
          </div>
        </div>
      );
    });
   
   
  return (
    <>
      <section>
        <PanelNavbar
          showVendor={showVendor}
          setShowVendor={setShowVendor}
         
        />

        <section className="panel-section">
          {contactContent && contactContent}
          {vendorContent && vendorContent}
        </section>
      </section>
    </>
  );
}

export default Panel;
