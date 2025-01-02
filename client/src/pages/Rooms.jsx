import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function Rooms() {
  const [hotel_name, setHotel_name] = useState("");
  const [room_number, setRoom_number] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [amenities, setAmenities] = useState("");
  const [max_occupancy, setMaxOccupancy] = useState("");
  const [Ratings, setRatings] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formObj = {
      hotel_name,
      room_number,
      type,
      price,
      status,
      image,
      amenities,
      max_occupancy,
      Ratings,
    };
    console.log(formObj);

    axios
      .post("http://localhost:8000/rooms/create-room", formObj)
      .then((res) => {
        console.log(res);
        alert("Room Added successfully");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  return (
    <div>
      <Layout>
        <div className=" card shadow-lg w-50 container border border-5 border-success rounded-4 ">
          <h1 className="text-center mb-3">Create Room</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group p-1">
              <label htmlFor="hotel_name">Hotel Name:</label>
              <input
                type="text"
                name="hotel_name"
                id="hotel_name"
                className="form-control"
                placeholder="Enter the Hotel Name"
                required
                onChange={(event) => setHotel_name(event.target.value)}
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="room_number">Room No:</label>
              <input
                type="text"
                name="room_number"
                id="room_number"
                className="form-control"
                placeholder="Enter the Room number of the hotel"
                onChange={(event) => {
                  setRoom_number(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="type">Room Type:</label>
              <input
                type="text"
                name="type"
                id="type"
                className="form-control"
                placeholder="Enter the room types "
                required
                onChange={(event) => {
                  setType(event.target.value);
                }}
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="price">Price of the room (Per Day):</label>
              <input
                type="Number"
                name="price"
                id="price"
                className="form-control"
                placeholder="Enter the Room Price"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                required
              />
            </div>

            <label htmlFor="status">Room Status:</label>
            <select
              name="status"
              id="status"
              className="form-control"
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="" disabled selected>
                Select the room status
              </option>
              <option value="1">Available</option>
              <option value="2">Booked</option>
              <option value="3">Maintenance</option>
            </select>

            <div className="form-group p-1">
              <label htmlFor="amenities">Facilites</label>
              <input
                type="text"
                name="amenities"
                id="amenities"
                className="form-control"
                placeholder="Enter the facilites"
                required
                onChange={(event) => {
                  setAmenities(event.target.value);
                }}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="max_occupancy">Max occupancy of the room :</label>
              <input
                type="Number"
                name="max_occupancy"
                id="max_occupancy"
                className="form-control"
                placeholder="Enter the max occupancy of the room "
                required
                onChange={(event) => {
                  setMaxOccupancy(event.target.value);
                }}
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="Ratings">Ratings:</label>
              <input
                type="Number"
                name="Ratings"
                id="Ratings"
                className="form-control"
                placeholder="Select the Ratings of the Room"
                required
                onChange={(event) => {
                  setRatings(event.target.value);
                }}
              />
            </div>

            <div className="form-group  p-1">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                accept="image/**"
                name="image"
                id="placeimage"
                className="form-control"
                onChange={(event) => {
                  setImage(event.target.files[0]);
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

export default Rooms;
