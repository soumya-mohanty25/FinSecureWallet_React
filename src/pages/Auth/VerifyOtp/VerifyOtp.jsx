import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const VerifyOtp = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const emailId = location.state?.emailId;

    const handleVerifyOtp = async () => {

        if (!otp || otp.length !== 6) {
            alert("Please enter a valid 6-digit OTP");
            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/citizen/verify-otp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailId,
                        otp
                    })
                }
            );

            const data = await response.json();

            if (response.ok || data.outcome) {

                alert(data.message || "OTP Verified Successfully");
                navigate("/dashboard");

            } else {

                alert(data.message || "Verification Failed");
                navigate("/login");

            }

        } catch (error) {

            console.error(error);

            alert("Unable to verify OTP");

        } finally {

            setLoading(false);

        }
    };

    const handleResendOtp = async () => {

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/citizen/resend-otp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailId
                    })
                }
            );

            const data = await response.json();

            if (data.outcome) {

                alert("OTP Sent Successfully");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);

            alert("Unable to resend OTP");

        }
    };

    return (
        <div className="otp-page">

            <div className="otp-modal">

                <div className="otp-icon">
                    🔒   
                </div>

                <h2 className="otp-title">
                    Verify OTP
                </h2>

                <p className="otp-subtitle">
                    Enter the 6-digit OTP sent to
                    <br />
                    <span className="otp-email">
                        {emailId}
                    </span>
                </p>

                <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) =>
                        setOtp(
                            e.target.value.replace(/\D/g, "")
                        )
                    }
                    placeholder="Enter OTP"
                    className="otp-input"
                />

                <button
                    className="otp-btn"
                    onClick={handleVerifyOtp}
                    disabled={loading}
                >
                    {loading ? "Verifying..." : "Verify OTP"}
                </button>

                <div className="otp-resend">
                    Didn't receive OTP?
                    <span
                        className="otp-resend-link"
                        onClick={handleResendOtp}
                    >
                        Resend OTP
                    </span>
                </div>

                <div className="otp-footer">
                    FinSecure Wallet Security Verification
                </div>

            </div>

        </div>
    );
};

export default VerifyOtp;