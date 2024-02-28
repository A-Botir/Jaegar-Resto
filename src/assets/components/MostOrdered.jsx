import Salad from "../images/photos/Salad.svg";
import Manti from "../images/photos/Manti.svg";
import Lagman from "../images/photos/Lagman.svg";
import Diagram from "../images/photos/Diagram.svg";

function MostOrdered() {
  return (
    <div className="mostordered w-[372px]">
      <div className="p-6 rounded-lg bg-[#1F1D2B] mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Most Ordered</h3>
          <select
            name="time"
            className="font-medium rounded-lg border border-[#393C49] p-[14px] bg-[#1F1D2B]"
          >
            <option value="1" selected>
              Today
            </option>
            <option value="2">Week</option>
            <option value="3">Month</option>
            <option value="4">All time</option>
          </select>
        </div>
        <span className="block w-full h-[1px] bg-[#393C49] my-5"></span>
        <ul className="mb-[30px]">
          <li className="flex gap-[14px] mb-[22px]">
            <img src={Salad} alt="meal icon" className="w-14 h-14" />
            <div>
              <h4 className="text-[#E0E6E9] font-medium mb-1">
                Spicy seasoned seafood noodles
              </h4>
              <p className="text-[#ABBBC2] text-[12px]">200 dishes ordered</p>
            </div>
          </li>
          <li className="flex gap-[14px] mb-[22px]">
            <img src={Lagman} alt="meal icon" className="w-14 h-14" />
            <div>
              <h4 className="text-[#E0E6E9] font-medium mb-1">
                Salted pasta with mushroom sauce
              </h4>
              <p className="text-[#ABBBC2] text-[12px]">120 dishes ordered</p>
            </div>
          </li>
          <li className="flex gap-[14px]">
            <img src={Manti} alt="meal icon" className="w-14 h-14" />
            <div>
              <h4 className="text-[#E0E6E9] font-medium mb-1">
                Beef dumpling in hot and sour soup
              </h4>
              <p className="text-[#ABBBC2] text-[12px]">80 dishes ordered</p>
            </div>
          </li>
        </ul>
        <button className="w-full text-center p-[14px] rounded-lg border-[#EA7C69] text-[#EA7C69] border font-semibold hover:bg-[#EA7C69] hover:text-white">
          View All
        </button>
      </div>
      <div className="bg-[#1F1D2B] rounded-lg py-6">
        <div className="flex justify-between items-center mx-6">
          <h3 className="text-xl font-semibold">Most Type of Order</h3>
          <select
            name="time"
            className="font-medium rounded-lg border border-[#393C49] p-[14px] bg-[#1F1D2B]"
          >
            <option value="1" selected>
              Today
            </option>
            <option value="2">Week</option>
            <option value="3">Month</option>
            <option value="4">All time</option>
          </select>
        </div>
        <span className="block w-full h-[1px] bg-[#393C49] my-4"></span>
        <div className="flex gap-[26px] m-6">
          <img src={Diagram} alt="diagram" className=" w-44 h-44" />
          <ul>
            <li className="flex gap-2 mb-4">
              <div className="w-[18px] h-[18px] bg-[#FF7CA3] rounded-[50%]"></div>
              <div>
                <h4 className="font-medium">Dine In</h4>
                <p className="text-[#ABBBC2]">200 customers</p>
              </div>
            </li>
            <li className="flex gap-2 mb-4">
              <div className="w-[18px] h-[18px] bg-[#FFB572] rounded-[50%]"></div>
              <div>
                <h4 className="font-medium">To Go</h4>
                <p className="text-[#ABBBC2]">122 customers</p>
              </div>
            </li>
            <li className="flex gap-2 mb-4">
              <div className="w-[18px] h-[18px] bg-[#65B0F6] rounded-[50%]"></div>
              <div>
                <h4 className="font-medium">Delivery</h4>
                <p className="text-[#ABBBC2]">264 customers</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MostOrdered;
