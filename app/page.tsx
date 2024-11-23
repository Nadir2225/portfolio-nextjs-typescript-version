"use client";

import { useRef } from "react";
import Header from "./components/header";
import MyHome from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";

export default function Home() {

  const pages = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  }

  const scrollDown = (ref: React.RefObject<HTMLElement>) => {
    window.scrollTo({
      // top: ref.current.offsetTop,
      top: ref.current != null ? ref.current.offsetTop - 75 : 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Header pages={pages} scrollDown={scrollDown} />
      <div ref={pages.home} >
        <MyHome contact={pages.contact} scrollDown={scrollDown} />
      </div>
      <div ref={pages.about} >
        <About />
      </div>
      <div ref={pages.skills}>
        <Skills />
      </div>
      <div ref={pages.projects}>
        <Projects />
      </div>
      <div ref={pages.resume}>
        <Resume />
      </div>
      <div ref={pages.contact}>
        <Contact />
      </div>
    </>
  );
}
