import React from 'react'
import HeaderHotel from '../../components/hotel/HeaderHotel'
import Sidebar from '../../components/hotel/Sidebar'
import ArrivalList from '../../components/hotel/ArrivalList'


const Booking = () => {
  return (
    <div>
        <HeaderHotel/>
        <div className='flex flex-row'>
            <div>
                <Sidebar/>
            </div>
            <div className='w-full'>
                <ArrivalList/>
            </div>
        </div>
    </div>
  )
}

export default Booking