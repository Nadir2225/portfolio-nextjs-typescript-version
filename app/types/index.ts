import { IconType } from "react-icons"

export type headerProps = {
    pages: {
        home: React.RefObject<HTMLElement>,
        about: React.RefObject<HTMLElement>,
        skills: React.RefObject<HTMLElement>,
        projects: React.RefObject<HTMLElement>,
        resume: React.RefObject<HTMLElement>,
        contact: React.RefObject<HTMLElement>,
    },
    scrollDown: (ref: React.RefObject<HTMLElement>) => void
}

export type homeProps = {
    contact: React.RefObject<HTMLElement>,
    scrollDown: (ref: React.RefObject<HTMLElement>) => void
}

export type retypedProps = {
    style: React.CSSProperties
}

type TechsObject = {
    name: string, 
    icon: IconType
}
export type skillsContProps = {
    color: string,
    active: boolean,
    techs: TechsObject[]
}

export type titleProps = {
    first: string,
    second: string
}

export type projectProps = {
    img: string,
    name: string,
    desc: string,
    github: string,
    url: string
}

export type project2Props = {
    img: string,
    name: string,
    desc: string,
    github: string,
    file: string
}

export type project3Props = {
    img: string,
    name: string,
    desc: string,
    github: string,
    file86: string,
    file64: string
}