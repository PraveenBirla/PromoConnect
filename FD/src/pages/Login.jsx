import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ✅ You forgot this
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsSuccess(false); 

    const userdata = { email, password };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      const data = await response.json().catch(() => ({}));  

      if (!response.ok) {
        setIsSuccess(false);
        if (response.status === 401) {
          setMessage(data.error || "Invalid email or password.");
        } else if (response.status === 500) {
          setMessage("Server error. Please try again later.");
        } else {
          setMessage("Login failed. Please check your credentials.");
        }
        return;
      }

     else{
      setIsSuccess(true);
      setMessage("Login successful!");

      if (data.token) {
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage("Login succeeded, but token was missing.");
      }
     }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center   bg-gradient-to-r from-purple-200 to-blue-400 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <div className="mb-6 text-center">
          <h1 className="text-base sm:text-xl lg:text-2xl font-bold">Log in to your account</h1>
          <p className="text-gray-500 text-sm mt-1">
            Enter your email and password to access your account
          </p>
        </div>

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium 
            hover:bg-blue-600 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
