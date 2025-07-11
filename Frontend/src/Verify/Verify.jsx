import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const [message, setMessage] = useState("Verifying payment...");
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const orderId = query.get("orderId");
  const result = query.get("success");

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/order/verify", {
          success: result,
          orderId,
        });
        setSuccess(res.data.success);
        setMessage(res.data.message);
      } catch {
        setSuccess(false);
        setMessage("⚠️ Error verifying payment.");
      }
    };
    if (orderId && result) verify();
    else {
      setSuccess(false);
      setMessage("Invalid payment link.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className={`text-2xl font-semibold ${success ? "text-green-600" : "text-red-600"}`}>
          {message}
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Verify;
