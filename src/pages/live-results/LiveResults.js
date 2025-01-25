import Navbar from "../../commons/navbar/Navbar";
import Footer from "../../commons/footer/Footer";
import LiveResultComp from "../../components/liveResultComp/LiveResultComp";

export default function LiveResults() {
  return (
    <div>
      <Navbar />
      <LiveResultComp/>
      <Footer />
    </div>
  );
}
