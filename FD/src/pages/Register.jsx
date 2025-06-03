import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email pattern check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");  
    setIsSuccess(false);

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return; 
    }

    setIsLoading(true);

    const userData = { username, email, password };

    try {
      const response = await fetch("http://localhost:8085/user/signup", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }); 
     
      
      const data  = await response.json();  
     
      if (!response.ok) {
        setIsSuccess(false);
          if (response.status === 400) {
         setMessage("Registration failed: Email might already be registered or invalid input.");
        } else {
            setMessage("Registration failed.");
        }
        
      } 
      
      else {
        setIsSuccess(true);
          
      setMessage("Registration successful.");
           
      if (data.token) {
      localStorage.setItem("token", data.token);
        }
        setTimeout(() => {
          navigate("/onboarding");
        }, 1500);
      } 
    } catch (error) {
      console.error("Fetch or JSON parsing error:", error);  
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
 
  return ( 
    <div className="min-h-[600px] flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

      {message && (
        <div
          className={`p-3 rounded mb-4 text-sm font-medium ${
            isSuccess
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div> 
    
    </div>
  );
};

export default Register;