import LiveBtn from '../../components/liveBtn/LiveBtn'
import time from "../../assets/icons/time.png"
import result from "../../assets/icons/result.png"
import bglive from "../../assets/images/live-btn-bg.png"
import pgLiveBg from "../../assets/images/pg-live-bg.png"
import doc from "../../assets/icons/doc.png"
import pdf from "../../assets/icons/pdf.png"
import sideBarIcon from "../../assets/icons/sidebar-result.png"
import { Link,NavLink } from 'react-router-dom'


export default function LiveResultComp() {
  return (
    <div className=' '>
        <img src={bglive} alt='bglive' className='absolute z-[-1]'/>
      <div className='flex justify-  items-center pl-32 gap-9 h-[27vh]'>
            <Link to={"/live-timming"}><LiveBtn live={time} title="LIVE TIMING"/></Link>
            <Link to={"/live-results"}><LiveBtn live={result} title="LIVE RESULT"/></Link>
      </div>

      {/* main section  */}
      <div className=" border-2 h-[100vh] w-full">
        <img src={pgLiveBg} alt='bglive' className=' absolute z-[-1] h-full w-full bg-black '/>
        <div className=' h-full w-[80%] m-auto border-2 p-4 bg-black'>
           
           {/* Navbar  */}
        <div className='flex items-center justify-between h-fit w-full border-2'>
        <ul className="flex  text-white  border-b-4 border-Red h-fit py-2 w-fit text-sm font-semibold">
            <li>
                <NavLink to="/live-results" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4  " : "text-white border-r-2 px-4")
                }>
                        MICROMAX
                </NavLink>
            </li>
            {/* Race Calendar */}
            <li>
                <NavLink to="/mini-max" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4 ml-2 " : "text-white border-r-2 px-4")
            }>
                    MINI MAX
                </NavLink>
            </li>

            {/* Results */}
            <li>
                <NavLink to="/jonior" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4 ml-2 " : "text-white border-r-2 px-4")
            }>
                    JONIOR 
                </NavLink>
            </li>

            {/* Downloads */}
            <li>
                <NavLink to="/senior-master" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4  ml-2" : "text-white border-r-2 px-4")
            }>
                    SENIOR/MASTER
                </NavLink>
            </li>

            {/* Driver Profile */}
            <li>
                <NavLink to="/DD2-master" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4  ml-2" : "text-white border-r-2 px-4")
            }>
                    DD2/DD2 MASTER/SHIFTER
                </NavLink>
            </li>

            {/* Media */}
            <li>
                <NavLink to="/media"
                 className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4 ml-2 " : "text-white border-r-2 px-4")
                }>
                    MEDIA
                </NavLink>
            </li>

            {/* Register Here */}
            
        </ul>

        <div className='flex items-center gap-2 border-b-4 border-Red p-2'>
            <img src={doc} alt='doc-icon' className='h-[16px]'/>
            <p className='text-white font-medium text-sm'>DOCUMENTS</p>
        </div>
            </div>


            <div className='flex justify-evenly p-1 h-[90%] w-full border-2 bg-green-600 text-white'>
                <div className='h-[70%] w-[25%] bg-zinc-800 border-2 mt-3'>
                    <div className='flex justify-around items-center'>
                        <p>SUNDAY,JUN 2</p>
                        <p>X</p>
                    </div>

                    {/* sideBar  */}
                    <div className=''>
        <ul className="h-fit py-2  text-sm font-semibold">
            <li className='  '>
                <NavLink to="/live-results" className={({isActive})=>
                    (isActive ? "bg-Red p-2" : "text-white ")
                }>
                        <div className='flex items-center gap-2 p-2 px-7 w-full'>
                            <img src={sideBarIcon} alt='rectangle' className='' />
                            <p>Practice Micro</p>
                        </div>
                </NavLink>
            </li>
            {/* Race Calendar */}
            <li>
                <NavLink to="/mini-max" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4 ml-2 " : "text-white border-r-2 px-4")
            }>
                    MINI MAX
                </NavLink>
            </li>

            {/* Results */}
            <li>
                <NavLink to="/jonior" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4 ml-2 " : "text-white border-r-2 px-4")
            }>
                    JONIOR 
                </NavLink>
            </li>

            {/* Downloads */}
            <li>
                <NavLink to="/senior-master" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4  ml-2" : "text-white border-r-2 px-4")
            }>
                    SENIOR/MASTER
                </NavLink>
            </li>

            {/* Driver Profile */}
            <li>
                <NavLink to="/DD2-master" className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4  ml-2" : "text-white border-r-2 px-4")
            }>
                    DD2/DD2 MASTER/SHIFTER
                </NavLink>
            </li>

            {/* Media */}
            <li>
                <NavLink to="/media"
                 className={({isActive})=>
                    (isActive ? "bg-Red p-3 px-4 ml-2 " : "text-white border-r-2 px-4")
                }>
                    MEDIA
                </NavLink>
            </li>

            {/* Register Here */}
            
        </ul>
                    </div>
                </div>
                <div className='h-full w-[75%] bg-zinc-800 border-2'>

                </div>
            
            </div>

        </div>
      </div>

    </div>
  )
}
