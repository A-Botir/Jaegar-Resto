import React, { useEffect, useState } from "react";
import Coin from "../images/icons/Coin.svg";
import Customers from "../images/icons/Customer.svg";
import Order from "../images/icons/Order.svg";
import Up from "../images/icons/up.svg";
import Down from "../images/icons/down.svg";
import Filter from "../images/icons/filter.svg";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  console.log(customers);
  useEffect(() => {
    fetch("http://localhost:3000/Customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  const getClassbtn = (content) => {
    switch (content) {
      case "Completed":
        return "text-[#50D1AA] bg-[#6BE2BE3D]";
      case "Preparing":
        return "text-[#9290FE] bg-[#9290FE33]";
      case "Pending":
        return "text-[#FFB572] bg-[#FFB57233]";
      default:
        return "";
    }
  };

  return (
    <div className="dashboard w-[694px] p-6">
      <div>
        <h2 className="font-semibold text-[28px] mb-1">Dashboard</h2>
        <time datatime="2021-02-02" className="text-base text-[#FFE6E9]">
          Tuesday, 2 Feb 2021
        </time>
      </div>
      <span className="block w-full h-[1px] bg-[#393C49] my-6 "></span>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="rounded-lg p-4 bg-[#1F1D2B] h-36">
          <div className="flex items-center gap-[6px] mb-2">
            <img src={Coin} alt="doll icon" />
            <p className="ml-[6px] text-red">+34.40%</p>
            <img src={Up} alt="arrow icon" />
          </div>
          <h2 className="font-semibold text-[28px] mb-2">$10,243.00</h2>
          <p className="font-medium text-sm text-[#ABBBC2]">Total Revenue</p>
        </div>
        <div className="rounded-lg p-4 bg-[#1F1D2B] h-36">
          <div className="flex items-center gap-[6px] mb-2">
            <img src={Order} alt="order icon" />
            <p className="ml-[6px] text-red">-12.40%</p>
            <img src={Down} alt="arrow icon" />
          </div>
          <h2 className="font-semibold text-[28px] mb-2">23,465</h2>
          <p className="font-medium text-sm text-[#ABBBC2]">
            Total Dish Ordered
          </p>
        </div>
        <div className="rounded-lg p-4 bg-[#1F1D2B] h-36">
          <div className="flex items-center gap-[6px] mb-2">
            <img src={Customers} alt="customer icon" />
            <p className="ml-[6px] text-red">+2.40%</p>
            <img src={Up} alt="arrow icon" />
          </div>
          <h2 className="font-semibold text-[28px] mb-2">1,234</h2>
          <p className="font-medium text-sm text-[#ABBBC2]">Total Customer</p>
        </div>
      </div>
      <div className="w-full rounded-lg bg-[#1F1D2B] pt-6">
        <div className="flex justify-between items-center ml-6 mr-4">
          <h2 className="font-semibold text-[28px] mb-1">Order Report</h2>
          <button className="flex items-center gap-3 px-[15px] py-[13px] font-medium rounded-lg box-border border-[#393C49] border-[1px]">
            <img src={Filter} alt="filter icon" className="w-4 h-4" />
            Filter Order
          </button>
        </div>
        <ul className="flex items-center ml-6 mr-4 my-4 gap-[60px]">
          <li className="font-semibold mr-[68px] cursor-pointer">Customer</li>
          <li className="font-semibold mr-[76px] cursor-pointer">Menu</li>
          <li className="font-semibold cursor-pointer">Total Playment</li>
          <li className="font-semibold cursor-pointer">Status</li>
        </ul>
        <div className="border-t-[#393C49] px-6 pt-[26px] overflow-y-auto border-t">
          {customers.map((custom) => (
            <div className="flex py-[10px]" key={custom.id}>
              <div className="flex w-[154px] mr-9">
                <img
                  src={custom.avatar}
                  alt="avatar photo"
                  className="rounded-[50%] w-8 h-8 mr-4"
                />
                <h3 className="text-[#E0E6E9]">{custom.firstname}</h3>
              </div>
              <p className="w-[137px] text-[#E0E6E9] mr-10">{custom.menu}</p>
              <p className="w-7 text-[#E0E6E9] mr-[121px]">{`$${custom.total}`}</p>
              <button
                className={`rounded-[30px] px-3 font-medium w-[91px] max-h-[26px] ${getClassbtn(
                  custom.status
                )}`}
              >
                {custom.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
