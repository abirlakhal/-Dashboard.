import './_styles.scss'
import React from 'react'

export default function bar_chart({ theme='dark', caption='chart caption', dataset=[], goalValue=0, goalMetric='metric/day', className='' }) {

  return (
    <div className={`bar-chart ${className}`}>

      <div className="chart-wrapper">

        <div className="chart">
          {
            dataset.map((a,index) =>
              <div
                key={index}
                title={a}
                style={{gridRowStart: (100-a)}}
                className={`${theme} bar-${index+1}`}
              />
            )
          }
        </div>

        <div className={`caption ${theme}`}>
          {caption}
        </div>

      </div>

      <div className={`goal ${theme}`}>
        <div className="value">{goalValue}</div>
        <div className="metric">{goalMetric}</div>
      </div>

    </div>
  )
}
