import Home from "../pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RaceCalendar from "../pages/raceCalendar/RaceCalendar";
import Result from "../pages/results/Result";
import DriverProfile from "../pages/driver-profile/DriverProfile";
import MicroMax from "../pages/driver-profile/NavPages/microMax/MicroMax";
import JoniorMax from "../pages/driver-profile/NavPages/joniorMax/JoniorMax";
import Max from "../pages/driver-profile/NavPages/max/Max";
import Micro from "../pages/driver-profile/NavPages/micro-max/Micro";
import DD2 from "../pages/driver-profile/NavPages/dd2/DD2";
import Bambino from "../pages/driver-profile/NavPages/bambino/Bambino";
import LiveTimming from "../pages/live-time/LiveTimming";
import LiveResults from "../pages/live-results/LiveResults";


export default function Navigation() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/race-calendar" element={<RaceCalendar />} />
        <Route path="/result" element={<Result />} />
        <Route path="/driver-profile" element={<DriverProfile />} />
        <Route path="/driver-profile/micromax" element={<MicroMax />} />
        <Route path="/driver-profile/jonoir-max" element={<JoniorMax />} />
        <Route path="/driver-profile/max" element={<Max />} />
        <Route path="/driver-profile/Micro-max" element={<Micro />} />
        <Route path="/driver-profile/DD2-master" element={<DD2 />} />
        <Route path="/driver-profile/bambino" element={<Bambino />} />
        <Route path="/live-timming" element={<LiveTimming />} />
        <Route path="/live-results" element={<LiveResults />} />
        <Route path="/mini-max" element={<LiveResults />} />
        <Route path="/jonior" element={<LiveResults />} />
        <Route path="/senior-master" element={<LiveResults />} />
        <Route path="/DD2-master" element={<LiveResults />} />
        <Route path="/media" element={<LiveResults />} />
      </Routes>
    </Router>
    </div>
  );
}
