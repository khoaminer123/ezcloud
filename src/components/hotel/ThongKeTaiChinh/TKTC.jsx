import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import Luong from "./Luong";
import PieChart from "./PieChart";

// import { TrendingUpIcon } from '@heroicons/react/solid';

const TKTC = () => {
  const [DanhMuc, setDanhMuc] = useState("");
  const [TaiKhoan, setTaiKhoan] = useState("");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const datePickerStyle = {
    backgroundColor: "white",
  };

  const Danhmuc = ["Mục 1", "Mục 2", "Mục 3"];

  const Taikhoan = ["Tài khoản 1", "Tài khoản 2", "Tài khoản 3"];

  return (
    <div className="bg-gray-200">
      <div className="w-full h-auto rounded-md shadow-xl  flex flex-col space-y-4   p-2 bg-white   ">
        <p className="font-bold">Thống Kê Tài Chính</p>

        {/* <div className="flex flex-row"> */}
        <div className="w-[50%] h-[100px] flex flex-row  items-center mt-2">
          {/* <div className="flex flex-row"> */}
          <div>
            <Datepicker
              value={value}
              onChange={handleValueChange}
              style={datePickerStyle}
            />
          </div>
          {/* </div> */}

          {/* <div className="flex flex-row"> */}
          <div className="w-[full] p-2 h-[180px] flex flex-row justify-center items-center">
            <div className="rounded-xl flex flex-col">
              <select
                value={DanhMuc}
                onChange={(e) => setDanhMuc(e.target.value)}
                className="h-full rounded-xl  w-[150px] p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Danh Mục</option>
                {Danhmuc.map((movie, index) => (
                  <option key={index} value={movie.toUpperCase()}>
                    {movie.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-[full] p-2 h-[180px] flex flex-row justify-center items-center">
            <div className="rounded-xl flex flex-col">
              <select
                value={TaiKhoan}
                onChange={(e) => setTaiKhoan(e.target.value)}
                className="h-full rounded-xl  w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tài Khoản</option>
                {Taikhoan.map((movie, index) => (
                  <option key={index} value={movie.toUpperCase()}>
                    {movie.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* </div> */}
      </div>

      <div className="w-full h-auto rounded-md shadow-xl  flex flex-col space-y-4  p-2 bg-white border-t my-4">
        Tiền đầu kỳ : 70,000,000,000
      </div>
      <div className="w-full h-auto rounded-md shadow-xl  flex flex-col space-y-4  p-2 bg-white  ">
        Tiền phát sinh trong kỳ : 5,000,000,000
        <div class="flex border  ">
          <div class="w-[50%]">
            <div className="w-full h-auto">
              <p className="text-gray-500">Thu : 20.000.000</p>
              <div className="flex">
                <button className="px-2 py-2 bg-gray-200 text-gray-600 rounded-l hover:bg-white hover:text-blue-600 border border-t border-b border-gray-300">
                  Danh mục
                </button>
                <button className="px-2 py-2 bg-gray-200 text-gray-600 hover:bg-white hover:text-blue-600 border border-t border-b border-gray-300">
                  Quỹ
                </button>
                <button className="px-2 py-2 bg-gray-200 text-gray-600 rounded-r hover:bg-white hover:text-blue-600 border border-r border-t border-b border-gray-300">
                  Loại tiền
                </button>
              </div>
              <div>
                <button className="px-2 py-2  text-blue-600 rounded hover:bg-white hover:text-blue-600 border border-blue-600 mt-3">
                  Xem báo cáo
                </button>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-pink-500"></div>
                <p className="text-sm text-gray-600">VND</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-orange-400"></div>
                <p className="text-sm text-gray-600">USD</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-green-700"></div>
                <p className="text-sm text-gray-600">JPY</p>
              </div>
            </div>
          </div>

          <div class="w-[25%] ">
            <div className="w-full h-auto">
              <PieChart />
              <div className="mt-3 flex">
                <p className="text-gray-600 flex-1">70%</p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600 mr-2">100M</p>
                  <p className="text-sm text-green-700 ml-2">10%</p>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/05/13/13/45/increase-arrow-7990565_1280.png"
                    alt=""
                    className="h-5 w-5 mr-2 ml-auto"
                  />
                </div>
              </div>
              <div className="text-gray-600 flex items-center">
                <p className="flex-1">20%</p>
                <div className="flex items-center ml-auto">
                  <p className="text-sm text-gray-600 mr-2">20M</p>
                  <p className="text-sm text-pink-600 ml-2">2%</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6067/6067145.png"
                    alt=""
                    className="h-5 w-5 mr-2 ml-auto"
                  />
                </div>
              </div>
              <div className="text-gray-600 flex items-center">
                <p className="flex-1">10%</p>
                <div className="flex items-center ml-auto">
                  <p className="text-sm text-gray-600 mr-2">10M</p>
                  <p className="text-sm text-yellow-500 ml-2">0%</p>
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/03/61/96/21/1000_F_361962161_YUZRylf4ERpw4eDPZOxXPIIGd0b2SY7q.jpg"
                    alt=""
                    className="h-5 w-5 mr-2 ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-[50%] ml-20 border-l-gray-700 ">
            <div className="w-full h-auto border-l-2 border-gray-300 pl-5">
              <p className="text-gray-500  ">Chi : 15.000.000</p>
              <div className="flex">
                <button className="px-2 py-2 bg-gray-200 text-gray-600 rounded-l hover:bg-white hover:text-blue-600 border border-t border-b border-gray-300">
                  Danh mục
                </button>
                <button className="px-2 py-2 bg-gray-200 text-gray-600 hover:bg-white hover:text-blue-600 border border-t border-b border-gray-300">
                  Quỹ
                </button>
                <button className="px-2 py-2 bg-gray-200 text-gray-600 rounded-r hover:bg-white hover:text-blue-600 border border-r border-t border-b border-gray-300">
                  Loại tiền
                </button>
              </div>
              <div>
                <button className="px-2 py-2  text-blue-600 rounded hover:bg-white hover:text-blue-600 border border-blue-600 mt-3">
                  Xem báo cáo{" "}
                </button>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-pink-500"></div>
                <p className="text-sm text-gray-600">Lương</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-orange-400"></div>
                <p className="text-sm text-gray-600">Mua Hàng</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-green-700"></div>
                <p className="text-sm text-gray-600">Phí dịch vụ mạng </p>
              </div>
            </div>
          </div>

          <div class="w-[25%] ">
            <div className="w-full h-auto">
              <Luong />
              <div className="mt-3 flex">
                <p className="text-gray-600 flex-1">50%</p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600 mr-2">100M</p>
                  <p className="text-sm text-green-700 ml-2">10%</p>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/05/13/13/45/increase-arrow-7990565_1280.png"
                    alt=""
                    className="h-5 w-5 mr-2 ml-auto"
                  />
                </div>
              </div>
              <div className="text-gray-600 flex items-center">
                <p className="flex-1">20%</p>
                <div className="flex items-center ml-auto">
                  <p className="text-sm text-gray-600 mr-2">20M</p>
                  <p className="text-sm text-pink-600 ml-2">2%</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6067/6067145.png"
                    alt=""
                    className="h-5 w-5 mr-2 ml-auto"
                  />
                </div>
              </div>
              <div className="text-gray-600 flex items-center">
                <p className="flex-1">20%</p>
                <div className="flex items-center ml-auto">
                  <p className="text-sm text-gray-600 mr-2">10M</p>
                  <p className="text-sm text-yellow-500 ml-2">0%</p>
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/03/61/96/21/1000_F_361962161_YUZRylf4ERpw4eDPZOxXPIIGd0b2SY7q.jpg"
                    alt=""
                    className="h-5 w-5 mr-2 ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TKTC;
