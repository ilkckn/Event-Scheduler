import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EventContextProvider from "./context/EventContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";

function App() {
  return (
    <EventContextProvider>
      <div className="App w-full min-h-[100vh]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home/:id/:name" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </EventContextProvider>
  );
}

export default App;