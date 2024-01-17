import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="flex flex-col justify-start bg-white w-[300px]">
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div>
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
            alt=""
          />
        </div>
        <div>Sơ đồ phòng</div>
      </button>
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div>
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
            alt=""
          />
        </div>
        <div>Khách lẻ</div>
      </button>
      <button
        onClick={toggleVisibility}
        className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300"
      >
        <div className="w-[20%]">
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/3394/3394785.png"
            alt=""
          />
        </div>
        <div className="w-full flex justify-start">Khách đoàn</div>
        <div className="flex justify-end items-end w-[10%] mr-2">
          <FaChevronDown />
        </div>
      </button>
      {isHidden ? null : (
        <div className="flex flex-col justify-center">
          <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9]">
            <div className="ml-5">
              <img
                className="w-[20px] h-[20px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/1387/1387940.png"
                alt=""
              />
            </div>
            <div>Tạo đoàn</div>
          </button>
          <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9]">
            <div className="ml-5">
              <img
                className="w-[20px] h-[20px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/1665/1665644.png"
                alt=""
              />
            </div>
            <div>Khách đoàn đặt</div>
          </button>
          <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9]">
            <div className="ml-5">
              <img
                className="w-[20px] h-[20px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/632/632339.png"
                alt=""
              />
            </div>
            <div>Đoàn đang ở</div>
          </button>
          <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9]">
            <div className="ml-5">
              <img
                className="w-[20px] h-[20px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/6221/6221857.png"
                alt=""
              />
            </div>
            <div>Đoàn đã đi</div>
          </button>
        </div>
      )}
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div className="w-[20%]">
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/253/253298.png"
            alt=""
          />
        </div>
        <div className="w-full flex justify-start">Lễ tân</div>
        <div className="flex justify-end items-end w-[10%] mr-2">
          <FaChevronDown />
        </div>
      </button>
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div className="w-[20%]">
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/2930/2930014.png"
            alt=""
          />
        </div>
        <div className="w-full flex justify-start">Kênh phân phối</div>
        <div className="flex justify-end items-end w-[10%] mr-2">
          <FaChevronDown />
        </div>
      </button>
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div className="w-[20%]">
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/5505/5505998.png"
            alt=""
          />
        </div>
        <div className="w-full flex justify-start">Buồng phòng</div>
        <div className="flex justify-end items-end w-[10%] mr-2">
          <FaChevronDown />
        </div>
      </button>
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div>
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/3161/3161846.png"
            alt=""
          />
        </div>
        <div>Thống kê</div>
      </button>
      <button className="flex flex-row justify-start items-center bg-white hover:bg-[#C5CCE9] border-b-2 border-gray-300">
        <div className="w-[20%]">
          <img
            className="w-[25px] h-[25px] m-3"
            src="https://cdn-icons-png.flaticon.com/128/1508/1508964.png"
            alt=""
          />
        </div>
        <div className="w-full flex justify-start">Báo cáo</div>
        <div className="flex justify-end items-end w-[10%] mr-2">
          <FaChevronDown />
        </div>
      </button>
    </div>
  );
};
export default Sidebar;
