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
        label: "hr",
        data: [ "6", "9", "5", "10", "6", "8", "7", "9", "6", "10", "8", "6", "8", "7", "9", "5", "9", "10", "8", "7"],
      },
    ],
}

export default function Vitals() {
  return (
    <div className="card dark vitals">

      <div className="wrapper">
        <div className="card-title">Hr</div>
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
