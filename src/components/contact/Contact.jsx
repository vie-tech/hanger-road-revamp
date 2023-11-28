import React from "react"
import img from "../images/image33.jpeg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {

  
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact' title={`Contact Us`} cover={img} />
        <div className='container'>
          <form className='shadow' method="post" action="/contact">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name="name" />
              <input type='text' placeholder='Email' name="email" />
            </div>
            
            <input type='text' placeholder='Subject' name="subject" />
            <textarea cols='30' rows='10' name="content" ></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
