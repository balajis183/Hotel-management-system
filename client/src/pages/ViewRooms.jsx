import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function ViewRooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/rooms/get-all-rooms")

      .then((res) => {
        console.log(res);
        // toast.success(res.data.message);
        alert(res.data.message);
        setRooms(res.data.rooms);
      })
      .catch((err) => {
        toast.error("Failed to fetch rooms. Please try again.");
        console.log(err);
      });
  }, []);

  function handleRoomClick(room) {
    if (room.status === "Booked" || room.status === "Maintenance") {
      // alert(`Room is under ${room.status}. Please select another room.`);
      toast.info(`Room is under ${room.status}. Please select another room.`, {
        theme: "dark",
      });
    } else {
      toast.success(`The selected room is avaliable  `, { theme: "dark" });
      // navigate(`/viewrooms/booking/${room._id}`);
      setTimeout(() => {
        navigate(`/viewrooms/booking/${room._id}`);
      }, 1500);
    }
  }

  function displayRooms() {
    return (
      <div className="container py-4">
        <div className="row g-4">
          {rooms.map((room) => (
            <div key={room._id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title  fw-light">{room.hotel_name}</h2>
                  <p className="card-text">
                    <strong>Address:</strong> {room.address}
                  </p>
                  <p className="card-text">
                    <strong>Room Number:</strong> {room.room_number}
                  </p>
                  <p className="card-text">
                    <strong>Type:</strong> {room.room_type}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{room.price} / night
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong>{" "}
                    <span
                      className={`badge ${
                        room.status === "Available" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {room.status}
                    </span>
                  </p>
                  <p className="card-text">
                    <strong>Ratings:</strong>{" "}
                    {room.Ratings ? `${room.Ratings}/5` : "Not Rated"}
                  </p>
                </div>
                <div className="card-footer text-center">
                  {/* <Link to={`/viewrooms/booking/${room._id}`}> */}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRoomClick(room)}
                    // disabled={room.status !== "Available"} // Disable if not available
                  >
                    Book Now
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Layout>
        {/* <h1>Home page </h1> */}
        <h3 className="fw-semibold text-center text-success p-2 fw-light">
          {" "}
          Book your room in the Available hotels.
        </h3>
        {/* fetch the data from the data into diplay/view rooms page  */}
        <div className="d-flex m-2">{displayRooms()}</div>
      </Layout>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default ViewRooms;
