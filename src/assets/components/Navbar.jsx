import React from "react";
import Home from "../images/icons/home icon.svg";
import Nav1 from "../images/icons/nav_icon1.svg";
import Nav12 from "../images/icons/Nav12.svg";
import Nav2 from "../images/icons/nav_icon2.svg";
import Nav3 from "../images/icons/nav_icon3.svg";
import Nav4 from "../images/icons/nav_icon4.svg";
import Nav5 from "../images/icons/nav_icon5.svg";
import Nav6 from "../images/icons/nav_icon6.svg";
import Nav7 from "../images/icons/nav_icon7.svg";
import Graph from "../images/icons/Graph.svg";
import Setting from "../images/icons/Setting.svg";

function Navbar({ step, setStep }) {
  const handleClick = (newStep) => {
    setStep(newStep);
  };

  return (
    <nav className="navbar flex justify-start items-center flex-col rounded-2xl">
      <ul className="nabar_list flex justify-start items-right flex-col pl-3 gap-3 mb-9">
        <li className="navbar_item pl-3 py-6 pr-6 flex justify-end">
          <img
            src={Home}
            alt="navbar item img"
            className="navbar_item__img navbar_item__img--home p-3 rounded-xl"
          />
        </li>
        <li className="flex justify-end">
          <button
            className={`navbar_item rounded-l-lg pl-3 py-6 pr-6 ${
              step === 1 ? "navbar_item--select" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            <img
              src={step === 1 ? Nav1 : Nav12}
              alt="navbar item img"
              className={`navbar_item__img p-4 rounded-lg ${
                step === 1 ? " navbar_item__img--select" : ""
              }`}
            />
          </button>
        </li>
        <li className="navbar_item  pl-3 py-6 pr-6 rounded-l-lg flex justify-end">
          <img
            src={Nav2}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="flex justify-end">
          <button
            className={`navbar_item rounded-l-lg pl-3 py-6 pr-6 ${
              step === 2 ? "navbar_item--select" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            <img
              src={step === 2 ? Graph : Nav3}
              alt="navbar item img"
              className={`navbar_item__img p-4 rounded-lg ${
                step === 2 ? " navbar_item__img--select" : ""
              }`}
            />
          </button>
        </li>
        <li className="navbar_item  pl-3 py-6 pr-6 rounded-l-lg flex justify-end">
          <img
            src={Nav4}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="navbar_item  pl-3 py-6 pr-6 rounded-l-lg flex justify-end">
          <img
            src={Nav5}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="flex justify-end">
          <button
            className={`navbar_item rounded-l-lg pl-3 py-6 pr-6 ${
              step === 3 ? "navbar_item--select" : ""
            }`}
            onClick={() => handleClick(3)}
          >
            <img
              src={step === 3 ? Setting : Nav6}
              alt="navbar item img"
              className={`navbar_item__img p-4 rounded-lg ${
                step === 3 ? " navbar_item__img--select" : ""
              }`}
            />
          </button>
        </li>
      </ul>
      <div className="p-6 flex justify-end">
        <img
          src={Nav7}
          alt="navbar item img"
          className="navbar_item__img p-4 rounded-lg"
        />
      </div>
    </nav>
  );
}

export default Navbar;
