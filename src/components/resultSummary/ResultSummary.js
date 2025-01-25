import bgSummaary from "../../assets/images/bg-summary.png";
import RedBtn from "../RedBtn/RedBtn";
import WhiteBtn from "../whiteBtn/WhiteBtn";
import driver1 from "../../assets/images/driver1.png"
import driver2 from "../../assets/images/d3.png"
import driver3 from "../../assets/images/driver3.png"
import bgDrive from "../../assets/images/bg-driver1.webp"
import pkFlag from "../../assets/icons/pak.png"
import indFlag from "../../assets/icons/ind.png"
import usFlag from "../../assets/icons/us.png"

export default function ResultSummary() {
  

  return (
    <div className="mb-3">
      <div className="absolute z-[-1]">
        <img src={bgSummaary} alt="bgSummary" />
      </div>
      {/* result summary  */}
      <div className="flex items-center justify-evenly gap-3  m-auto p-9">
        <p className="text-4xl font-bold text-white italic">Results Summary</p>
        <div className="w-[60%]  ">
          <div className="flex justify-end gap-3">
                <button className=" p-2 h-fit bg-green-700 rounded-md px-7 font-bold text-white"> Race Details </button>
                <RedBtn btnRed="Championship Standings"  />
          </div>
          <hr className="border border-Red " />
        </div>
      </div>

{/* drop down round */}
      <div className="flex justify-center items-center my-8 text-2xl font-semibold bg-Red w-[13%] m-auto rounded text-white">
            <select className="bg-Red p-1 outline-none px-3 text-center cursor-pointer" >
                <option className="my-3 bg-white text-black font-semibold">Round 1</option>
                <option className="my-3 bg-white text-black font-semibold">Round 2</option>
                <option className="my-3 bg-white text-black font-semibold">Round 3</option>
            </select>
      </div>

      {/* buttons  */}
      <div className="flex justify-center gap-4">
<WhiteBtn btnWhite="Micro MAX"/>
<RedBtn btnRed="Mini MAX"  />
<WhiteBtn btnWhite="Jonior MAX"/>
<WhiteBtn btnWhite="Senior MAX"/>
<WhiteBtn btnWhite="Micro MAX"/>
<WhiteBtn btnWhite="DD2 MAX"/>
<WhiteBtn btnWhite="D2 MAX MASTER"/>


      </div>

{/* Drivers */}

      <div className="flex  justify-evenly mt-2 mb-20 h-[60vh] w-[100%]  "> 
        
        {/* 1 */}
        <div className="relative top-14 w-[27%]   ">
             
            <div className="  ">
              <img src={driver1} alt="driver1" className="absolute left-0  "/>
              <p className="text-white relative top-32 z-[-1] font-bold text-xl">2nd</p>
              <img src={bgDrive} alt="driver1" className="relative top-32 blur-sm z-[-1] rounded-lg"/>
            </div>
              <div className="flex justify-between text-Red text-lg font-semibold shadow-b-white p-3 w-full bg-black rounded-br-lg rounded-bl-lg  relative top-20 z-10">
                  <p className="text-white">M Sufiyan</p>
                  <p>13 Laps</p>
                  <p>+19.01s</p>
                  <img src={indFlag} alt="india"/>
              </div>
        </div>

{/* 2 */}
        <div className="flex flex-col h-[3 w-[35%]">
              <img src={driver2} alt="driver1" className="absolute left-80 h-[65%] w-[50%]  "/>
              <img src={bgDrive} alt="driver1" className="relative top-40 h-[60%] w-full blur-sm z-[-1] "/>
              <div className="flex justify-between text-white text-lg font-semibold shadow-b-white p-4 w-full bg-Red rounded-br-lg rounded-bl-lg  relative top-32 z-10">
                  <p >M Sufiyan</p>
                  <p>13 Laps</p>
                  <p>+19.01s</p>
                  <img src={pkFlag} alt="pakistan"/>
              </div>

        </div>

        {/* 3 */}

         <div className="relative top-20 w-[27%]   ">
             
            <div className=" ">
              <img src={driver3} alt="driver1" className="absolute right-0"/>
              <p className="text-white relative top-28 z-[-1] font-bold text-xl">3rd</p>
              <img src={bgDrive} alt="driver1" className="relative top-28 blur-sm z-[-1] "/>
            </div>
            <div className="flex justify-between text-Red text-lg font-semibold shadow-b-white p-3 w-full bg-black rounded-br-lg rounded-bl-lg  relative top-14 z-10">
                  <p className="text-white">M Sufiyan</p>
                  <p>13 Laps</p>
                  <p>+19.01s</p>
                  <img src={usFlag} alt="USA"/>
              </div>
        </div>
        
      </div>

    <div className="  flex items-center justify-center h-[90px]">
      <p className="text-white cursor-pointer hover:text-Red font-semibold text-2xl"><u>View Complete Results</u></p>
    </div>
     
    </div>
  );
}
