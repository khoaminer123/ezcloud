import React from 'react'
import HeaderHotel from '../../components/hotel/HeaderHotel'
import Sidebar from '../../components/hotel/Sidebar'
import Reservation from '../../components/hotel/Reservation'

const TourGuest = () => {
  return (
    <div>
        <HeaderHotel/>
        <div className='flex flex-row'>
            <div>
            <Sidebar/>
            </div>
            <div className='flex justify-center'>
            <Reservation/>
            </div>
        </div>
    </div>
  )
}

export default TourGuest