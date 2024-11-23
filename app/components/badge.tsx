import React from 'react'

const Badge = (props : { img: string, title: string }) => {
  return (
    <div className='badge'>
        <img src={props.img} style={{height: '50%', width: '100%'}}/>
        <div>{props.title}</div>
    </div>
  )
}

export default Badge