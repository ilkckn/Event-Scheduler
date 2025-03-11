import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import AddEntryModal from "../components/AddEntry";

function Home() {
  console.log("Home component rendered");
  const { handleLogout, events } = useContext(EventContext);
  const { id, name } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("diaryEntries")) || []
  );

  useEffect(() => {
    console.log("User ID:", id);
    console.log("User Name:", name);
  }, [id, name]);

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const handleSave = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start py-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block mt-4 cursor-pointer"
        onClick={handleOpenModal}
      >
        Add New Event
      </button>

      {showModal && (
        <AddEntryModal close={handleCloseModal} onSave={handleSave} />
      )}

      <div className="events-grid grid grid-cols-1 flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="event-card w-[30rem] p-4 border rounded shadow cursor-pointer sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] bg-blue-950"
            onClick={() => handleCardClick(entry.id)}
          >
            <p>
              <span className="font-medium text-blue-400">ID:</span> {entry.id}
            </p>
            <h2 className="text-[1.3rem] text-white font-normal tracking-[1px] capitalize">
              <span className="font-normal text-blue-400">Title:</span>{" "}
              {entry.title}
            </h2>
            <p className="text-white text-[1rem]">
              <span className="text-blue-400 text-[1.1rem] font-normal">
                Entry Date:
              </span>{" "}
              {entry.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
