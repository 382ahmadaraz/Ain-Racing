import registerHomeImg from "../../assets/images/regiterHome.png"

export default function RegisterationHome() {
  return (
    <div className="italic">
        <div className="absolute z-[-1]">
            <img src={registerHomeImg} alt="RegisterHomeImg"/>
        </div>
        <div className="text-white font-bold py-44  px-20">
            <p className="text-4xl mt-5">REGISTERAION</p>
            <p className="text-7xl ">NOW OPEN!</p>
        </div>
    </div>
  )
}
