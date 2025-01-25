import r1 from "../../assets/images/r1.png"
import r2 from "../../assets/images/r2.png"
import r3 from "../../assets/images/r3.png"
import roundImg from "../../assets/images/R-image.png"
import dubaiImgLogo from "../../assets/images/Dubai.png"
import RoundCard from '../roundCard/RoundCard'

export default function RoundsCardHome() {
  return (
    <div className='h-[90vh] bg-black text-white flex items-center w-full italic'>
      <RoundCard t1="1" track={r3} t2="2" t3="3"/>
      <RoundCard t1="2" track={r1} t2="2" t3="3" className="border-black"/>
        <div className="bg-Red flex flex-col items-center leading-9	">
             <img src={dubaiImgLogo} alt=""/>
             <p className="text-2xl font-bold ">UAE ROTAX MAX CHALLENGE</p>
             <p className="text-2xl font-bold ">2024-25 </p>
             <p className="text-4xl font-bold mb-3">Round 4</p>
             <img src={roundImg} alt=""/>
             <p className="text-3xl my-2 font-bold ">17-18 JANUARY 2025</p>
             <button className="mb-3  bg-green-700 rounded-md px-4 font-semibold">REGISTER HERE</button>
             
        </div>
      <RoundCard t1="3" track={r2} t2="2" t3="3"/>
      <RoundCard t1="4" track={r3} t2="2" t3="3"/>
    </div>
  )
}
