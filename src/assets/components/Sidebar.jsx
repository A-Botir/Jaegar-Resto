import Bucket from "../images/icons/Bucket.svg";
import Lagman from "../images/photos/Lagman.svg";
import Manti from "../images/photos/Manti.svg";
import Salad from "../images/photos/Salad.svg";
import React, { useState } from "react";

function Sidebar({ onPaymentClick }) {
  const [isVisible, setIsVisible] = useState(true);

  const handlePaymentClick = () => {
    onPaymentClick();
    setIsVisible(false);
  };
  const mydelete = document.querySelector(".order_item_del");

  return (
    <div
      className={`sidebar p-6 rounded-lg w-full ${isVisible ? "" : "sidenone"}`}
    >
      <div className="sidebar_top">
        <h2 className="font-semibold text-xl mb-6">Orders#34562</h2>
        <ul className="sidebar_order flex items-center gap-2">
          <li className="sidebar_order__type sidebar_order__type--select px-3 py-2 rounded-lg font-semibold box-border cursor-pointer">
            Dine In
          </li>
          <li className="sidebar_order__type px-3 py-2 rounded-lg font-semibold box-border cursor-pointer">
            To Go
          </li>
          <li className="sidebar_order__type px-3 py-2 rounded-lg font-semibold box-border cursor-pointer">
            Delivary
          </li>
        </ul>
        <div className="flex justify-left item-center gap-11 my-6">
          <h4 className="grow font-semibold text-base">Item</h4>
          <h4 className="grow-0 font-semibold text-base">Qty</h4>
          <h4 className="grow-0 font-semibold text-base">Price</h4>
        </div>
        <span className="sidebar_line block"></span>
      </div>
      <ul className="sidebar_order_list pr-3">
        <li className="mt-7 ">
          <div className="order_item_top flex justify-between mb-2">
            <div className="flex gap-1 items-center">
              <img src={Lagman} alt="ordered meal" className="w-11 h-10" />
              <div>
                <h4 className="font-medium mb-1">Spicy seasoned sea...</h4>
                <p className="font-medium text-xs text-slate-500">$ 2.29</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="sidebar_order__btn text-base font-medium rounded-lg p-3 w-12 h-12">
                2
              </button>
              <p className="text-base font-medium">$ 4.58</p>
            </div>
          </div>
          <div className="order_item_bott flex gap-4">
            <input
              type="text"
              className="sidebar_order__input flex-grow  rounded-lg box-border text outline-none max-h-12"
              placeholder="Order Note..."
            />
            <button
              className="order_item_del rounded-lg box-border w-12 h-12"
              onClick={() => mydelete.parentElement.parentElement.remove()}
            >
              <img src={Bucket} alt="bucket icon" />
            </button>
          </div>
        </li>
        <li className="mt-7 ">
          <div className="order_item_top flex justify-between mb-2">
            <div className="flex gap-1 items-center">
              <img src={Salad} alt="ordered meal" className="w-11 h-10" />
              <div>
                <h4 className="font-medium mb-1">Fresh Salad</h4>
                <p className="font-medium text-xs text-slate-500">$ 1.49</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="sidebar_order__btn text-base font-medium rounded-lg p-3 w-12 h-12">
                1
              </button>
              <p className="text-base font-medium">$ 1.49</p>
            </div>
          </div>
          <div className="order_item_bott flex gap-4">
            <input
              type="text"
              className="sidebar_order__input flex-grow  rounded-lg box-border text outline-none max-h-12"
              placeholder="Order Note..."
            />
            <button
              className="order_item_del rounded-lg box-border w-12 h-12"
              onClick={() => mydelete.parentElement.parentElement.remove()}
            >
              <img src={Bucket} alt="bucket icon" />
            </button>
          </div>
        </li>
        <li className="mt-7 ">
          <div className="order_item_top flex justify-between mb-2">
            <div className="flex gap-1 items-center">
              <img src={Manti} alt="ordered meal" className="w-11 h-10" />
              <div>
                <h4 className="font-medium mb-1">Hot manti</h4>
                <p className="font-medium text-xs text-slate-500">$ 3.59</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="sidebar_order__btn text-base font-medium rounded-lg p-3 w-12 h-12">
                1
              </button>
              <p className="text-base font-medium">$ 3.59</p>
            </div>
          </div>
          <div className="order_item_bott flex gap-4">
            <input
              type="text"
              className="sidebar_order__input flex-grow  rounded-lg box-border text outline-none max-h-12"
              placeholder="Order Note..."
            />
            <button
              className="order_item_del rounded-lg box-border w-12 h-12"
              onClick={() => mydelete.parentElement.parentElement.remove()}
            >
              <img src={Bucket} alt="bucket icon" />
            </button>
          </div>
        </li>
      </ul>
      <div className="sidebar_bott">
        <span className="sidebar_line block mb-6"></span>
        <div className="flex justify-between items-center mb-5">
          <p className="collor text-gray-500">Disqount</p>
          <p className="text-base font-medium">$0</p>
        </div>
        <div className="flex justify-between items-center mb-11">
          <p className="collor text-gray-500">Sub total</p>
          <p className="text-base font-medium">$21.03</p>
        </div>
        <button
          className="sidebar_pay_btn font-semibold rounded-lg w-full"
          onClick={handlePaymentClick}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
