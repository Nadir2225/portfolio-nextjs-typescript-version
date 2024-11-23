import React from 'react'
import Project from './project'
import Project2 from './project2';
import Project3 from './project3';
import { titleProps } from '../types';

const Projects = () => {
  return (
    <div className='projects pb-5'>
      <div className='ms-5 titles' style={{ display: 'flex', gap: '10px', lineHeight: '1.4rem'}}>Recent <p style={{color: '#24b6e2'}}>Projects</p> <div></div></div>
      <Title first="Full-Stack" second="Websites" />
      <div className='projects-container'>
            <Project
              img='/sushi.jpg'
              name="Sushi Restaurant"
              desc='a responsive landing page of a sushi restaurant using react js. i used some libraries like : { splidejs: "for carousel", react-reveal: "for some cool appearing animations" }'
              github="https://github.com/Nadir2225/sushi-website"
              url="https://sushi-restau.web.app/"
            />
            <Project 
              img='/att.jpg'
              name="Attendance Management"
              desc='a full-stack website for regitering attendance from professors and recieving it in the admin pannel for attendance managers. used technologies: front-end html css bootstrap js, back-end: php(MVC), database: phpmyadmin'
              github="https://github.com/Nadir2225/attandence-manager"
              url="http://attendancemanager.infinityfreeapp.com/"
            />
            <Project 
              img='/cloud.jpg'
              name="Attendance Management"
              desc='a static cloud manager website with some animations of react-reveal and reactjs for the front-end'
              github="https://github.com/Nadir2225/cloud-managment-clone"
              url="https://cloud-app-22.web.app"
            />
        </div>
        <Title first="Android" second="Applications" />
        <div className='projects-container'>
          <Project2
            img='/food.jpg'
            name="food Recipes app"
            desc='a native android app for food recipes.technologies: kotlin, jetpack compose, roomDB(for local db), exoplayer(to play videos), firebase tools: (authentification, firestore, cloud storage).'
            github="https://github.com/Nadir2225/food-recipes"
            file="https://drive.google.com/file/d/1Dqhf0o_nafOBVMGSp-4hyvzeODpt_Nyl/view?usp=drive_link"
          />
          <Project2
            img='/adhan.jpg'
            name="Adhan App"
            desc='a native android app for prayer times and notifications in the prayer times with personalized adhan voices. technologies: kotlin, jetpack compose, workManager'
            github="https://github.com/Nadir2225/Adhan-app"
            file="https://drive.google.com/file/d/1fIPv1ukBwDQ6qEW4G267HqkGsohZOocO/view?usp=drive_link"
          />
          <Project2
            img='/playerfy.jpg'
            name="Playerfy"
            desc='an audio player of the local audio files.technologies: kotlin, jetpack compose, mediaplayer'
            github="https://github.com/Nadir2225/Playerfy"
            file="https://drive.google.com/file/d/1a_ieL0n2FNvsRAnflWvc6tQFDxVc28pY/view?usp=drive_link"
          />
          <Project2
            img='/quizz.jpg'
            name="Quizz App"
            desc='a native android app for a quizz. technologies: kotlin, xml'
            github="https://github.com/Nadir2225/Quizz-App"
            file="https://drive.google.com/file/d/1fkNm_PKJ42Og2lVf3-q2GpE7EkDlr37Y/view?usp=drive_link"
          />
        </div>
        <Title first="2D" second="Games" />
        <div className='projects-container'>
          <Project3
            img='/flarpy.png'
            name="Flarpy bird"
            desc='my first 2d game using c# and unity engine with some cool features like accelerating over time etc...'
            github="https://github.com/Nadir2225/flarpy-bob"
            file86="https://drive.google.com/file/d/1vccB-WO2tzlYJjH82MuDkFxu04xiuzPX/view?usp=drive_link"
            file64="https://drive.google.com/file/d/1b_VPbXHI1VLnhRovYyZLZDZKsa_P3za2/view?usp=drive_link"
            />
        </div>
        <div style={{width: '100%', padding: '10px 10px', display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
          <div>
            You thought that was it? explore more of my projects in my github space ^^. 
            <a href="https://github.com/Nadir2225" target='_blank' style={{color: '#c044cd', fontWeight: 'bold', marginLeft: '8px', textDecoration: 'none'}}>
              click me
            </a>
          </div>
        </div>
    </div>
  )
}

const Title = (props: titleProps) => <div className='titles' style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', marginTop: '30px'}}>{props.first} <label style={{color: '#c044cd'}}>{props.second}</label></div>


export default Projects