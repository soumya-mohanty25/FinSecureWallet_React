import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailId: "",
        gender: "",
        address: "",
        profilePicture: null,
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, profilePicture: e.target.files[0] });
    };

    const handleRegister = async () => {

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/citizen/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName: form.firstName,
                        lastName: form.lastName,
                        phoneNumber: form.phoneNumber,
                        emailId: form.emailId,
                        gender: form.gender,
                        address: form.address,
                        password: form.password,
                        confirmPassword: form.confirmPassword,

                        // optional fields
                        alternateNo: form.alternateNo,
                        designation: form.designation,
                        organization: form.organization,
                        state: form.state,
                        district: form.district,
                        city: form.city,
                        pin: form.pin,
                        idProofType: form.idProofType,
                        idProofNo: form.idProofNo
                    }),
                }
            );

            const data = await response.json();

            console.log("REGISTER RESPONSE:", data);

            if (data.outcome) {

                alert(data.message);

                navigate("/verify-otp", {
                    state: {
                        emailId: form.emailId
                    }
                });

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);

            alert("Server not reachable");

        }
    };

    return (
        <div className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

            {/* 🌌 BACKGROUND GLOWS */}
            <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] top-[-120px] left-[-120px] animate-float-slow"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] bottom-[-120px] right-[-120px] animate-float-fast"></div>
            <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[120px] top-1/2 left-1/3 animate-float-slow"></div>

            {/* MAIN WRAPPER */}
            <div className="relative z-10 w-[92%] max-w-6xl flex items-center justify-between">

                {/* LEFT SIDE */}
                <div className="w-1/2 pr-16">
                    <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 text-transparent bg-clip-text">
                        Create Your FinSecure Account
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Join FinSecure Wallet and experience secure financial management with
                        automatic tracking and smart categorization.
                    </p>

                    <div className="mt-8 w-24 h-[2px] bg-purple-500/50 blur-sm"></div>
                </div>

                {/* DIVIDER */}
                <div className="w-[2px] h-[420px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

                {/* RIGHT SIDE FORM CARD */}
                <div className="w-1/2 pl-16 flex justify-center">

                    <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl max-h-[85vh] overflow-y-auto">

                        <h2 className="text-2xl font-semibold mb-4">
                            Register Account
                        </h2>

                        {/* First Name */}
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* Last Name */}
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* Phone */}
                        <input
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* Email */}
                        <input
                            name="emailId"
                            placeholder="Email ID"
                            value={form.emailId}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* Gender */}
                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 outline-none"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        {/* Address */}
                        <textarea
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* Profile Picture */}
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mb-3 w-full text-sm"
                        />

                        {/* Password */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="mb-3 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* Confirm Password */}
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="mb-5 w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                        />

                        {/* BUTTON */}
                        <button
                            onClick={handleRegister}
                            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                        >
                            Create Account
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;