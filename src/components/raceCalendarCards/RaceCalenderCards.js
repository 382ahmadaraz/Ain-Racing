import calendar from "../../assets/icons/date.png";
import bg from "../../assets/images/race-bg.png";
import cardLogo1 from "../../assets/images/raceCard-1.png";
import cardLogo2 from "../../assets/images/raceCard-2.png";
import cardLogo3 from "../../assets/images/raceCard-3.png";
import track1 from "../../assets/images/track-1.png";
import track2 from "../../assets/images/track-2.png";
import track3 from "../../assets/images/track-3.png";
import RedBtn from "../RedBtn/RedBtn";

// border-2 border-green-300

export default function RaceCalenderCards() {
  const cards = [
    {
      logo: cardLogo1,
      trackName: "Raceway",
      track: track1,
    },
    {
      logo: cardLogo2,
      trackName: "Dubai Kartdome",
      track: track2,
    },
    {
        logo: cardLogo3,
        trackName: "Muscat Speedway",
        track: track3,
      },{
        logo: cardLogo1,
        trackName: "asdRaceway",
        track: track1,
      },
      {
        logo: cardLogo1,
        trackName: "Raceway",
        track: track1,
      },
      {
        logo: cardLogo2,
        trackName: "Dubai Kartdome",
        track: track2,
      },
      {
          logo: cardLogo3,
          trackName: "Muscat Speedway",
          track: track3,
        },{
          logo: cardLogo1,
          trackName: "asdRaceway",
          track: track1,
        },
        {
            logo: cardLogo1,
            trackName: "Raceway",
            track: track1,
          },
          {
            logo: cardLogo2,
            trackName: "Dubai Kartdome",
            track: track2,
          },
          {
              logo: cardLogo3,
              trackName: "Muscat Speedway",
              track: track3,
            },{
              logo: cardLogo1,
              trackName: "asdRaceway",
              track: track1,
            },
  ];

  return (
    <div className="">
        <img src={bg} alt="" className="my-2 absolute z-[-1]" />
      <div className=" flex justify-center gap-4 items-center flex-wrap mx-14 py-8 pt-20">
        {cards.map((items, index) => {
          return (
            <div key={index} className=" w-[23%] overflow-hidden rounded-md">
              <div className="flex justify-between py-3 bg-black h-[70px]">
                <RedBtn btnRed="Round 1" />
                <div className="relative bottom-11 left-14 h-[65px] w-[120px] bg-Red rotate-45"></div>
              </div>
              <div className="flex items-center gap-3 text-lg text-white italic bg-green-700 pl-3 p-1">
                <img src={calendar} alt="date" />
                <p className="font-bold">
                  29 - 02 <sub className="font-semibold">March</sub>
                </p>
              </div>
              <div className="p-2 bg-black">
                <img src={items.logo} alt="" className="my-2" />
                <p className="text-white text-2xl font-bold italic ml-3">
                  {items.trackName}
                </p>
                <div className="w-[90%] h-[130px] flex justify-center items-center rounded-xl bg-zinc-900 m-auto my-3 ">
                <img src={items.track} alt="track"  className="h-fit"/>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className='flex justify-between py-3 bg-black h-[70px]'  >
            <RedBtn btnRed="Round 1"/>
        <div className='relative bottom-11 left-14 h-[65px] w-[120px] bg-Red rotate-45'></div>
        </div>
        <div className="flex items-center gap-3 text-lg text-white italic bg-green-700 pl-3 p-1">
            <img src={calendar} alt="date"/>
            <p className="font-bold">29 - 02 <sub className="font-semibold">March</sub></p>
        </div>
        <div className="p-2 bg-black">
            <img src={cardLogo} alt="" className="my-2"/>
            <p className="text-white text-2xl font-bold italic ml-3">Raceway</p>
            <img src={track1} alt="track" className=" m-3 rounded-xl"/>
        </div> */}
      </div>
    </div>
  );
}
