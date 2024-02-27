import Home from "../images/icons/home icon.svg";
import Nav1 from "../images/icons/nav_icon1.svg";
import Nav2 from "../images/icons/nav_icon2.svg";
import Nav3 from "../images/icons/nav_icon3.svg";
import Nav4 from "../images/icons/nav_icon4.svg";
import Nav5 from "../images/icons/nav_icon5.svg";
import Nav6 from "../images/icons/nav_icon6.svg";
import Nav7 from "../images/icons/nav_icon7.svg";

function Navbar() {
  return (
    <nav className="navbar flex justify-start items-center flex-col rounded-2xl">
      <ul className="nabar_list flex justify-start items-right flex-col pl-3 gap-3 mb-9">
        <li className="navbar_item pl-3 py-6 pr-6">
          <img
            src={Home}
            alt="navbar item img"
            className="navbar_item__img navbar_item__img--home p-3 rounded-xl"
          />
        </li>
        <li className="navbar_item navbar_item--select rounded-l-lg py-3 pl-3 pr-6">
          <img
            src={Nav1}
            alt="navbar item img"
            className="navbar_item__img navbar_item__img--select p-4 rounded-lg"
          />
        </li>
        <li className="navbar_item py-3 pl-3 pr-6">
          <img
            src={Nav2}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="navbar_item py-3 pl-3 pr-6">
          <img
            src={Nav3}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="navbar_item py-3 pl-3 pr-6">
          <img
            src={Nav4}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="navbar_item py-3 pl-3 pr-6">
          <img
            src={Nav5}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
        <li className="navbar_item py-3 pl-3 pr-6">
          <img
            src={Nav6}
            alt="navbar item img"
            className="navbar_item__img p-4 rounded-lg"
          />
        </li>
      </ul>
      <div className="p-6 ">
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
