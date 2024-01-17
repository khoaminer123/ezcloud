import React from "react";
// import { ChevronRight } from '@heroicons/react/solid';
import { FaArrowLeft } from "react-icons/fa";

const HeaderHotel = () => {
  return (
    <div className="flex flex-row bg-[#424FB7] w-full">
      <div className="flex flex-row justify-between text-white w-[30%] items-center">
        <div className="font-bold ml-2">730-ezCloud Hotel</div>
        <FaArrowLeft className="mr-3" />
      </div>
      <div className="flex items-center">
        <input
          className="w-[600px] h-[35px] rounded-sm mt-2 mb-2 focus:outline-none"
          type="search"
          placeholder="Nhập từ khóa tìm kiếm"
        />
      </div>
      <div className="flex flex-row justify-end items-center w-[40%]">
        <div className="flex flex-row text-white justify-end border-r-2 border-gray-600">
          <img
            className="w-[30px] h-[30px] mr-2"
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt=""
          />
          <div className="mt-1 mr-3">EZCLOUD</div>
        </div>
        <div className="flex flex-row text-white justify-end border-r-2 border-gray-600 mr-2 ml-3">
          <img
            className="w-[40px] h-[30px] mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
            alt=""
          />
          <div className="font-bold mt-1 mr-3">VN</div>
        </div>
        <div className=" flex justify-end m-2">
          <img
            className="w-[30px] h-[30px]"
            src="https://cdn-icons-png.flaticon.com/128/2099/2099192.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderHotel;
