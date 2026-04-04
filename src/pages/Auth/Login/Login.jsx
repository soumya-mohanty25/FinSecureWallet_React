import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    console.log("LOGIN RESPONSE:", data);

    if (response.ok) {
      alert("Login Successful 🚀");
      navigate("/"); // later change to dashboard
    } else {
      alert(data.message || "Login Failed ❌");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server not reachable");
  }
};

  return (
    <div className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* 🌌 MOVING BACKGROUND GLOWS */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] top-[-120px] left-[-120px] animate-float-slow"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] bottom-[-120px] right-[-120px] animate-float-fast"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[120px] top-1/2 left-1/3 animate-float-slow"></div>

      {/* 🔲 MAIN WRAPPER */}
      <div className="relative z-10 w-[92%] max-w-6xl flex items-center justify-between">

        {/* 📄 LEFT SIDE (TEXT ONLY - NO CARD) */}
        <div className="w-1/2 pr-16">

          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 text-transparent bg-clip-text">
            FinSecure Wallet
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            The FinSecure Wallet offers a seamless way to manage your monthly finances
            by allowing you to spend securely while automatically categorizing every transaction.
          </p>

          <div className="mt-8 w-24 h-[2px] bg-blue-500/50 blur-sm"></div>

        </div>

        {/* ➗ VERTICAL DIVIDER */}
        <div className="w-[2px] h-[350px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

        {/* 🧾 RIGHT SIDE (LOGIN CARD ONLY) */}
        <div className="w-1/2 pl-16 flex justify-center">

          <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">

            <h2 className="text-2xl font-semibold mb-6">
              Welcome Back
            </h2>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Citizen Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none
              focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-6 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none
              focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition"
            />

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-purple-500/30"
            >
              Login
            </button>

            {/* FOOTER */}
            <p className="text-xs text-gray-500 mt-6 text-center">
              Secure authentication powered by FinSecure
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;