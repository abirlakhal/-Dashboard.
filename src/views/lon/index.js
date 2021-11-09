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
        label: "lon",
        data: [ "6.100247740838908", "8.250269152457145", "6.739945888277093", "9.985880884328747", "8.28732070353564", "7.090948631140355", "5.543234902939978", "8.9040910861493", "6.890217440100589", "6.876642994467768", "8.139432881157317", "7.790119995167591", "5.432906370081851", "5.653449926202605", "8.024375516012661", "9.075355500984337", "9.671320304899774", "7.176950906568161", "5.982089742070148", "5.143783129885591"],
      },
    ],
}

export default function Vitals() {
  return (
    <div className="card dark vitals">

      <div className="wrapper">
        <div className="card-title">Lon</div>
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
