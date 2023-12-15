import React, { useState } from "react";
import img from "../images/image33.jpeg";
import Back from "../common/Back";
import "./vendor.css";
import swal from "sweetalert";

const Vendor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    address: "",
    website: ""
  });

  const [error , setError] = useState('')
  const [emptyFields, setEmptyFields]= useState([])
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.company === ""||
      formData.address === ""||
      formData.website === ""
    ) {
      return;
    }

    try {
      const response = await fetch(
        `https://hri-backend-server.onrender.com/vendor-registration-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
          phone: "",
          company: "",
        });
      } if(!response.ok) {
        const json = await response.json();
        setError(json.mssg)
        setEmptyFields(json.emptyFields)
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  console.log(error)
  console.log(emptyFields)
  return (
    <>
      <section className="contact mb">
        <Back
          name="Become a vendor"
          title={`Join our team today`}
          cover={img}
        />
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <p className="title">Fill the form </p>
            <p className="message">Signup now to become a vendor </p>

            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required={true}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <span>Fullname</span>
            </label>

            <label>
              <input
                className="input"
                type="tel"
                placeholder=""
                required={true}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <span>Phone</span>
            </label>
            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required={true}
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <span>Company Name</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required={true}
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <span>Company address</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required={true}
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
              <span>Website Url</span>
            </label>

          

            <label>
              <input
                className="input"
                type="email"
                placeholder=""
                name="email"
                required={true}
                value={formData.email}
                onChange={handleChange}
              />
              <span>Email</span>
            </label>

            <button className="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Vendor;
