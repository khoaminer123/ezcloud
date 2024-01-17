import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import data from "./dataReservation.js";

const Reservation = () => {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-full h-auto flex flex-col m-6 ">
        <div className="h-auto mb-6 p-4 rounded shadow border border-b-gray-400">
          {/* danh sach doan dat - tim kiem...  */}
          <div className="flex flex-row justify-between mb-10">
            <p className="text-lg"> Danh sách đoàn đặt </p>
            <div className="flex gap-3">
              <button className="bg-orange-500 text-white p-2 shadow rounded">
                TÌM KIẾM
              </button>
              <button className="bg-orange-500 text-white p-2 shadow rounded">
                GHÉP ĐOÀN
              </button>
              <button className="bg-white shadow p-2 rounded">
                XUẤT FILE EXCEL
              </button>
            </div>
          </div>

          {/* ma dat phong - da dat...  */}
          <div className="flex flex-row justify-between mb-5">
            <div className="w-[40%] flex gap-5">
              <input
                id="input"
                type="text"
                className="w-[55%] py-2 border-b-2 bg-transparent focus:outline-none focus:border-gray-700"
                placeholder="Mã đặt phòng"
              />
              <select
                id="select"
                className="w-[45%] py-2 border-b-2 bg-transparent focus:outline-none focus:border-gray-700"
              >
                <option value="" hidden>
                  Đã đặt
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="w-[40%] flex gap-5">
              <select
                id="select"
                className="w-full py-2 border-b-2 bg-transparent focus:outline-none focus:border-gray-500"
              >
                <option value="" hidden>
                  Chọn loại
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select
                id="select"
                className="w-full py-2 border-b-2 bg-transparent focus:outline-none focus:border-gray-500"
              >
                <option value="" hidden>
                  Nguồn
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          {/* ngay den - ngay tao */}
          <div className="flex flex-row justify-between mb-5">
            <div className="w-[40%] flex flex-row gap-3 items-center justify-between">
              <p className="whitespace-nowrap ">Ngày đến</p>
              <input
                id="checkbox"
                type="checkbox"
                className="form-checkbox h-5 w-5"
              />
              <input
                id="date"
                type="date"
                className="w-[30%] px-2 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <p className="mx-1">Đến</p>
              <input
                id="date"
                type="date"
                className="w-[30%] px-2 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="w-[40%] flex flex-row gap-3 items-center justify-between">
              <p className="whitespace-nowrap mr-7">Ngày tạo</p>
              <input
                id="date"
                type="date"
                className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <p>Đến</p>
              <input
                id="date"
                type="date"
                className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="h-auto mb-6 p-4 rounded shadow border border-b-gray-400 ">
          {data.map((item) => (
            <div className="flex flex-col">
              <div className="w-full h-auto flex flex-row justify-between items-center py-3 pr-2">
                <div key={item.id} className="flex flex-col w-full">
                  <div className="flex flex-row">
                    <p className="text-md font-bold ">Mã đặt phòng:&nbsp;</p>
                    <p className="text-md font-bold ">
                      {" "}
                      {item.idRoomRes} -&nbsp;
                    </p>
                    <p className="text-md font-bold ">
                      {item.dateTimeRoomRes} |&nbsp;
                    </p>
                    <p className="text-md font-bold "> Số phòng:&nbsp;</p>
                    <p className="text-md font-bold ">
                      {" "}
                      {item.roomNum} |&nbsp;
                    </p>
                    <p className="text-md font-bold "> Số lượng khách:&nbsp;</p>
                    <p className="text-md font-bold "> {item.guestNum} |</p>
                  </div>
                  <div className="flex flex-row">
                    <FaFlag size={20} className="mr-2 text-green-500" />
                    <p className="text-md">{item.username} |&nbsp;</p>
                    <p className="text-md">{item.name}</p>
                    <p className="text-md">
                      &nbsp;| Ngày đến đầu: {item.startDate} |&nbsp;
                    </p>
                    <p className="text-md">Ngày đi cuối: {item.endDate} |</p>
                  </div>
                  <p className="text-sm font-bold text-gray-500">Ghi chú:</p>
                </div>
                <FaArrowRight className="text-gray-500" size={22} />
              </div>
              <hr />
            </div>
          ))}
          {/* <div className='w-full h-auto flex flex-row justify-between items-center py-3 pr-2'>
                        <div className='flex flex-col w-full'>
                            <p className='text-md font-bold '>Mã đặt phòng.29 - 22/08(17:12) | Số phòng: 5 | Số lượng khách: 5/0 |</p>
                            <div className='flex flex-row'>
                                <FaFlag size={20} className='mr-2 text-blue-500' />
                                <p className='text-md'>YOURWEB | Nguyễn Hoàng Dương | Ngày đến đầu: 22/08/2016 07:00 - Ngày đi cuối: 27/08/2016 09:00</p>
                            </div>
                            <p className='text-sm font-bold text-gray-500'>Ghi chú:</p>
                        </div>
                        <FaArrowRight className='text-gray-500' size={22} />
                    </div>
                    <hr />
                    <div className='w-full h-auto flex flex-row justify-between items-center py-3 pr-2'>
                        <div className='flex flex-col w-full'>
                            <p className='text-md font-bold '>Mã đặt phòng.29 - 22/08(17:12) | Số phòng: 5 | Số lượng khách: 5/0 |</p>
                            <div className='flex flex-row'>
                                <FaFlag size={20} className='mr-2 text-green-500' />
                                <p className='text-md'>YOURWEB | Nguyễn Hoàng Dương | Ngày đến đầu: 22/08/2016 07:00 - Ngày đi cuối: 27/08/2016 09:00</p>
                            </div>
                            <p className='text-sm font-bold text-gray-500'>Ghi chú:</p>
                        </div>
                        <FaArrowRight className='text-gray-500' size={22} />
                    </div>
                    <hr />
                    <div className='w-full h-auto flex flex-row justify-between items-center py-3 pr-2'>
                        <div className='flex flex-col w-full'>
                            <p className='text-md font-bold '>Mã đặt phòng.29 - 22/08(17:12) | Số phòng: 5 | Số lượng khách: 5/0 |</p>
                            <div className='flex flex-row'>
                                <FaFlag size={20} className='mr-2 text-blue-500' />
                                <p className='text-md'>YOURWEB | Nguyễn Hoàng Dương | Ngày đến đầu: 22/08/2016 07:00 - Ngày đi cuối: 27/08/2016 09:00</p>
                            </div>
                            <p className='text-sm font-bold text-gray-500'>Ghi chú:</p>
                        </div>
                        <FaArrowRight className='text-gray-500' size={22} />
                    </div>
                    <hr />
                    <div className='w-full h-auto flex flex-row justify-between items-center py-3 pr-2'>
                        <div className='flex flex-col w-full'>
                            <p className='text-md font-bold '>Mã đặt phòng.29 - 22/08(17:12) | Số phòng: 5 | Số lượng khách: 5/0 |</p>
                            <div className='flex flex-row'>
                                <FaFlag size={20} className='mr-2 text-green-500' />
                                <p className='text-md'>YOURWEB | Nguyễn Hoàng Dương | Ngày đến đầu: 22/08/2016 07:00 - Ngày đi cuối: 27/08/2016 09:00</p>
                            </div>
                            <p className='text-sm font-bold text-gray-500'>Ghi chú:</p>
                        </div>
                        <FaArrowRight className='text-gray-500' size={22} />
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
