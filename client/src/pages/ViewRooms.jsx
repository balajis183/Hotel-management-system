import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/rooms/get-all-rooms")

      .then((res) => {
        console.log(res);
        alert(res.data.message);
        setRooms(res.data.rooms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function displayRooms() {
    return rooms.map((room, index) => {
      return (
        <div key={index} className="p-3 border border-success">
          <h2 className="fw-light">{room.hotel_name}</h2>
          <p>{room.address}</p>
          <p>{room.status}</p>

          <Link to={`/rooms/${room._id}`}>
            <button className="btn btn-primary ">Book Now</button>
          </Link>
        </div>
      );
    });
  }

  return (
    <div>
      <Layout>
        <h1 className="text-center p-1 ">Available rooms</h1>

        {/* <h1>Home page </h1> */}
        <h3 className="fw-semibold text-center text-success p-2">
          {" "}
          Select your room
        </h3>
        <div className="d-flex m-2">{displayRooms()}</div>

        {/* fetch the data from the data into diplay/view rooms page  */}
      </Layout>
    </div>
  );
}

export default ViewRooms;
