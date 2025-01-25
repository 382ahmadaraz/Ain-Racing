import { Link } from 'react-router-dom'
import LiveBtn from '../../components/liveBtn/LiveBtn'
import time from "../../assets/icons/time.png"
import result from "../../assets/icons/result.png"
import bglive from "../../assets/images/live-btn-bg.png"
import bgtime from "../../assets/images/live-timing.png"
import pgLiveBg from "../../assets/images/pg-live-bg.png"


export default function LiveTimmingComp() {
  return (
    <div className=' '>
        <img src={bglive} alt='bglive' className='absolute z-[-1]'/>
      <div className='flex justify-  items-center pl-32 gap-9 h-[27vh]'>
          <Link to={"/live-timming"}><LiveBtn live={time} title="LIVE TIMING"/></Link>
          <Link to={"/live-results"}><LiveBtn live={result} title="LIVE RESULT"/></Link>
      </div>

      <div className="h-[95vh] ">
        <img src={pgLiveBg} alt='bglive' className=' absolute z-[-1] h-full w-full bg-black '/>
          <div className='py-16 '>
            <img src={bgtime} alt='bglive' className=' w-[80%] m-auto '/>
          </div>
      </div>

    </div>
  )
}
