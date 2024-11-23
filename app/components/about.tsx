import React from 'react'

const About = () => {
  return (
    <div style={{width: '100%', minHeight: '100vh'}}>
        <div className='ms-5 titles' style={{ display: 'flex', gap: '10px'}}>About<div></div></div>
        <div className='about-container'>
          <div className='about-paragraph'>
            Hello! I&apos;m Nadir El Ouadghiri, a software developer from Rabat, Morocco, with skills in full-stack web development, Android app development, and game development. I&apos;m passionate about creating engaging and user-friendly experiences, whether through seamless web applications, native mobile apps, or interactive games. My expertise covers both front-end and back-end technologies, and I&apos;m always exploring new ways to innovate and improve. Let&apos;s connect and bring ideas to life!
          </div>
          <div className='about-ill'>
            <img src={'/about-ill.png'} />
          </div>
        </div>
    </div>
  )
}

export default About