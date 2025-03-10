import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { Link } from "react-router-dom";  ////for link 

function Home() {
  console.log("Home component rendered");
  const { handleLogout, events } = useContext(EventContext);
  const { id, name } = useParams();
  const eventid ="1";   //// test value
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User ID:", id);
    console.log("User Name:", name);
  }, [id, name]);

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-10">Home</h1>
      <div>
                
              </div>
      {id && name ? (
        <p className="text-lg mt-4">
          Welcome, <strong>{name}</strong>!
        </p>
      ) : (
        <p className="text-lg mt-4 text-red-500">No user logged in.</p>
      )}

      <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card p-4 border rounded shadow cursor-pointer"
            onClick={() => handleCardClick(event.id)}
          >
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
        
      </div>

      <button
        onClick={handleLogout}
        className="px-[3rem] py-[.5rem] bg-amber-500 rounded cursor-pointer mt-5"
      >
        Logout
      </button>
      

      
    </div>

  );
}

export default Home;
