import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Login() {
  const Functions = {
    Quality: ["Quality Controller", "Team Leader Quality", "Quality Manager"],
    Production: [
      "Production Assistant",
      "Team Leader Production",
      "UAP Manager",
    ],
    Logistic: ["preparator"],
  };
  const [serviceFunctions, setServiceFunctions] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // loginUser.service = event.target.value;
    setServiceFunctions(Functions[event.target.value]);
  };
  let loginUser = {
    Service: "",
    Function: "",
    Atelier: "",
  };
  const handleClick = async (e) => {
    console.log("handle1", loginUser);
    dispatch(login(loginUser));
  };
  return (
    <div className=" w-full h-screen py-[20rem] flex flex-col pb-[30rem] justify-center items-center">
      <h1 className="text-8xl font-oswald  text-slate-900 mb-[10rem]">Login</h1>
      <form className=" relative flex flex-col items-center gap-7 w-[90%] md:w-[30rem] px-10 py-8 rounded-xl shadow-xl bg-slate-400 ">
        <Link to={"/"} className="absolute top-2 right-2">
          <IoMdClose
            size={"2rem"}
            className="hover:cursor-pointer hover:text-slate-900 text-slate-200"
          />
        </Link>
        {/* ===== service  */}
        <div className="flex w-[80%] flex-col">
          <label className=" text-slate-900 font-oswald text-xl mb-2 ">
            Service
          </label>
          <select
            defaultValue={"== Select ton service =="}
            name="service"
            onChange={(event) => {
              handleChange(event);
              loginUser = { ...loginUser, Service: event.target.value };
              console.log(loginUser.service);
              console.log("handle", loginUser);
            }}
            className="tracking-[0.15rem] rounded-md px-2 min-h-[2rem] text-slate-900 font-medium "
          >
            <option disabled>== Select ton service ==</option>
            <option>Quality</option>
            <option>Production</option>
            <option>logistic</option>
          </select>
        </div>
        {/* ===== function  */}

        <div className="flex flex-col w-[80%]">
          <label className="text-slate-900 font-oswald text-xl mb-2 ">
            Function
          </label>
          <select
            onChange={(event) => {
              loginUser = { ...loginUser, Function: event.target.value };
              console.log(loginUser.Function);
              console.log("handle", loginUser);
            }}
            defaultValue={"== Select ton Function =="}
            name="Function"
            className="tracking-[0.15rem] rounded-md px-2 min-h-[2rem] text-slate-900 font-medium "
          >
            <option disabled>== Select ton Function ==</option>
            {serviceFunctions &&
              serviceFunctions.map((Function, index) => {
                return <option key={index}>{Function}</option>;
              })}
          </select>
        </div>
        {/* ===== atelier  */}

        <div className="flex flex-col w-[80%]">
          <label className="text-slate-900 font-oswald text-xl mb-2 ">
            Atelier
          </label>
          <select
            defaultValue={" == Select ton atelier =="}
            onChange={(event) => {
              loginUser = { ...loginUser, Atelier: event.target.value };
              console.log(loginUser);
            }}
            className="tracking-[0.15rem] rounded-md px-2 min-h-[2rem] text-slate-900 font-medium "
          >
            <option disabled>== Select ton atelier ==</option>
            <option>CTUK1</option>
            <option>CTUK2</option>
            <option>CTUK3</option>
            <option>PLASTURGIE</option>
          </select>
        </div>

        <button
          onClick={(e) => handleClick(e)}
          type="button"
          className="px-7 py-1 text-2xl rounded-lg hover:cursor-pointer hover:bg-slate-600  font-semibold bg-slate-900 text-slate-200 w-fit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
