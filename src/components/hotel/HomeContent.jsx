import React from "react";
import 'tailwindcss/tailwind.css';
import ItemList from "./ItemList";

const HomeContent = () => {
  const items = [
    { id: 1, title: 'STD', title2: '101', description: 'Trống', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 2, title: 'STD', title2: '102', description: '09/09/2016, 14:52', description2: 'Xuân Tùng', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 4, title: 'STD', title2: '103', description: '07/09/2016, 12:00', description2: 'Xuân Vượng', description3: '02 : 00 : 07', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 5, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 6, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    { id: 7, title: 'Item 3', title2: 'item2', description: 'Description of Item 3', imageUrl: "https://cdn-icons-png.flaticon.com/128/711/711239.png" },
    // Add more items
  ];
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-row justify-center">
        <button className="bg-white rounded-md shadow-lg m-2">
          <p className="m-2 text-green-700">Tất cả (100)</p>
        </button>
        <button className="bg-[#43A046] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Trống (92)</p>
        </button>
        <button className="bg-[#F15250] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Nhận phòng (5)</p>
        </button>
        <button className="bg-[#FF5624] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Quá hạn (3)</p>
        </button>
        <button className="bg-[#1A8BDF] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Đã đặt (1)</p>
        </button>
        <button className="bg-[#9A27B0] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Không đến (1)</p>
        </button>
        <button className="bg-[#D1B391] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Bẩn (4)</p>
        </button>
        <button className="bg-[#5D7F8B] rounded-md shadow-lg m-2">
          <p className="m-2 text-white">Đang sửa (1)</p>
        </button>
      </div>
      
      <div>
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
    </div>
  );
};

export default HomeContent;
