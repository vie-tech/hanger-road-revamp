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
    const response = await fetch(`http://localhost:9999/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}


  return (
    <>
      <section className="contact mb">
        <Back name="Contact" title={`Contact Us`} cover={img} />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
             type="text"
              placeholder="Subject"
               name="subject"
               value={formData.subject}
               onChange={handleChange}  />
            <textarea 
            cols="30" 
            rows="10" 
            name="content"
            value={formData.content}
            onChange={handleChange}></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
