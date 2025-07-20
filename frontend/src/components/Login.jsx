import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINTS } from "./utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";
export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    // Collect form data
    const formData = {
      fullName: isLogin ? undefined : fullName,
      email,
      password,
      mode: isLogin ? "login" : "signup",
    };
    try {
      const res = await axios.post(
        isLogin ? `${API_END_POINTS}/login` : `${API_END_POINTS}/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.status === 200 || res.status === 201) {
        console.log("Response:", res.data);
        toast.success(
          isLogin ? "Login successful!" : "Registration successful!"
        );
        dispatch(setUser(res.data.user));
        if (!isLogin) {
          setIsLogin(true);
        } else {
          navigate("/browse");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      dispatch(setLoading(false));
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 object-cover w-full h-full z-0"
        src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
        alt="banner"
      />

      {/* Form Container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <div className="flex flex-col">
            {!isLogin && (
              <>
                <label className="text-white mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="mb-4 p-2 rounded bg-gray-800 text-white w-80 outline-none"
                  value={fullName}
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </>
            )}

            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="mb-4 p-2 rounded bg-gray-800 text-white w-80 outline-none"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 rounded bg-gray-800 text-white w-80 outline-none"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition duration-200 text-white px-4 py-2 rounded cursor-pointer"
            >
              {`${isLoading ? "Loading..." : ""} ${
                isLogin ? "Login" : "Sign Up"
              }`}
            </button>

            <p className="text-gray-300 mt-4 text-sm text-center">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{" "}
                  <span
                    onClick={() => setIsLogin(false)}
                    className="text-red-400 hover:underline cursor-pointer"
                  >
                    Sign up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsLogin(true)}
                    className="text-red-400 hover:underline cursor-pointer"
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
