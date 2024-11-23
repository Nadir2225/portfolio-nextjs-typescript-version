import React, { useState } from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiVisualstudio } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiJetbrains } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { FaYarn } from "react-icons/fa";
import { HiCommandLine } from "react-icons/hi2";
import { SiPowershell } from "react-icons/si";
import { skillsContProps } from '../types';

const Skills = () => {
  const [skills, setSkills] = useState({
    front: false,
    back: false,
    db: false,
    game: false,
    tools: false
  })

  const front = [
    {name: "Html", icon: FaHtml5},
    {name: "Css", icon: FaCss3},
    {name: "JavaScript", icon: IoLogoJavascript},
    {name: "Bootstrap", icon: FaBootstrap},
    {name: "React Js", icon: RiReactjsLine},
    {name: "React-Bootstrap", icon: SiReactbootstrap},
    {name: "Xml", icon: TbFileTypeXml},
    {name: "Jetpack Compose", icon: SiJetpackcompose},
  ]

  const back = [
    {name: "Node Js", icon: IoLogoNodejs},
    {name: "Express Js", icon: SiExpress},
    {name: "Php", icon: SiPhp},
    {name: "Kotlin", icon: SiKotlin},
    {name: "Python", icon: FaPython},
    {name: ".Net(Basic)", icon: SiDotnet},
  ]

  const db = [
    {name: "Mysql", icon: TbBrandMysql},
    {name: "Firebase", icon: IoLogoFirebase},
    {name: "RoomDB", icon: FaDatabase},
  ]

  const game = [
    {name: "C#", icon: SiCsharp},
    {name: "Unity", icon: FaUnity},
  ]

  const tools = [
    {name: "Vs Code", icon: VscVscode},
    {name: "Visual Studio", icon: SiVisualstudio},
    {name: "Git", icon: FaGitAlt},
    {name: "Android Studio", icon: SiAndroidstudio},
    {name: "Jet Brains Editors", icon: SiJetbrains},
    {name: "Npm", icon: SiNpm},
    {name: "Yarn", icon: FaYarn},
    {name: "Command Line", icon: HiCommandLine},
    {name: "Powershell", icon: SiPowershell},
  ]

  return (
    <div style={{width: '100%', minHeight: '100vh'}}>
        <div className='ms-5 titles' style={{ display: 'flex', gap: '10px'}}>Skillset<div></div></div>
        <div className='skills-container ps-5 pe-5'>
          <div 
            className='skills-category'
            style={{ backgroundColor: '#523dbc' }} 
            onClick={() => setSkills(prevState => ({
              front: !prevState.front,
              back: false,
              db: false,
              game: false,
              tools: false
            }))}
          >
            Front-End
          </div>
          <SkillsCont color="#523dbc" active={skills.front} techs={front}/>
          <div
           className='skills-category mt-4'
           style={{backgroundColor: '#ac80a0'}}
           onClick={() => setSkills(prevState => ({
            front: false,
            back: !prevState.back,
            db: false,
            game: false,
            tools: false
          }))}>
            Back-End
          </div>
          <SkillsCont color="#ac80a0" active={skills.back} techs={back} />
          <div
           className='skills-category mt-4'
           style={{backgroundColor: '#db6557'}}
           onClick={() => setSkills(prevState => ({
            front: false,
            back: false,
            db: !prevState.db,
            game: false,
            tools: false
          }))}>
            Databases
          </div>
          <SkillsCont color="#db6557" active={skills.db} techs={db}/>
          <div
           className='skills-category mt-4'
           style={{backgroundColor: '#355c7d'}}
           onClick={() => setSkills(prevState => ({
            front: false,
            back: false,
            db: false,
            game: !prevState.game,
            tools: false
          }))}>
            game dev
          </div>
          <SkillsCont color="#355c7d" active={skills.game} techs={game} />
          <div
           className='skills-category mt-4'
           style={{backgroundColor: '#9d00ff'}}
           onClick={() => setSkills(prevState => ({
            front: false,
            back: false,
            db: false,
            game: false,
            tools: !prevState.tools
          }))}>
            Tools
          </div>
          <SkillsCont color="#9d00ff" active={skills.tools} techs={tools} />
        </div>
    </div>
  )
}

const SkillsCont = (props: skillsContProps) => {
  return (
    <div className={`skills ${props.active ? 'opened' : ''} mt-2`} style={{border: props.active ?`2px solid ${props.color}` : `0px solid ${props.color}`}}>
      {props.techs.map((tech, index) => (
        <div key={index} className='skill' style={{border: `2px solid ${props.color}`}}>
          <tech.icon fontSize={30} style={{ fill: props.color }} />
          <div style={{ color: props.color }}>{tech.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Skills