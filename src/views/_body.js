import React from 'react'

import Userdata from './userdata'
//import NextCheckup from './checkup'
import VitalsCard from './vitals'
import HrCard from './hr'
import Spo2Card from './spo2'
import XCard from './x'
import YCard from './y'
import ZCard from './z'
import LatCard from './lat'
import LonCard from './lon'

export default function _body() {

  return (
    <section className='app-body'>

      <div className="body-wrapper">

        <div className="section-1">

          <Userdata />

        </div>

        <div className="section-2">

          <VitalsCard />

        </div>

        <div className="section-4">

          <HrCard />

        </div>
        
        <div className="section-3">

          <Spo2Card />

        </div>

        <div className="section-4">

          <XCard />

        </div>

        <div className="section-5">

          <YCard />

        </div>

        <div className="section-6">

          <ZCard />

        </div>

        <div className="section-7">

          <LatCard />

        </div>

        <div className="section-8">

          <LonCard />

        </div>


      </div>

    </section>
  )
}
