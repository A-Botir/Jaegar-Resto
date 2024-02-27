import Coin from "../images/icons/Coin.svg";
import Customers from "../images/icons/Customer.svg";
import Order from "../images/icons/Order.svg";
import Up from "../images/icons/up.svg";
import Down from "../images/icons/down.svg";
import Filter from "../images/icons/filter.svg";

function Dashboard() {
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
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[28px] mb-1">Order Report</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
