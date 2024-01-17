import React from 'react'


import HomeContent from '../../components/hotel/HomeContent'
import Sidebar from '../../components/hotel/Sidebar'
import HeaderHotel from '../../components/hotel/HeaderHotel'
// import BottomBar from '../components/hotel/BottomBar'

const Home = () => {
  return (
    <div>
        <HeaderHotel/>
        <div className='flex flex-row'>
            <div>
                <Sidebar/>
            </div>
            <div>
                <HomeContent/>
            </div>
        </div>
        {/* <BottomBar/> */}
    </div>
  )
}

export default Home