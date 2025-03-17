"use client";

import React, { useEffect } from 'react'
import { Particlesbg } from './particlesbg'
import Retyped from './retyped'
import { homeProps } from '@/app/types'

const MyHome = (props: homeProps) => {

    return (
      <div className='home'>
          <Particlesbg />
          <div className='home-content'>
              <div className='home-title'>
                  Hi, I&apos;m <p className='ma-name'>Nadir El Ouadghiri</p>
              </div>
              <div>Software developer</div>
              <Retyped style={{marginBottom: '25px', lineHeight: '1rem'}} />
              <div className='home-button' onClick={() => props.scrollDown(props.contact)}>
                  Contact me
              </div>
          </div>
      </div>
    )
}

export default MyHome