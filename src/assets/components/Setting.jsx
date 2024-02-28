import About from "../images/settings/About Us.svg";
import Discount from "../images/settings/Discount.svg";
import Notification from "../images/settings/Notification.svg";
import Restauraunt from "../images/settings/Restaurant.svg";
import Appereance from "../images/settings/Appereance.svg";
import Security from "../images/settings/Security.svg";

function Setting() {
  return (
    <div className="setting p-6">
      <h2 className="font-semibold text-[28px] mb-[28px]">Settings</h2>
      <div className="flex gap-6">
        <div className="bg-[#1F1D2B] rounded-lg h-[723px]">
          <ul>
            <li className="p-6 cursor-pointer flex hover:bg-[#EA7C6942] gap-2 border-r-2 border-[#1F1D2B] hover:border-r-[#EA7C69]">
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
        <div></div>
      </div>
    </div>
  );
}
export default Setting;
