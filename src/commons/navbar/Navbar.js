import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import register from "../../assets/icons/register.png"

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-4 bg-black h-[90px]">
      <div className=''>
        <Link to={"/"}><img src={logo} alt='webLogo'/></Link>
      </div>
      <div className='ml-8 '>
        <ul className="flex gap-4 [&>*]:p-2 text-sm font-semibold">
            <li>
                <NavLink to="/" className={({isActive})=>
                    (isActive ? "text-Red border-b-2 border-Red" : "text-white")
                }>
                    HOME
                </NavLink>
            </li>

            {/* Race Calendar */}
            <li>
                <NavLink to="/race-calendar" className={({isActive})=>
                    (isActive ? "text-Red border-b-2 border-Red" : "text-white")
                }>
                    RACE CALENDAR
                </NavLink>
            </li>

            {/* Results */}
            <li>
                <NavLink to="/result" className={({isActive})=>
                    (isActive ? "text-Red border-b-2 border-Red" : "text-white")
                }>
                    RESULT
                </NavLink>
            </li>

            {/* Downloads */}
            <li>
                <NavLink to="/downloads" className={({isActive})=>
                    (isActive ? "text-Red border-b-2 border-Red" : "text-white")
                }>
                    DOWNLOADS
                </NavLink>
            </li>

            {/* Driver Profile */}
            <li>
                <NavLink to="/driver-profile" className={({isActive})=>
                    (isActive ? "text-Red border-b-2 border-Red" : "text-white")
                }>
                    DRIVER PROFILE
                </NavLink>
            </li>

            {/* Media */}
            <li>
                <NavLink to="media"
                 className={({isActive})=>
                    (isActive ? "text-Red border-b-2 border-Red" : "text-white")
                }>
                    MEDIA
                </NavLink>
            </li>

            {/* Register Here */}
            <li>
                 <div className="flex items-center bg-Red p-1 px-2 cursor-pointer rounded text-white gap-2 ml-11">
                        <img src={register} alt="register" />
                        <p>REGISTER HERE</p>
                 </div>
                 
            </li>
        </ul>
      </div>
    </div>
  )
}
