import './_styles.scss'
import React from 'react'

import { IoMdPulse as Pulse } from 'react-icons/io'
import { MdFavorite as Heart } from 'react-icons/md'
import { FaThermometerHalf as Thermometer } from 'react-icons/fa'
//import LineElement from 'chart.js'
//import { LineElement } from 'chart.js';
import {Bar, Line} from "react-chartjs-2"

const data = {
    labels: [ "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207" ],
    datasets: [
      {
        label: "temp",
        data: [ "8.98099", "9.48896", "7.17102", "5.81647", "5.47942", "7.10986", "8.67457", "9.81543", "6.68022", "8.46317", "9.99908", "8.28878", "7.64139", "5.8555", "5.04853", "6.52514", "9.14218", "9.57749", "9.55659", "6.4522"],
      },
    ],
}

export default function Vitals() {
  return (
    <div className="card dark vitals">

      <div className="wrapper">
        <div className="card-title">Temp</div>
      </div>
       
      <div className="container">
        <div className="card">
          <Line data ={data} />
        </div>
      </div>

    </div>

    

    

    
  )
}

const VitalReading = ({ Icon, value = '', label = '' }) => {
  return (
    <div className="vital-reading">

      <div className="icon">
        <Icon />
      </div>

      <div className="content">
        <div className="vital-value">{value}</div>
        <div className="vital-label">{label}</div>
      </div>

    </div>
  )
}
