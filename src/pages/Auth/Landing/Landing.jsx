import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center relative overflow-hidden">

            {/* 🔵 Animated Glow Effects */}
            <div className="absolute w-80 h-80 bg-blue-500 opacity-30 blur-3xl top-10 left-10 animate-float-slow"></div>

            <div className="absolute w-80 h-80 bg-purple-500 opacity-30 blur-3xl bottom-10 right-10 animate-float-fast"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent)]"></div>
            {/* 🟣 Extra Moving Glow */}
            <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-3xl top-1/2 left-1/3 animate-float-slow"></div>

            {/* 🔳 Glass Card */}
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-12 text-center shadow-2xl max-w-md w-full">

                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">
                    FinSecure Wallet
                </h1>

                <p className="text-gray-300 mb-8 text-lg">
                    Secure • Fast • Reliable Digital Payments
                </p>

                {/* 🚀 Buttons */}
                <div className="flex justify-center gap-6">
                    <button
                        onClick={() => navigate("/login")}
                        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                        Login
                    </button>

                    <button
                        onClick={() => navigate("/register")}
                        className="px-6 py-3 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 transition-all duration-300"
                    >
                        Register
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Landing;