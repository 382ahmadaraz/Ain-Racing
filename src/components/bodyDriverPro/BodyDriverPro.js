import { NavLink } from "react-router-dom"
import car from "../../assets/icons/racing-car.png"
import indflag from "../../assets/icons/bigInd.png"
import UAEflag from "../../assets/icons/bigUAE.png"
import driver1 from "../../assets/images/drive-pro-1.png"
import driver2 from "../../assets/images/drive-pro-2.png"


export default function BodyDriverPro() {

    const btns = [{
        driver: driver1,
        name : "Leonidas Peruzzi",
        no : 295,
        flag : indflag,
        skill : "Pridator"
    },
    {
        driver: driver2,
        name : "Leonidas Peruzzi",
        no : 295,
        flag : UAEflag,
        skill : "Pridator"
    },
    {
        driver: driver1,
        name : "Leonidas Peruzzi",
        no : 295,
        flag : indflag,
        skill : "Pridator"
    },
    {
        driver: driver2,
        name : "Leonidas Peruzzi",
        no : 295,
        flag : UAEflag,
        skill : "Pridator"
    },
    {
        driver: driver1,
        name : "Leonidas Peruzzi",
        no : 295,
        flag : indflag,
        skill : "Pridator"
    },
    {
        driver: driver2,
        name : "Leonidas Peruzzi",
        no : 295,
        flag : UAEflag,
        skill : "Pridator"
    },
     ]

  return (
    <div className="">
      <div className='mx-14 flex justify-between'>
        {/* button part  */}
        <div className='w-[23%] h-[90vh] border-2 bg-black p-4' >
            <p className='text-3xl italic font-bold mb-5'>Categories</p>
 
            <ul className="flex flex-col gap- [&>*]:p-2  font-semibold italic">
            <li>
                <NavLink to="/driver-profile/micromax" className={({isActive})=>
                    (isActive ? "flex items-center p-2 pl-5 gap-3 text-xl rounded-lg bg-Red" : "flex items-center p-2 gap-3 text-xl pl-5 rounded-lg bg-zinc-800")
                }>
                    <img src={car} alt="car" />
                    MICROMAX
                </NavLink>
            </li>

            {/* Race Calendar */}
            <li>
                <NavLink to="/driver-profile/Micro-max" className={({isActive})=>
                   (isActive ? "flex items-center p-2 pl-5 gap-3 text-xl rounded-lg bg-Red" : "flex items-center p-2 gap-3 text-xl pl-5 rounded-lg bg-zinc-800")
            }>
                <img src={car} alt="car" />
                MICROMAX
                </NavLink>
            </li>

            {/* Results */}
            <li>
                <NavLink to="/driver-profile/jonoir-max" className={({isActive})=>
                    (isActive ? "flex items-center p-2 pl-5 gap-3 text-xl rounded-lg bg-Red" : "flex items-center p-2 gap-3 text-xl pl-5 rounded-lg bg-zinc-800")
            }>
                <img src={car} alt="car" />
                JONIORMAX
                </NavLink>
            </li>

            {/* Downloads */}
            <li>
                <NavLink to="/driver-profile/max" className={({isActive})=>
                   (isActive ? "flex items-center p-2 pl-5 gap-3 text-xl rounded-lg bg-Red" : "flex items-center p-2 gap-3 text-xl pl-5 rounded-lg bg-zinc-800")
            }>
                <img src={car} alt="car" />
                MAX
                </NavLink>
            </li>

            {/* Driver Profile */}
            <li>
                <NavLink to="/driver-profile/DD2-master" className={({isActive})=>
                     (isActive ? "flex items-center p-2 pl-5 gap-3 text-xl rounded-lg bg-Red" : "flex items-center p-2 gap-3 text-xl pl-5 rounded-lg bg-zinc-800")
            }>
                <img src={car} alt="car" />
                DD2/DD2 Master
                </NavLink>
            </li>

            <li>
                <NavLink to="/driver-profile/bambino" className={({isActive})=>
                     (isActive ? "flex items-center p-2 pl-5 gap-3 text-xl rounded-lg bg-Red" : "flex items-center p-2 gap-3 text-xl pl-5 rounded-lg bg-zinc-800")
            }>
                <img src={car} alt="car" />
                BAMBINO
                </NavLink>
            </li>
        </ul>


           

        </div>


        {/* cards part  */}
        <div className='flex flex-wrap gap-5 w-[75%] bg-darkGray mb-20'>
         {btns.map((buttons , index)=>{
                return(
                    <div key={index} className='flex gap-2 bg-black border-green-200 w-[45%] rounded-lg overflow-hidden'>
                        <div>
                            <img src={buttons.driver} alt='racing-Car'/>
                        </div>
                        <div className="text-2xl font-bold italic p-3">
                            <p>{buttons.name}</p>
                            <p className="text-7xl my-3">{buttons.no}</p>
                            <img src={buttons.flag} alt="flag" />
                            <p>{buttons.skill}</p>
                        </div>
                    </div>
                )
            })}
            </div>
      </div>
    </div>
  )
}
