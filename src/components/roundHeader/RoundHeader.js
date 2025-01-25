import roundHeader from "../../assets/images/r-h.png"

export default function RoundHeader() {

const time = [{
    number : "05" ,
    string : "DAYS"
},{
    number : "23" ,
    string : "HOURS"
},{
    number : "15" ,
    string : "MINUTES"
},{
    number : "35" ,
    string : "SECONDS"
},]



  return (
    <div className="text-white italic">
        <div className="absolute z-[-1] bg-black">
            <img src={roundHeader} alt="RoundHeader" />
        </div>

        <div className="flex items-center justify-evenly z-20  py-12">
        <div className="bg-green-700 text-4xl font-bold p-1 px-3 rounded-md">
            <p>NEXT EVENT</p>
        </div>
        <div className="text-xl font-extrabold">
            <p>12-13 OCTOBER 2024</p>
            <p className="text-6xl font-bold">ROUND 1</p>
            <p>AL AIN RACEWAY INTERNATIONAL KART CIRCUIT</p>
        </div>

        {/* map  */}
        <div className="flex gap-3">
            {time.map((item , index)=>{
                return(
                    <div key={index} className="bg-Red w-[70px] text-center p-2">
                        <p className="text-4xl font-bold">{item.number}</p>
                        <p className="text-[12px] font-bold">{item.string}</p>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}
