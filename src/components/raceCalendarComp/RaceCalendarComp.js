import raceCalendar from "../../assets/images/race-calender.png"

export default function RaceCalendarComp() {
  return (
    <div >
      <div className="absolute z-[-1]">
        <img src={raceCalendar} alt="RaceCalendar"/>
      </div>
      <div className="flex items-center justify-evenly gap-3 italic m-auto pl-11 py-9">
            <p className="text-4xl font-bold text-white ">Race Calendar</p>
            <hr className="border border-Red w-[73%]"/>
      </div>
    </div>
  )
}
