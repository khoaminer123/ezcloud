import HeaderHotel from "../../components/hotel/HeaderHotel"
import Sidebar from "../../components/hotel/Sidebar"
import TKTC from "../../components/hotel/ThongKeTaiChinh/TKTC"


const Report = () => {
  return (
    <div>
        <HeaderHotel/>
        <div className='flex flex-row'>
            <div >
                <Sidebar/>
            </div>
            <div className=''>
                <TKTC/>
            </div>
        </div>
    </div>
  )
}

{/* <div >className='flex justify-start items-start w-[30%]' */}
// className='flex justify-center items-center w-full'

export default Report