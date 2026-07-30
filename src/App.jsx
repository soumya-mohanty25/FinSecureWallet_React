import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './pages/Auth/Landing/Landing';
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import VerifyOtp from "./pages/Auth/VerifyOtp/VerifyOtp.jsx";
import CitizenDashboard from "./pages/Citizen/Dashboard/CitizenDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<CitizenDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;