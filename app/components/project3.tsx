import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaDownload } from "react-icons/fa6";
import { project3Props } from '../types';

const Project3 = (props: project3Props) => {
  return (
    <div className='scroll-section' style={{width: '330px', height: '390px'}}>
        <img src={props.img} />
        <div className='scroll-section-title'>{props.name}</div>
        <div className='scroll-section-desc' style={{marginTop: '-5px'}}>{props.desc}</div>
        <div className="scroll-section-btns2">
            <a href={props.github} target='_blank'>
                <div className='div'><AiFillGithub />Github</div>
            </a>
            <div className='d-flex justify-content-center gap-2'>
              <a href={props.file86} download>
                  <div className='div'><FaDownload />download x86 zip</div>
              </a>
              <a href={props.file64} download>
                  <div className='div'><FaDownload />download x64 zip</div>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Project3