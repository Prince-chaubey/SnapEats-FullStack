import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyPage = () => {
  const [params] = useSearchParams();
  const success = params.get("success");
  const orderId = params.get("orderId");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        await axios.post("http://localhost:8080/api/order/verify", {
          success,
          orderId
        });

       
        setTimeout(() => {
          navigate('/');
        }, 4000);

      } catch (error) {
        console.error("Verification error:", error.response?.data || error.message);
      }
    };

    if (orderId) {
      verifyPayment();
    }
  }, [success, orderId, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4">
        {success === "true" ? "✅ Payment Successful!" : "❌ Payment Failed"}
      </h1>
      <p className="text-lg">
        {success === "true"
          ? "Your order has been confirmed. You will be redirected shortly."
          : "Something went wrong. Redirecting..."}
      </p>
    </div>
  );
};

export default VerifyPage;
