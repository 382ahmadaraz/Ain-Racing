import raceCalendar from "../../assets/images/race-calender.png"

export default function RaceCalendarTopBar() {
  return (
      <div className="text-white">
      <div className="absolute z-[-1]">
        <img src={raceCalendar} alt="RaceCalendar"/>
      </div>
      <div className="flex items-center justify-between gap-3 m-auto px-14 py-8">
            <p className="text-4xl font-bold text-white italic">Race Calendar</p>
            <div className="flex items-center justify-end gap-5 font-semibold  w-[50%] ">
            <p className="font-semibold text-lg">Select Season</p>
            
            <div className="bg-lightBlack w-[37%] rounded">
            <select className="bg-lightBlack rounded p-3 outline-none">
                <option>UAE ROTAX MAX 23/24</option>
                <option>UAE ROTAX MAX 25/26</option>
                <option>UAE ROTAX MAX 27/28</option>
            </select>
            </div>

            <button className="bg-Red p-3 px-9 rounded">GO</button>
            </div>
      </div>
    </div>
  )
}
{/* https://xhamster1.desi/search/russian */}
{/* https://111.90.159.150/indian-porn-videos-latest-updated/ */}
