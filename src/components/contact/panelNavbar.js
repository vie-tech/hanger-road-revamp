import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'

function PanelNavbar({setShowVendor}) {
   
  return (
   <>
       <nav class="admin-navbar">
  <h3> HRI Admin Interface</h3>
  <ul class="admin-navlinks">
    <li onClick={()=>{setShowVendor(false)}}><p>Vendors</p></li>
    <li onClick={()=>{setShowVendor(true)}}><p>Contacts</p></li>
  </ul>
</nav>
<Outlet/>
   </>
  )
}

export default PanelNavbar