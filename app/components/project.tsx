import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaEye } from "react-icons/fa";
import { projectProps } from '../types';

const Project = (props: projectProps) => {
  return (
    <div className='scroll-section'>
        <img src={props.img} />
        <div className='scroll-section-title'>{props.name}</div>
        <div className='scroll-section-desc'>{props.desc}</div>
        <div className="scroll-section-btns">
            <a href={props.github} target='_blank'>
                <div><AiFillGithub />Github</div>
            </a>
            <a href={props.url} target='_blank'>
                <div><FaEye />Demo</div>
            </a>
        </div>
    </div>
  )
}

export default Project