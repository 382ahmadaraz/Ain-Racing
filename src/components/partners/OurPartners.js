import partnerLogos from "../../assets/images/partners.png"

export default function OurPartners() {
  return (
    <div className='h-[50vh] w-full  bg-darkGray pt-3'>
     
      <div className="flex items-center justify-evenly gap-3  m-auto pl-11 py-9">
            <p className="text-5xl font-bold text-white italic">Our Partners</p>
            <hr className="border border-Red w-[73%]"/>
      </div>
        <img src={partnerLogos } alt="RaceCalendar"/>
    </div>
  )
}
