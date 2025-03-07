import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";

function Home() {
  console.log("Home component rendered");
  const { handleLogout } = useContext(EventContext);
  const { id, name } = useParams();

  useEffect(() => {
    console.log("User ID:", id);
    console.log("User Name:", name);
  }, [id, name]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-10">Home</h1>

      {id && name ? (
        <p className="text-lg mt-4">
          Welcome,{" "}
          <strong>
            {name}
          </strong>
          !
        </p>
      ) : (
        <p className="text-lg mt-4 text-red-500">No user logged in.</p>
      )}

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
