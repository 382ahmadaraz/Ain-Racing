import React from 'react'
import Navbar from '../../commons/navbar/Navbar'
import BodyDriverPro from '../../components/bodyDriverPro/BodyDriverPro'
import Footer from '../../commons/footer/Footer'

export default function DriverProfile() {

   

  return (
    <div className='bg-darkGray text-white'>
      <Navbar/>
      <div className="flex items-center justify-between gap-3  m-auto px-14 py-9">
            <p className="text-5xl font-bold text-white italic">Driver Profile</p>
            <hr className="border border-Red w-[70%]"/>
      </div>
      <BodyDriverPro/>
      <Footer/>
      
    </div>
  )
}
