import { Particle } from 'jparticles'
import React from 'react'

export class Particlesbg extends React.Component {
  componentDidMount() {
    new Particle('#demo',{
        // The straight line distance between the two particle centers
        proximity: 90,
        // All points are within the range of 100(including) for the fixed point radius,
        // the distance between the center points is less than
        // or equal to the `proximity` value, then connection
        range: 100,
    })
  }

  render() {
    return <div id="demo" className='particle'></div>
  }
}