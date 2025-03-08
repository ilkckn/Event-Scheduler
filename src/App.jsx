import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import EventContextProvider from "./context/EventContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import DetailPage from "./pages/DetailsPage";
import { useOutlet } from "react-router-dom";// rout
function App() {
  return (
    <EventContextProvider>
      <div className="App w-full min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home/:id/:name" element={<Home />} />
            <Route path="/detail/:eventid" element={<DetailPage />} />    //DetailPage
          </Route>
          {/* Protected Routes End */}
        </Routes>
      </div>
    </EventContextProvider>
  );
}
export default App;