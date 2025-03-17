"use client";

import { useRef } from "react";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import dynamic from "next/dynamic";
// import Loading from "./components/loading";

export default function Home() {

  const MyHome = dynamic(() => import('./components/home'), {
    ssr: false,
    // loading: () => <Loading />
  });

  const Header = dynamic(() => import('./components/header'), {
    ssr: false,
  });

  const pages = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  }

  const scrollDown = (ref: React.RefObject<HTMLElement>) => {
    if (typeof window !== "undefined" && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };
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
