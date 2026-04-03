import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './pages/Auth/Landing/Landing';
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Registration Page */}
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;