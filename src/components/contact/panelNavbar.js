import React, {useState, useEffect, useRef} from 'react'
import { Outlet } from 'react-router-dom'
import SinglePanel from './singlePanel'

function PanelNavbar({setShowVendor}) {
  const abortControllerRef = useRef(new AbortController());
 const [vendorCount, setVendorCount] = useState(0);
 const [contactCount, setContactCount] = useState(0);


  useEffect(()=>{
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
           
          setVendorCount(vendorData.count)
          setContactCount(contactData.count)
          
        
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
  }, [])

  return (
   <>
  <nav class="admin-navbar">
  <h3> HRI Admin Interface</h3>
  <ul class="admin-navlinks">
    <li onClick={()=>{setShowVendor(false)}}><p>Vendors {`(${vendorCount})`}</p></li>
    <li onClick={()=>{setShowVendor(true)}}><p>Contacts {`(${contactCount})`}</p></li>
  </ul>
</nav>
  
<Outlet/>
   </>
  )
}

export default PanelNavbar