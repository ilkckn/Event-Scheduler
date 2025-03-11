import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EventContext = createContext();

function EventContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({}); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

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

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEvents(storedEvents);
  }, []);

  const handleChanges = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedInUser = users.find((data) => data.email === formData.email);

    if (loggedInUser) {
      console.log(loggedInUser);
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser)); 

      if (loggedInUser.id && loggedInUser.name) {
        navigate(`/home/${loggedInUser.id}/${loggedInUser.name}`);
      } else {
        console.error("Invalid user data: missing id or name");
        alert("Invalid user data: missing id or name");
      }
    } else {
      console.log("Login failed!");
      alert("Login failed! User not found.");
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
    if (storedUser && storedUser.email === formData.email) {
      alert("User with this email already exists!");
      return;
    }
    if (formData.password === confirmPassword) {
      const newUser = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        id: Date.now(),
      };
      setUsers([...users, newUser]); 
      setFormData({ email: "", password: "", name: "" }); 
      setConfirmPassword(""); 
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
        formData, 
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventContextProvider;