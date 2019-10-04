import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import socketio from "socket.io-client";

import "./styles.css";
import api from "../../services/api";
import { request } from "http";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  const [bookings, setBookings] = useState([]);

  const user_id = localStorage.getItem("user");
  const socket = useMemo(
    () => socketio("http://localhost:8082", { query: { user_id } }),
    [user_id]
  );

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", { headers: { user_id } });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  useEffect(() => {
    socket.on("booking_request", booking => {
      setBookings([...bookings, booking]);
    });
  }, [bookings, socket]);

  return (
    <>
      <ul className="bookings">
        {bookings.map(booking => (
          <li key={booking._id}>
            <p>
              <strong>{booking.user.email}</strong> está solicitando uma reserva
              em <strong>{booking.spot.company}</strong> para a data:{" "}
              <strong>{request.date}</strong>
            </p>
            <button className="accept">ACEITAR</button>
            <button className="reject">REJEITAR</button>
          </li>
        ))}
      </ul>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header
              style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
            ></header>
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}
