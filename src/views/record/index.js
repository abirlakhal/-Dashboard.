import './_styles.scss'
import React from 'react'
import * as iconset from 'react-icons/gr'
import { TiArrowDown, TiArrowUp } from 'react-icons/ti'

export default function MedicalRecord(props) {

  const {
    pages = 0,
    statistics = [],
    date='Set Date',
    title = 'Set Title',
    icon = 'GrStatusGoodSmall',
    institution = 'Medical Lab',
  } = props;

  if (statistics.length===0) statistics.push({ count:0, label: 'NO PATHOLOGY' })

  const DocumentIcon = iconset[icon];

  return (
    <div className='medical-record noselect'>

      <div className="document">
        <DocumentIcon className='icon'/>
        <div className="institution">{institution}</div>
        <div className="page-count">{`${pages} PAGES`}</div>
      </div>

      <div className="content">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
        <div className="stats">
        {
          statistics.map((a,i) => <RecordStatistics key={i} {...a}/>)
        }
        </div>

      </div>

    </div>
  )
}

const RecordStatistics = ({ count=0, label, trajectory='up' }) => {

  const Icon = trajectory==='up' ? TiArrowUp : TiArrowDown;

  return (
    <div className={`statistic ${trajectory}`}>
      <div className="count">
        <div className="value">{count}</div>
        <Icon className={`icon ${trajectory}`}/>
      </div>
      <div className="label">{label}</div>
    </div>
  )
}
