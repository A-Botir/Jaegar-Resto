import About from "../images/settings/About Us.svg";
import Discount from "../images/settings/Discount.svg";
import Notification from "../images/settings/Notification.svg";
import Restauraunt from "../images/settings/Restaurant.svg";
import Appereance from "../images/settings/Appereance.svg";
import Security from "../images/settings/Security.svg";
import Filter from "../images/icons/filter.svg";

function Setting() {
  return (
    <div className="setting p-6">
      <h2 className="font-semibold text-[28px] mb-[28px]">Settings</h2>
      <div className="flex gap-6">
        <div className="bg-[#1F1D2B] rounded-2xl h-[723px] w-[275px]">
          <ul>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] rounded-t-2xl gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
              <img src={Appereance} alt="icon" />
              <div>
                <h4 className="mb-1 font-medium hover:text-[#EA7C69]">
                  Appereance
                </h4>
                <p className="text-[#ABBBC2] text-xs">
                  Dark and Light mode, Font size
                </p>
              </div>
            </li>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
              <img src={Restauraunt} alt="icon" />
              <div>
                <h4 className="mb-1 font-medium hover:text-[#EA7C69]">
                  Your Restauraunt
                </h4>
                <p className="text-[#ABBBC2] text-xs">
                  Dark and Light mode, Font size
                </p>
              </div>
            </li>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
              <img src={Discount} alt="icon" />
              <div>
                <h4 className="mb-1 font-medium hover:text-[#EA7C69]">
                  Products Management
                </h4>
                <p className="text-[#ABBBC2] text-xs">
                  Manage your product, pricing, etc
                </p>
              </div>
            </li>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
              <img src={Notification} alt="icon" />
              <div>
                <h4 className="mb-1 font-medium hover:text-[#EA7C69]">
                  Notification
                </h4>
                <p className="text-[#ABBBC2] text-xs">
                  Customize your notifications
                </p>
              </div>
            </li>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
              <img src={Security} alt="icon" />
              <div>
                <h4 className="mb-1 font-medium hover:text-[#EA7C69]">
                  Security
                </h4>
                <p className="text-[#ABBBC2] text-xs">
                  Configure Password, PIN, etc
                </p>
              </div>
            </li>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
              <img src={About} alt="icon" />
              <div>
                <h4 className="mb-1 font-medium hover:text-[#EA7C69]">
                  About Us
                </h4>
                <p className="text-[#ABBBC2] text-xs">
                  Find out more about Posly
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="py-6 w-[743px] bg-[#1F1D2B] h-[723px]">
          <div className="mx-6 flex justify-between mb-6">
            <h2 className="text-xl font-semibold">Products Management</h2>
            <button className="flex items-center gap-3 px-[15px] py-[13px] font-medium rounded-lg box-border border-[#393C49] border-[1px]">
              <img src={Filter} alt="filter icon" className="w-4 h-4" />
              Manage Categories
            </button>
          </div>
          <nav className="main_nav mb-6">
            <ul className="main_nav__list flex items-center border-b-[#393C49] border-b-[1px]">
              <li className="main_nav__item py-3 font-semibold pr-4 text-[#EA7C69] border-b-[#EA7C69] border-b-[3px] ml-6">
                Hot Dishes
              </li>
              <li className="main_nav__item py-3 font-semibold cursor-pointer px-4 hover:text-[#EA7C69] border-b-[3px] border-[#1F1D2B] hover:border-b-[#EA7C69]">
                Cold Dishes
              </li>
              <li className="main_nav__item py-3 font-semibold cursor-pointer px-4 hover:text-[#EA7C69] border-b-[3px] border-[#1F1D2B] hover:border-b-[#EA7C69]">
                Soup
              </li>
              <li className="main_nav__item py-3 font-semibold cursor-pointer px-4 hover:text-[#EA7C69] border-b-[3px] border-[#1F1D2B] hover:border-b-[#EA7C69]">
                Grill
              </li>
              <li className="main_nav__item py-3 font-semibold cursor-pointer px-4 hover:text-[#EA7C69] border-b-[3px] border-[#1F1D2B] hover:border-b-[#EA7C69]">
                Appetizer
              </li>
              <li className="main_nav__item py-3 font-semibold cursor-pointer pl-4 hover:text-[#EA7C69] border-b-[3px] border-[#1F1D2B] hover:border-b-[#EA7C69]">
                Dessert
              </li>
            </ul>
          </nav>
          <div className="mx-6 w-full h-[473px]"></div>
          <div className="flex gap-2 mx-6">
            <button className=" rounded-lg text-center font-semibold w-[172px] h-[48px] p-[14px] border-[#EA7C69] text-[#EA7C69] border">
              Discard Changes
            </button>
            <button className="rounded-lg text-center font-semibold w-[172px] h-[48px] p-[14px] bg-[#EA7C69]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Setting;
