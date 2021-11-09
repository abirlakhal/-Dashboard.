import './_styles.scss'
import React from 'react'

export default function ProgressBar({ progress=0 }) {
  return (
    <div id='progress-bar'>
      <ProgressRing radius={90} stroke={12} progress={progress}/>
      <div className="progress-label">
        <div className="count">{`${progress}%`}</div>
        <div className="period">today</div>
      </div>
    </div>
  )
}


class ProgressRing extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;
    const Dashoffset = this.circumference - 100 / 100 * this.circumference;
    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke="white"
          strokeOpacity="0.2"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ Dashoffset }}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ strokeDashoffset }}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />

      </svg>
    );
  }

}
