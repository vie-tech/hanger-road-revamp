import React from "react"
import img from "../images/image33.jpeg"
import Back from "../common/Back"
import "./vendor.css"

const Vendor = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Become a vendor' title={`Join our team today`} cover={img} />
        <div className='container'>
        <form class="form">
    <p class="title">Fill the form </p>
    <p class="message">Signup now to become a vendor </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required="true"/>
            <span>Fullname</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required="true"/>
            <span>Company</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required="true"/>
        <span>Email</span>
    </label> 
        
    
    <button class="submit">Submit</button>
</form>
        </div>
      </section>
    </>
  )
}

export default Vendor
