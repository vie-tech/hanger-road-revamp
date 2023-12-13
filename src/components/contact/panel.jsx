import React, { useEffect, useState } from "react";
import Loader from "../utility/loader";

import PanelNavbar from "./panelNavbar";
import { Link } from "react-router-dom";

import "./panel.css";

function Panel() {
  const [adminContactData, setAdminContactData] = useState("");
  const [adminVendorData, setAdminVendorData] = useState("");
  const [showVendor, setShowVendor] = useState(false);
  const [deletedAction, setDeletedAction] = useState(false)


  useEffect(()=>{
    const fetchAdminData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("Unathorized access");
        return;
      }
  
      try {
        const response = await fetch(
          "https://hri-backend-server.onrender.com/allContacts",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
  
        if (response.ok) {
          const dataFromContactServer = await response.json();
          setAdminContactData(dataFromContactServer);
        } else {
          console.error(
            "Cannot login into server and access contacts from database"
          );
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const fetchVendorData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("Unathorized access");
        return;
      }
  
      try {
        const response = await fetch(
          "https://hri-backend-server.onrender.com/allVendors",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
  
        if (response.ok) {
          const dataFromVendorServer = await response.json();
          setAdminVendorData(dataFromVendorServer);
        } else {
          console.error(
            "Cannot login into server and access vendors from database"
          );
        }
      } catch (error) {
        console.error(error.message);
      }
    };
  
    fetchAdminData()
    fetchVendorData()
  
  }, [deletedAction])

  
  
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
      setDeletedAction(prev=>!prev)
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
      setDeletedAction(prev=>!prev)
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
          <h2>Content</h2>
          <p>{v.content}</p>
          <p>Created:</p>
          <p className="createdAt">{v.createdAt}</p>

          <div className="card-buttons">
            <Link to={`/vendor/${v._id}`}>
              <button className="single-btn">Details</button>
            </Link>
            <button
              style={{ background: "crimson" }}
              onClick={() => {
                deleteContact(v._id);
              }}
            >
              Delete
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

          <div className="card-buttons">
            <Link to={`/panel/${v._id}`}>
              <button className="single-btn">Details</button>
            </Link>
            <button
              style={{ background: "crimson" }}
              onClick={() => {
                deleteVendor(v._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

  return (
    <>
      <section>
        <PanelNavbar showVendor={showVendor} setShowVendor={setShowVendor} />

        
          <section className="panel-section">
            {contactContent && contactContent}
            {vendorContent && vendorContent}
          </section>
       
      </section>
    </>
  );
}

export default Panel;
