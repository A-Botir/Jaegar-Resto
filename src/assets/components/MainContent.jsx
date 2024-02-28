import Search from "../images/icons/search.svg";
import React, { useEffect, useState } from "react";

function MainContent() {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    fetch("http://localhost:3000/Food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="main_content w-[681px]">
      <div className="main_header flex justify-between items-center w-full mb-3">
        <div>
          <h1 className="font-semibold text-3xl mb-1">Jaegar Resto</h1>
          <time datatime="2021-02-02" className="text-base text-[#FFE6E9]">
            Tuesday, 2 Feb 2021
          </time>
        </div>
        <label
          htmlFor="searchfood"
          className="main_header__label rounded-lg flex gap-2 max-h-12 p-[14px] bg-[#2D303E]  border-[#393C49] border-[1px]"
        >
          <button className="main_header__btn">
            <img src={Search} alt="search icon" className="w-4 h-4" />
          </button>
          <input
            type="search"
            id="searchfood"
            className="main_header__input border-none outline-none text-base bg-[#2D303E] placeholder:text-sm"
            placeholder="Search for food, coffe, etc.."
          />
        </label>
      </div>
      <nav className="main_nav mb-6">
        <ul className="main_nav__list flex items-center border-b-[#393C49] border-b-[1px]">
          <li className="main_nav__item py-3 font-semibold pr-4 text-[#EA7C69] border-b-[#EA7C69] border-b-[3px]">
            Hot Dishes
          </li>
          <li className="main_nav__item py-3 font-semibold cursor-pointer px-4">
            Cold Dishes
          </li>
          <li className="main_nav__item py-3 font-semibold cursor-pointer px-4">
            Soup
          </li>
          <li className="main_nav__item py-3 font-semibold cursor-pointer px-4">
            Grill
          </li>
          <li className="main_nav__item py-3 font-semibold cursor-pointer px-4">
            Appetizer
          </li>
          <li className="main_nav__item py-3 font-semibold cursor-pointer pl-4">
            Dessert
          </li>
        </ul>
      </nav>
      <div className="main_grid overflow-y-auto pr-2">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-xl font-semibold">Choose Dishes</h2>
          <select
            className="main_grid__select box-border rounded-lg outline-none p-[14px] border-[#393C49
] border-[1px] bg-[#1F1D2B]"
          >
            <option value="value1" select>
              Dine In
            </option>
            <option value="value2">To Go</option>
            <option value="value3">Delivery</option>
          </select>
        </div>
        <div className="grid_container grid grid-cols-3 gap-x-7 gap-y-14 mt-1 ml-2">
          {foods.map((food) => (
            <button key={food.id}>
              <div className="card px-6 pb-6 pt-28 w-48 h-56 relative rounded-[16px] bg-[#1F1D2B]">
                <img
                  src={food.imgUrl}
                  alt="card img"
                  className="card_img absolute top-[-36px] left-[18px] rounded-[50%] w-[132px] y-[132px]"
                />
                <h4 className="card_title font-medium text-center mb-2">
                  {food.title}
                </h4>
                <p className="card_price mb-1 text-center">{`$ ${food.price}`}</p>
                <p className="card_bowls text-center text-[#ABBBC2]">
                  {food.isAvialable}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
