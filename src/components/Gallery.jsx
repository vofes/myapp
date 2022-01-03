import React, { createRef } from "react";
import styled, { css } from 'styled-components';
import { useSwipeable } from 'react-swipeable';

import GalleryFoto1 from "../gallery(1).jpg"
import GalleryFoto2 from "../gallery(2).jpg"
import GalleryFoto3 from "../gallery(3).jpg"


const galleryArr = [
  GalleryFoto2,
  GalleryFoto3,
  GalleryFoto1
];

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ChildContainer = styled.div`
  width: 90%;
  max-width: 1000px;

  font-family: "Source Sans Pro","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;

  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;

  font-size: 32px;
`

const StyledButton = styled.button`
  display: flex;
  border: none;
  width: 10px;
  height: 10px;
  background-color: #e9e9e9;
  opacity: 0.5;
  border-radius: 50%;
  padding: 0;
  margin: 5px;
  transition: opacity 0.5s;

  &:hover {
    background-color: #ffffff;
    opacity: 1;
  }

  ${props => props.selected === true && css`
    background-color: #ffffff;
    opacity: 1;
  `};
`

const ButtonsContainer = styled.div`
  transform: translate(-50%,-50%);
  position: absolute;
  top: 95%;
  left: 50%;
  display: flex;
  justify-items: center;
  z-index: 10;
`


const StyledImageDisplay = styled.img`
  z-index: ${props => props.zIndex};
  max-width: 90%;
  height: auto;
  grid-column-start: 1;
  grid-row-start: 1;
  opacity: ${props => props.opacity};
  transition: opacity 0.0s;

  ${props => props.delayed === true && css`
    transition: opacity 1.0s;
  `};
`

const StyledGalleryContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  z-index: 9;
`

const ArrowButtons = styled.button`
  font-size: 32px;
  color: #e9e9e9;
  opacity: 0.5;
  position: absolute;
  width: 10%;
  height: 10%;
  background: none;
  transition: opacity 0.5s;
  z-index: 10;
  border: none;
  ${props => props.right && css`
    left: 85%;
  `};
  ${props => props.left && css`
    left: 5%;
  `};
  :hover {
    color: #ffffff;
    opacity: 1.0;
  }
  @media only screen and (hover: none) and (pointer: coarse){
    font-size: 0px;
  }
`

const AutoPlayButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  font-size: 20px;
  text-indent: 0;
  right: 7.5%;
  top: 2.5%;
  z-index: 10;
  border: 1px solid #2b2b2b;
  border-radius: 5px;
  background-color: #2b2b2b;
  opacity: 0.3;
  transition: opacity 0.5s;
  :hover {
    opacity: 1.0;
  }

  ${props => props.hide === true && css`
    visibility: hidden;
  `};
`

class CicleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }

  setSelected(bool) {
    this.setState({ selected: bool });
  }

  render() {
    return <StyledButton key={this.props.index} onClick={this.props.onClick} selected={this.state.selected} />;
  }
}

