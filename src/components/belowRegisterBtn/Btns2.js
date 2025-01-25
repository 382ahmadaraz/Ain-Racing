import time from "../../assets/icons/time.png"
import result from "../../assets/icons/result.png"
import LiveBtn from "../liveBtn/LiveBtn"
import { Link } from "react-router-dom"

export default function Btns2(props) {
  return (
    <div className='h-[35vh] w-full bg-black m-auto italic '>

      <div className='flex justify-evenly gap-20 items-center h-[80%] w-[80%] m-auto bg-zinc-900 '>
            <Link to={"/live-timming"}><LiveBtn live={time} title="LIVE TIMING"/></Link>
            <Link to={"/live-results"}><LiveBtn live={result} title="LIVE RESULT"/></Link>
      </div>
    </div>
  )
}
