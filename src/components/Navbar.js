import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/UserSlice";
export default function Navbar({ atelier = "" }) {
  const [login, setlogin] = useState(false);
  // const dispatch = useDispatch();
  const isGuest = useSelector((state) => state.user.isGuest);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  console.log("hello", user);
  const navigate = useNavigate();
  return (
    <div className=" z-50 h-[4rem] w-full px-10 bg-violet-200 bg-opacity-90 sticky top-0 flex justify-between items-center border-b-2 border-violet-700">
      <div className="flex gap-8 h-full py-2">
        <img src={logo} alt="logo" />
        <h1
          onClick={() => navigate("/")}
          className="hover:cursor-pointer hover:text-violet-700 transition-colors text-3xl font-bold text-violet-900  flex items-center"
        >
          Dashbord
        </h1>
      </div>
      <div>
        <h1 className="underline text-3xl font-bold text-violet-900 shadow-md flex items-center">
          {atelier}
        </h1>
      </div>
      <div className=" text-violet-900 h-full flex gap-2 items-center">
        <h2 className="text-2xl  font-semibold underline underline-offset-2">
          {isGuest ? "Guest" : "Utilisateur " + user.Service}
        </h2>
        <h2 className="text-xl font-semibold">|</h2>

        <Link
          to={isGuest ? "/Login" : "/"}
          onClick={() => {
            if (!isGuest) {
              dispatch(logout());
            }
          }}
          className="hover:cursor-pointer hover:text-violet-00 h-full flex items-center gap-2 ml-3"
        >
          <h2 className="text-xl font-semibold">
            {isGuest ? "Login" : "Logout"}
          </h2>
          <IoMdLogIn size={"36px"} />
        </Link>
      </div>
    </div>
  );
}