function GalleryObject(props) {
  const images = props.images;
  var buttons = [];
  var buttonsRefs = [];
  var mainIndex = 0;

  const currentDisplay = createRef();
  const oldDisplay = createRef();
  const autoPlayRef = createRef();

  images.forEach(element => {
    // Creating buttons and refs for selection
    const index = images.indexOf(element, 0);
    const ref = createRef();

    // Select first button on page load
    var selected = false;
    if (index === mainIndex) selected = true;

    // Pushing buttons in arrays
    buttons.push(<CicleButton ref={ref} key={index} index={index} onClick={() => changeImage({ image: element, index: index })} selected={selected} />);
    buttonsRefs.push(ref);
  });

  const updateButtons = (props) => {
    //Updating selection of buttons
    for (var i = 0; i < buttonsRefs.length; i++) {
      if (i === props.index) buttonsRefs[i].current.setSelected(true);
      else buttonsRefs[i].current.setSelected(false);
    }
  }

  // Autoplay loop
  let autoPlayTimeOut;


  const changeImage = (props) => {
    //Autoplay off
    if (autoPlayTimeOut !== undefined && autoPlayRef.current.state.isActive === false) {
      clearTimeout(autoPlayTimeOut);
      autoPlayTimeOut = undefined;
      return;
    }

    // Switching images
    currentDisplay.current.setImage(props.image, props.index, true);
    setTimeout(() => { oldDisplay.current.setImage(currentDisplay.current.state.displayedImage, currentDisplay.current.state.index, false); }, 1100);

    // Saving index
    mainIndex = props.index;

    // Updating buttons
    updateButtons(props);
    clearTimeout(autoPlayTimeOut);

    // Autoplay on
    if (autoPlayRef.current.state.isActive === true) {
      autoPlayTimeOut = setTimeout(() => { swipe(1); }, autoPlayRef.current.delay);
    }
  }

  const startAutoPlay = (props) => {
    // Engine start
    autoPlayTimeOut = setTimeout(() => { swipe(1); }, 200);
  }
  // Start autoplay on page load
  startAutoPlay();

  // Swipe handel
  const swipe = (direction) => {
    var index = mainIndex + direction;
    if (index > images.length - 1) index = 0;
    if (index < 0) index = images.length - 1;
    changeImage({ image: images[index], index: index });
  }

  // Swipe detector
  const handlers = useSwipeable(
    {
      onSwipedLeft: () => swipe(1),
      onSwipedRight: () => swipe(-1),
      trackMouse: true,
      preventDefaultTouchmoveEvent: true
    }
  );

  return (
    <StyledGalleryContainer {...handlers} onMouseEnter={() => { autoPlayRef.current.changeVisability(false); }} onMouseLeave={() => { autoPlayRef.current.changeVisability(true); }}>
      <GalleryDisplay ref={oldDisplay} index={0} startImage={images[0]} zIndex={1} />
      <GalleryDisplay ref={currentDisplay} index={0} startImage={images[0]} zIndex={2} />
      <ButtonsContainer> {buttons} </ButtonsContainer>
      <AutoPlay ref={autoPlayRef} startFunction={() => { startAutoPlay(); }} />
      <ArrowButtons left onClick={() => swipe(-1)}> ˂ </ArrowButtons>
      <ArrowButtons right onClick={() => swipe(1)}> ˃ </ArrowButtons>
    </StyledGalleryContainer>
  );
}

class AutoPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      isHidden: true
    };
    this.delay = 5000;
  }

  changeVisability(bool) {
    this.setState({ isHidden: bool });
  }

  handelClick() {
    if (this.state.isActive === false) this.props.startFunction();
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <AutoPlayButton hide={this.state.isHidden} onClick={() => { this.handelClick(); }}>
        {this.state.isActive ? "⏸" : "⏵"}
      </AutoPlayButton>
    );
  }
}

class GalleryDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      displayedImage: this.props.startImage,
      opacity: 1,
      delayed: false
    };
    this.display = createRef();
  }

  setImage(imageSrc, index, changeOpacity) {
    if (changeOpacity === true) {
      // Set opacity to 0 with no delay
      this.setState({ opacity: 0.0, delayed: false });
      // Slowly adding opacity and loading image
      setTimeout(() => this.setState({ index: index, displayedImage: imageSrc, opacity: 1.0, delayed: true }), 1);
      return;
    }
    // For oldDisplay (background)
    this.setState({ index: index, displayedImage: imageSrc, opacity: 1.0 });
  }

  render() {
    return <StyledImageDisplay
      ref={this.display}
      src={this.state.displayedImage}
      opacity={this.state.opacity}
      delayed={this.state.delayed}
      zIndex={this.props.zIndex}
    />;
  }
}

function Gallery() {
  return (
    <Container>
      <ChildContainer>
        <GalleryObject images={galleryArr} />
      </ChildContainer>
    </Container>
  );
}

export default Gallery;