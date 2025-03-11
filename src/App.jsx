import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import EventContextProvider from "./context/EventContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import DetailPage from "./pages/DetailsPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <EventContextProvider>
      <div className="App w-full min-h-[100vh]">
        {/*<div className="heading tracking-out-expand-fwd absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-blue-950 z-10">
          <h1 className="text-center text-[4rem] uppercase font-[Sigmar] font-extralight tracking-[2px]">
            Welcome to our Event Scheduler
          </h1 
        </div>
        */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home/:id/:name" element={<Home />} />
            <Route path="/event/:eventid" element={<DetailPage />} />
          </Route>
          {/* Protected Routes End */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </EventContextProvider>
  );
}
export default App;

