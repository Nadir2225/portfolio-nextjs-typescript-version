import React from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { darken } from "polished";

const AnimBox = (animparams) => keyframes`
0%{
    transform: translate(${animparams.start[0]}%, ${animparams.end[0]}%);
}
50% {
    transform: translate(${animparams.start[1]}%, ${animparams.end[1]}%);
}
100% {
    transform: translate(${animparams.start[2]}%, ${animparams.end[2]}%);
}
`;

const Container = styled.div`
  --size: ${(props) => props.sizeboxes}px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-bottom: ${(props) => props.sizemarginbottom}px;
  // margin-top: calc(var(--size) * 1.5 * -1);
  padding: 70px;
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
`;

const StyledBox = styled.div`
  --size: ${(props) => props.sizeboxes}px;
  --duration: 800ms;
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
  transform: translate(
    ${(props) => props.boxtransforms[0]}%,
    ${(props) => props.boxtransforms[1]}%
  );
  animation: ${(props) => AnimBox(props.animparams)} var(--duration) linear
    infinite;

  & > div {
    --background: ${(props) => props.colors.main};
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
      translateZ(var(--translateZ));
  }

  & > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }
  & > div:nth-child(2) {
    --background: ${(props) => props.colors.right};
    --right: 0;
    --rotateY: 90deg;
  }
  & > div:nth-child(3) {
    --background: ${(props) => props.colors.left};
    --rotateX: -90deg;
  }
  & > div:nth-child(4) {
    --background: ${(props) => props.colors.shadow};
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }
`;

const StyledBoxDiv = styled.div`
  --background: ${(props) => props.boxdivparams.background};
  --top: ${(props) => props.boxdivparams.top};
  --right: ${(props) => props.boxdivparams.right};
  --bottom: ${(props) => props.boxdivparams.bottom};
  --left: ${(props) => props.boxdivparams.left};
  --translateZ: ${(props) => props.boxdivparams.translateZ};
  --rotateY: ${(props) => props.boxdivparams.rotateX};
  --rotateX: ${(props) => props.boxdivparams.rotateY};
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);
  transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
    translateZ(var(--translateZ));
`;

const BoxesLoader = ({
  className = `boxesloader`,
  boxColor = `#5C8DF6`,
  shadowColor = `#dbe3f4`,
  duration = 800,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  let sizeFound = 0.0;
  if (isDesktopOrLaptop) {
    if (desktopSize !== "") sizeFound = parseFloat(desktopSize);
    else sizeFound = parseFloat(size) * 2;
  }
  if (isTabletOrMobile) {
    if (mobileSize !== "") sizeFound = parseFloat(mobileSize);
    else sizeFound = parseFloat(size);
  }

  let sizePassed = parseFloat(sizeFound);
  let sizeboxes = (sizePassed * 32) / 64;
  let sizemarginbottom = (sizePassed * 50) / 64;

  const boxRightColor = darken(0.15, boxColor);
  const boxLeftColor = darken(0.05, boxColor);

  const colors = {
    main: boxColor,
    right: boxRightColor,
    left: boxLeftColor,
    shadow: shadowColor,
  };

  let animparams = [
    {
      start: [100, 100, 200],
      end: [0, 0, 0],
    },
    {
      start: [0, 0, 100],
      end: [100, 0, 0],
    },
    {
      start: [100, 100, 0],
      end: [100, 100, 100],
    },
    {
      start: [200, 200, 100],
      end: [0, 100, 100],
    },
  ];
  let boxtransforms = [
    [100, 0],
    [0, 100],
    [100, 100],
    [200, 0],
  ];

  let boxdivparams = [
    {
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "0",
      background: boxColor,
      rotateX: "0deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "auto",
      right: "0",
      bottom: "auto",
      left: "auto",
      background: boxRightColor,
      rotateX: "0deg",
      rotateY: "90deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",
      background: boxLeftColor,
      rotateX: "-90deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "0",
      background: shadowColor,
      rotateX: "0deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) * 3 * -1)",
    },
  ];

  return (
    <Container
      sizemarginbottom={sizemarginbottom}
      duration={duration}
      sizeboxes={sizeboxes}
      className={className}
    >
      <StyledBox
        duration={duration}
        colors={colors}
        sizeboxes={sizeboxes}
        animparams={animparams[0]}
        boxtransforms={boxtransforms[0]}
      >
        <StyledBoxDiv boxdivparams={boxdivparams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[3]}></StyledBoxDiv>
      </StyledBox>
      <StyledBox
        duration={duration}
        colors={colors}
        sizeboxes={sizeboxes}
        animparams={animparams[1]}
        boxtransforms={boxtransforms[1]}
      >
        <StyledBoxDiv boxdivparams={boxdivparams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[3]}></StyledBoxDiv>
      </StyledBox>
      <StyledBox
        duration={duration}
        colors={colors}
        sizeboxes={sizeboxes}
        animparams={animparams[2]}
        boxtransforms={boxtransforms[2]}
      >
        <StyledBoxDiv boxdivparams={boxdivparams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[3]}></StyledBoxDiv>
      </StyledBox>
      <StyledBox
        duration={duration}
        colors={colors}
        sizeboxes={sizeboxes}
        animparams={animparams[3]}
        boxtransforms={boxtransforms[3]}
      >
        <StyledBoxDiv boxdivparams={boxdivparams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxdivparams={boxdivparams[3]}></StyledBoxDiv>
      </StyledBox>
    </Container>
  );
};

export default BoxesLoader;