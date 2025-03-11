import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import EventContextProvider, { EventContext } from "./context/EventContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import DetailPage from "./pages/DetailsPage";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppContent() {
  const { user } = useContext(EventContext);

  return (
    <div className="App w-full min-h-[100vh]">
      {user?.name && <Navbar />}

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

      {/* {user?.name && <Footer />} */}
    </div>
  );
}

function App() {
  return (
    <div className="App w-full min-h-[calc(100vh-16rem)]">
      <EventContextProvider>
        <AppContent />
      </EventContextProvider>
    </div>
  );
}

export default App;
