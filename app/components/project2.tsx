import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaDownload } from "react-icons/fa6";
import { project2Props } from '../types';

const Project2 = (props: project2Props) => {
  return (
    <div className='scroll-section'>
        <img src={props.img} />
        <div className='scroll-section-title'>{props.name}</div>
        <div className='scroll-section-desc' style={{marginTop: '-5px'}}>{props.desc}</div>
        <div className="scroll-section-btns">
            <a href={props.github} target='_blank'>
                <div><AiFillGithub />Github</div>
            </a>
            <a href={props.file} target='_blank'>
                <div><FaDownload />download apk</div>
            </a>
        </div>
    </div>
  )
}

export default Project2