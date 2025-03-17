import React from 'react'
import animationData from '../lottie/loading.json'
import Lottie from 'lottie-react'

const Loading = () => {
  return (
    <div 
    style={{
      width: '100%',
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
        <Lottie style={{scale: '0.2'}} animationData={animationData} loop/>
    </div>
  )
}

export default Loading