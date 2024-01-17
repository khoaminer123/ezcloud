import React from "react";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

const ArrivalList = () => {
  return (
    <div className=" flex flex-col w-full">
      {/* p1 */}

      <div className="w-[80%] h-[30%] flex flex-col rounded-xl border border-b-gray-500 mb-3">
        <div className="w-full h-full mb-4 flex flex-row justify-between">
          <div className="text-2xl font-bold m-4"> Arrival list</div>
          <button className="bg-orange-300 w-[70px] h-[30px] m-4 rounded-xl">
            {" "}
            Search
          </button>
        </div>

        <div className="flex flex-row ml-5 justify-between">
          <div className="flex-flex-row justify-between w-full">
            <div className="w-[50%] ">
              <select>
                <option value="option">Select type</option>
                <option value="option1">Select type1</option>
                <option value="option2">Select type2</option>
                <option value="option3">Select type3</option>
                <option value="option4">Select type4</option>
              </select>
            </div>
            <div className="w-[50%]">
              <select>
                <option value="optionx">Select room</option>
                <option value="optionx1">Select room1</option>
                <option value="optionx2">Select room2</option>
                <option value="optionx3">Select room3</option>
                <option value="optionx4">Select room4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row mb-4">
            <div className="mt-2">From</div>
            <div>
              <input
                id="date"
                type="date"
                className="w-[90%] px-1 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mt-2">To</div>
            <div>
              <input
                id="date"
                type="date"
                className="w-[90%] px-1 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* p2 */}
      <div className="w-[80%] h-[30%] flex flex-col rounded-xl border border-b-gray-500">
        <div className="w-full h-auto flex flex-row justify-between items-center py-3 pr-2">
          <div className="flex flex-row w-full">
            <div className="flex flex-col justify-center bg-blue-500 items-center w-[50px] ml-2  border-gray-300">
              <p>VIP</p>
              <p className="font-bold">102</p>
              <FaCalendar />
            </div>

            <div className="flex flex-col ml-3">
              <p className="text-md">Folio id.886 | Rate: Sdt - 24/02(08:53)</p>
              <p>Nguyễn Quang Lợi | 25/02/2016 (15:52) - 04/04/2016 (15:53)</p>
              <p>Note :</p>
            </div>
          </div>
          <FaArrowRight className="text-gray-500" size={22} />
        </div>

        <div className="w-full h-auto flex flex-row justify-between items-center py-3 pr-2">
          <div className="flex flex-row w-full">
            <div className="flex flex-col justify-center bg-blue-500 items-center w-[50px] ml-2  border-gray-300">
              <p>VIP</p>
              <p className="font-bold">102</p>
              <FaCalendar />
            </div>
            <div className="flex flex-col ml-3">
              <p className="text-md">Folio id.886 | Rate: Sdt - 24/02(08:53)</p>
              <p>Nguyễn Quang Lợi | 25/02/2016 (15:52) - 04/04/2016 (15:53)</p>
              <p>Note :</p>
            </div>
          </div>
          <FaArrowRight className="text-gray-500" size={22} />
        </div>

        <div className="w-full h-auto flex flex-row justify-between items-center py-3 pr-2">
          <div className="flex flex-row w-full">
            <div className="flex flex-col justify-center bg-blue-500 items-center w-[50px] ml-2  border-gray-300">
              <p>VIP</p>
              <p className="font-bold">102</p>
              <FaCalendar />
            </div>
            <div className="flex flex-col ml-3">
              <p className="text-md">Folio id.886 | Rate: Sdt - 24/02(08:53)</p>
              <p>Nguyễn Quang Lợi | 25/02/2016 (15:52) - 04/04/2016 (15:53)</p>
              <p>Note :</p>
            </div>
          </div>
          <FaArrowRight className="text-gray-500" size={22} />
        </div>
      </div>
    </div>
  );
};

export default ArrivalList;
