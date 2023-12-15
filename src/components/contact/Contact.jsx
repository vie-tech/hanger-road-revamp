import React, { useState } from "react";
import img from "../images/image33.jpeg";
import Back from "../common/Back";
import "./contact.css";
import swal from "sweetalert";


const Contact = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  content: ""
})

const [error, setError] = useState('')
const [emptyFields, setEmptyFields] = useState([])


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

async function handleSubmit(event) {
  event.preventDefault();

  
  try {
    const response = await fetch(`https://hri-backend-server.onrender.com/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json()
    
    if (response.ok) {
      swal(
        "Message Successfully sent",
        "We would be in touch as soon as possible",
        "success"
      );

      // Clear the form by resetting the state
      setFormData({
        name: "",
        email: "",
        subject: "",
        content: "",
      });

      setError('')
    } 
    if(!response.ok){
      setError(json.mssg)
      setEmptyFields(json.emptyFields)
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
} 

console.log(emptyFields)


  return (
    <>
      <section className="contact mb">
        <Back name="Contact" title={`Contact Us`} cover={img} />
        <div className="container">
      
          <form onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            { emptyFields.length > 0 ? (<p className="error-message">{error}</p>) : (<p></p>)}
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className={emptyFields.includes('Name') ? "error" : ""}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={emptyFields.includes('Email') ? "error" : ""}
              />
            </div>
            <input
             type="text"
              placeholder="Subject"
               name="subject"
               value={formData.subject}
               onChange={handleChange} 
               className={emptyFields.includes('Subject') ? "error" : ""} />
            <textarea 
            cols="30" 
            rows="10" 
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={emptyFields.includes('Content') ? "error" : ""}
            ></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
