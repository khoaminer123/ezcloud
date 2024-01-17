import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TiWine } from "react-icons/ti";
import { BiSolidWasher } from "react-icons/bi";
import { GrNotes } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoClose } from 'react-icons/io5';

const BottomBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };
    return (

        <div className="flex w-full h-full mt-40  ">

            {isOpen && (
                
                    <div className="bg-white p-4 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 w-full">
                        <div className="w-[600px]  h-auto shadow-md  flex flex-col space-y-4   bg-white" >
                            <div className='bg-blue-800 h-[40px] flex flex-row  items-center '>
                                <p className='text-white ml-5 font-bold   '>Add extra services confirm</p>
                                <button onClick={handleClosePopup} className='flex ml-[340px] text-white text-3xl hover:bg-red-600'>
                                    <IoClose />
                                </button>
                            </div>
                            <div >
                                <div className='flex flex-row mt-5 ml-10'>
                                    <p>
                                        3 x Pepsi (VND 25,000/Lon)
                                    </p>
                                    <p className='ml-[200px]'>
                                        VND 75,000
                                    </p>
                                </div>
                                <div className='flex flex-row mt-5 ml-10'>
                                    <p>
                                        2 x Snack (VND 25,000/ltem)
                                    </p>
                                    <p className='ml-[190px]'>
                                        VND 50,000
                                    </p>
                                </div>
                                <div className='flex flex-row mt-5 ml-10'>
                                    <p>
                                        5 x Choco-pie (VND 35,000/ltem)
                                    </p>
                                    <p className='ml-[160px]'>
                                        VND 175,000
                                    </p>
                                </div>
                                <div className=' flex h-[1px] w-[480px] bg-gray-500 mb-3  ml-9 mt-4'></div>
                                <div className='flex flex-row  ml-10 font-bold '>
                                    <p>Total:</p>
                                    <p className='ml-[350px]'>VND 300,000</p>
                                </div>
                                <div className='flex justify-end mt-[50px] mb-5'>
                                    <button className='hover:bg-purple-300'>
                                        <p className='text-purple-600 mx-5 mt-4 mb-4 '>CANCEL</p>
                                    </button>
                                    <button className='ml-5 hover:bg-purple-300 mr-3' >
                                        <p className='text-purple-600 mx-8 mt-4 mb-4 '>ADD</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            )}

            <div className=" w-full h-auto mt-5 shadow-lg bg-white p-10 flex flex-col   ">
                <div className='flex flex-row justify-center '>
                    <button className='flex flex-col h-[120px]  items-center justify-center w-[16%] hover:bg-gray-200'>
                        <div className='text-4xl' >
                            <FaSearch />
                        </div>
                        <div>
                            <p>View Details</p>
                        </div>
                    </button>
                    <button className='flex flex-col  items-center justify-center w-[16%] hover:bg-gray-200'>
                        <div className='text-4xl' >
                            <HiViewList />
                        </div>
                        <div>
                            <p>Booking list</p>
                        </div>
                    </button>
                    <button className='flex flex-col w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-4xl'>
                            <LuAlarmClock />
                        </div>
                        <div>
                            <p>Amend stay /guset</p>
                        </div>
                    </button>
                    <button className='flex flex-col w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-4xl'>
                            <FaArrowRightArrowLeft />
                        </div>
                        <div>
                            <p>room move</p>
                        </div>
                    </button>
                    <button  onClick={handleOpenPopup} className='flex flex-col w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-4xl'>
                            <TiWine />
                        </div>
                        <div>
                            <p>Mini Bar</p>
                        </div>
                    </button>
                    <button className='flex flex-col w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-4xl'>
                            <BiSolidWasher />
                        </div>
                        <div>
                            <p>Laundry</p>
                        </div>
                    </button>
                </div>
                <div className='flex flex-row mt-10 h-[120px]'>
                    <button className='flex flex-col ml-7 w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-4xl' >
                            <GrNotes />
                        </div>
                        <div>
                            <p>Extra charge</p>
                        </div>
                    </button>
                    <button className='flex flex-col w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-4xl'>
                            <BsPersonFill />
                        </div>
                        <div>
                            <p>Compensation</p>
                        </div>
                    </button>
                    <button className='flex flex-col w-[16%] items-center justify-center hover:bg-gray-200'>
                        <div className='text-5xl' >
                            <RiMoneyDollarCircleLine />
                        </div>
                        <div>
                            <p>Extra services</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BottomBar