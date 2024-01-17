import React from "react";

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="flex flex-row justify-center w-full m-3">
          <div className="flex flex-col justify-center items-center bg-[#D1B48C] rounded-tl-md rounded-bl-md w-[30%] text-white">
            <div className="mt-1">{item.title}</div>
            <div>{item.title2}</div>
            <img
              className="w-[20px] h-[20px] mb-1"
              src={item.imageUrl}
              alt={item.title}
            />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#E8F6E9] w-full text-green-700 rounded-tr-md rounded-br-md">
            <div>{item.description}</div>
            <br />
            <div>{item.description2}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
