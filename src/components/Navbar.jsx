import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

function Navbar() {
  const { user, handleLogout } = useContext(EventContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar w-full h-[8rem] flex items-center justify-between bg-blue-950 text-white px-10">
      <div className="logo text-[1.4rem] tracking-[1px]">Event Scheduler</div>
      <div className="nav-links flex items-center gap-4">
        <div className="user">
          {user?.name ? ( 
            <p className="text-lg">
              Welcome, <strong>{user.name}</strong>!
            </p>
          ) : (
            <p className="text-lg text-blue-500">No user logged in.</p>
          )}
        </div>
        <ul className="flex items-center gap-4">
          {user?.name && ( 
            <NavLink to={`/home/${user.id}/${user.name}`} className="text-white">
              Home
            </NavLink>
          )}
        </ul>
        {user?.name ? (
          <button onClick={handleLogoutClick} className="bg-red-500 px-4 py-2 rounded cursor-pointer">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="bg-green-500 px-4 py-2 rounded text-white cursor-pointer">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;