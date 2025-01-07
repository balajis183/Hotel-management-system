import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Customer() {
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token); 

    if (!token) {
      alert("Unauthorized access. Please login.");
      navigate("/login"); // Redirect to login page
    }
  }, [navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formObj = {
      gender,
      contact,
      dob,
      address,
      nationality,
    };
    console.log(formObj);

    const token = localStorage.getItem("token"); // Retrieve token from local storage

    if (!token) {
      alert("Unauthorized access. Please login.");
      navigate("/login");
      return;
    }

    axios
      .post("http://localhost:8000/customers/create-customer", formObj, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })

      .then((res) => {
        console.log(res);
        alert("Customer data saved successfully");
      })

      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          alert(err.response.data.message); // Show server error message
        } else {
          console.log("Error", err);
          alert("Error in saving details ");
        }
      });
  }

  return (
    <div>
      <Layout>
        <div className="container card border border-4 border-success rounded-3 w-50 shadow-lg">
          <h2 className="text-center mb-3">
            Update your details for serving better
          </h2>

          <form onSubmit={handleSubmit}>
            {/* gender  */}
            <div className="form-group p-1 mb-2">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className="form-control"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* contact  */}
            <div className="form-group p-1 mb-2">
              <label htmlFor="contact">Contact</label>
              <input
                type="Number"
                name="contact"
                id="contact"
                className="form-control"
                placeholder="Enter your contact Number"
                onChange={(event) => {
                  setContact(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group p-1 mb-2">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="Date"
                name="dob"
                id="dob"
                className="form-control"
                placeholder="Enter your Date of Birth"
                onChange={(event) => {
                  setDob(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group p-1 mb-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                placeholder="Enter your address"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group ">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="form-control"
                placeholder="Enter your nationality"
                onChange={(event) => {
                  setNationality(event.target.value);
                }}
              />
            </div>

            <div className="form-group d-flex justify-content-center ">
              <input
                type="submit"
                className="btn btn-primary p-3 m-3  rounded-4 "
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Customer;
