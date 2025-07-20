import axios from "axios";
import React from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";
export default function Header() {
  const user = useSelector((state) => state.app.user);
  const toggle = useSelector((state) => state.movie.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    const logoutHandler = async () => {
      try {
        const res = await axios.get("http://localhost:5173/api/user/logout");

        if (res.status === 200) {
          toast.success("Logout Successfully Completed");
          dispatch(setUser(null));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    logoutHandler();
  };
  const toggleHandler = () => {
    dispatch(setToggle(true));
  };

  return (
    <div className="absolute z-30 bg-gradient-to-b from-black via-black/80 to-transparent p-4 flex w-full items-center justify-between shadow-lg  ">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt=""
      />
      {user && (
        <div className="text-white items-center text-2xl flex">
          <IoMdArrowDropdownCircle className="text-3xl" />
          <h1 className="">{user?.user?.fullName}</h1>
          <div className="flex items-center ml-4 space-x-4">
            <button
              onClick={logout}
              className="bg-red-600 text-white px-2 py-1 rounded cursor-pointer"
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className="bg-blue-600 text-white cursor-pointer px-2 py-1 rounded"
            >
              {toggle ? "Home" : "Search"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
