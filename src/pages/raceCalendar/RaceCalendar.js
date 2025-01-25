import Navbar from "../../commons/navbar/Navbar";
import Footer from "../../commons/footer/Footer";

import RaceCalenderCards from "../../components/raceCalendarCards/RaceCalenderCards";
import RaceCalendarTopBar from "../../components/raceCalendarTopBar/RaceCalendarTopBar";
// border-2 border-green-300

export default function RaceCalendar() {
  return (
    <div>
      <Navbar />
      <RaceCalendarTopBar />
      <RaceCalenderCards />
      <Footer/>
    </div>
  );
}
