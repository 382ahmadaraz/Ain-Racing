import React from 'react'
import Navbar from '../../commons/navbar/Navbar'
import RoundHeader from '../../components/roundHeader/RoundHeader'
import RegisterationHome from '../../components/registrationHome/RegisterationHome'
import Btns2 from '../../components/belowRegisterBtn/Btns2'
import RoundsCardHome from '../../components/roundCardHome/RoundsCardHome'
import ResultSummary from '../../components/resultSummary/ResultSummary'
import OurPartners from '../../components/partners/OurPartners'
import Footer from '../../commons/footer/Footer'
import RaceCalendarComp from '../../components/raceCalendarComp/RaceCalendarComp'

export default function Home() {
  return (
    <div className=''>
        <Navbar />
        <RoundHeader/>
        <RegisterationHome/>
        <Btns2/>
        <RaceCalendarComp/>
        <RoundsCardHome/>
        <ResultSummary/>
        <OurPartners/>
        <Footer/>
    </div>
  )
}
