import { ReactTyped } from "react-typed";
import { retypedProps } from "../types";

function Retyped(props: retypedProps) {
    return (
        <ReactTyped
            strings={[
                "Full-stack developer",
                "Android developer",
                "2D games Developer",
            ]}
            typeSpeed={60}
            backSpeed={70}
            loop
            cursorChar="|"
            style={props.style}
            className="gradient-text"
        />
    );
}

export default Retyped;
