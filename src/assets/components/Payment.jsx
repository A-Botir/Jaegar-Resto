import Card from "../images/icons/Card.svg";
import Paypal from "../images/icons/Paypal.svg";
import Wallet from "../images/icons/Wallet.svg";
import React, { useState } from "react";

function Payment({ isVisible }) {
  return (
    <div className={`payment  ${isVisible ? "" : "paynone"}`}>
      <h2 className="payment_title font-semibold mb-2">Payment</h2>
      <p className="payment_subtitle font-medium text-base">
        3 payment method available
      </p>
      <span className="payment_line block my-6"></span>
      <form>
        <h3 className="font-semibold text-xl mb-4">Payment Method</h3>
        <div className="flex items-center gap-2 mb-4">
          <label
            htmlFor="credit"
            className="payment_label rounded-lg text-center font-medium cursor-pointer"
          >
            <img src={Card} alt="credit card" className="w-6 h-6 m-auto" />
            <span className="payment_check__text text-sm">Credit Card</span>
            <input
              type="radio"
              name="pay"
              id="credit"
              className="payment_checkbox"
            />
          </label>
          <label
            htmlFor="paypal"
            className="payment_label rounded-lg text-center font-medium cursor-pointer"
          >
            <img src={Paypal} alt="paypal" className="w-6 h-6 m-auto" />
            <span className="text-sm">Paypal</span>
            <input
              type="radio"
              name="pay"
              id="paypal"
              className="payment_checkbox"
            />
          </label>
          <label
            htmlFor="wallet"
            className="payment_label rounded-lg text-center font-medium cursor-pointer"
          >
            <img src={Wallet} alt="wallet" className="w-6 h-6 m-auto" />
            <span className="text-sm">Cash</span>
            <input
              type="radio"
              name="pay"
              id="wallet"
              className="payment_checkbox"
            />
          </label>
        </div>
        <label htmlFor="cardname" className="payment_info font-medium">
          Cardholder Name
          <input
            type="text"
            id="cardname"
            className="payment_input w-full rounded-lg mt-2 h-12"
          />
        </label>
        <label htmlFor="cardnum" className="payment_info font-medium">
          Card Number
          <input
            type="text"
            id="cardnum"
            className="payment_input w-full rounded-lg mt-2 h-12"
          />
        </label>
        <div className="flex justify-between mb-4">
          <label
            htmlFor="orderdate"
            className="payment_info box-border max-w-48"
          >
            Expiration Date
            <input
              type="date"
              className="payment_input rounded-lg mt-2 w-full"
              id="orderdate"
            />
          </label>
          <label
            htmlFor="orderpsw"
            className="payment_info box-border max-w-48"
          >
            CVV
            <input
              type="password"
              className="payment_input rounded-lg mt-2 w-full"
              id="orderpsw"
            />
          </label>
        </div>
        <span className="payment_line block my-6"></span>
        <div className="flex justify-between mb-24">
          <label
            htmlFor="ordertype"
            className="payment_info box-border max-w-48"
          >
            Order Type
            <select
              id="ordertype"
              className="payment_input payment_input--select rounded-lg mt-2 w-full"
            >
              <option value="1">Dine In</option>
              <option value="2">To Go</option>
              <option value="3">Delivery</option>
            </select>
          </label>
          <label
            htmlFor="ordernumber"
            className="payment_info box-border max-w-48"
          >
            Tablo no.
            <input
              type="text"
              className="payment_input rounded-lg mt-2 w-full"
              id="ordernumber"
            />
          </label>
        </div>
        <div className="flex justify-center gap-2">
          <button className="payment_btn payment_btn--cancel rounded-lg text-center font-semibold">
            Cancel
          </button>
          <button className="payment_btn payment_btn--confirm rounded-lg text-center font-semibold">
            Confirm Payment
          </button>
        </div>
      </form>
    </div>
  );
}
export default Payment;
