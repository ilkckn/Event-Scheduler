import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EventContext = createContext();

function EventContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([
    { id: 1, title: "Event 1", description: "Description for Event 1" },
    { id: 2, title: "Event 2", description: "Description for Event 2" },
    { id: 3, title: "Event 3", description: "Description for Event 3" },
  ]);

 // const [events, setEvents] = useState([]);

  useEffect(() => {
    const userAPI = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUsers(data);
        console.log(data);
      } catch (error) {}
    };
    userAPI();
  }, []);

  /*
  useEffect( () => {
    // Fetch events from an API or local storage
    // const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    async function fetchEvents() {
      try {
        const response = await fetch("http://localhost:3001/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchEvents();
  }, []);

  */

  const handleChanges = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.id]: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedInUser = users.find((data) => data.email === user.email);

    if (loggedInUser) {
      console.log(loggedInUser);
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      if (loggedInUser.id && loggedInUser.name) {
        navigate(`/home/${loggedInUser.id}/${loggedInUser.name}`);
      } else {
        console.error("Invalid user data: missing id or name");
      }
    } else {
      console.log("Login failed!");
    }
  };

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === user.email) {
      alert("User with this email already exists!");
      return;
    }
    if (user.password === confirmPassword) {
      const newUser = {
        email: user.email,
        password: user.password,
        name: user.name,
        id: Date.now(),
      };
      setUsers([...users, newUser]);
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/login");
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleLoginRegisterToggle = () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  return (
    <EventContext.Provider
      value={{
        handleLoginRegisterToggle,
        handleChanges,
        handleLogin,
        handleRegister,
        handleLogout,
        confirmPassword,
        setConfirmPassword,
        handleConfirmPasswordChange,
        user,
        users,
        events,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventContextProvider;
