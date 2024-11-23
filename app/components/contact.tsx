"use client";

import React, { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from 'react-icons/fa';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { SiUpwork } from 'react-icons/si';
import emailjs from 'emailjs-com';
import { Spinner } from 'react-bootstrap';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true)
    if (formData.from_name != "" && formData.email != "" && formData.message != "") {
      emailjs
        .send('service_z0tcifm', 'template_xmhw6k2', formData, 'KPTlRXZ7AuNGdn4rX')
        .then(() => {
          setIsLoading(false)
          toast.success('mail sent successfully :)', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            setFormData({
              from_name: "",
              email: "",
              message: ""
            })
        })
        .catch(() => {
          setIsLoading(false)
          toast.error('somthing went wrong :(', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
          setFormData({
            from_name: "",
            email: "",
            message: ""
          })
        });
      
    } else {
      setIsLoading(false)
      toast.error('please fill all the fields :)', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }

  const clearForm = () => {
    if (!isLoading) {
      setFormData({
        from_name: "",
        email: "",
        message: ""
      })
    }
  }
  return (
    <div className='contact'>
        <div className='titles'>
          GET IN TOUCH
          <div></div>
        </div>
        <div className='contact-cont'>
          <div className='my-contacts'>
            <div className='titl'>PHONE</div>
            <div className='inf'>0778410017 (main)</div>
            <div className='mb-4 inf'>0679117255</div>
            <div className='titl'>Adress</div>
            <div className='mb-4 inf'> Ancienne medina, Rabat</div>
            <div className='titl'>Email</div>
            <div className='inf'>nadirelouadghiri03@gmail.com (main)</div>
            <div className='mb-4 inf'>nadirna2003@gmail.com</div>
          </div>
          <form className='contact-form'>
            <div className='contact-form-top'>
              <div className='input-cont'>
                <div className='input-title'>Name</div>
                <input type='text' placeholder='Name' value={formData.from_name} onChange={e => setFormData(prev => ({...prev, from_name: e.target.value}))}/>
              </div>
              <div className='input-cont'>
                <div className='input-title'>Email</div>
                <input type='email' placeholder='Email' value={formData.email} onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}/>
              </div>
            </div>
            <div className='input-cont'>
                <div className='input-title'>Message</div>
                <textarea placeholder='Message' value={formData.message} onChange={e => setFormData(prev => ({...prev, message: e.target.value}))}></textarea>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              <button style={{ border: 'none', background: isLoading ? 'gray' : ''}} className='submit-button' type='submit' onClick={e => {
                if (!isLoading) {
                  handleSubmit(e)
                } else {
                  e.preventDefault()
                }
              }}>
               {isLoading ? <Spinner size="sm" animation="border" /> : 'Submit'}
              </button>
              <div className='clear-button' style={{ background: isLoading ? 'gray' : ''}} onClick={clearForm}>
                Clear
              </div>
            </div>
          </form>
        </div>
        <div className='footer'>
          <div style={{fontWeight: 'bold', fontSize: '.9rem'}}>Nadir El Ouadghiri</div>
          <div className='socials'>
            <div className="social-icons">
              <a
                href="https://github.com/Nadir2225"
                target="_blank"
                rel="noreferrer"
                className="d-flex justify-content-center align-items-center icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/nadir-el-ouadghiri-518080209//"
                target="_blank"
                rel="noreferrer"
                className="d-flex justify-content-center align-items-center icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~0116ad3548bc58f54e?mp_source=share"
                target="_blank"
                rel="noreferrer"
                className="d-flex justify-content-center align-items-center icon-colour  home-social-icons"
              >
                <SiUpwork />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="mailto:nadirelouadghiri03@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex justify-content-center align-items-center icon-colour home-social-icons"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Contact