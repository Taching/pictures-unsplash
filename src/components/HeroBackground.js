import React from "react";
import styled from "styled-components";

const BgHero = styled.div`
  background-color: blue;
  height: 100vh;
  z-index: -9999;
  display: flex;
  overflow: hidden;
  ${({ active }) =>
    active &&
    `
    display: none;
  `}
`;
const ImageStyleL = styled.div`
  width: 32%;
  height: 100vh;
  clip-path: polygon(0 0, 85% 0, 110% 100%, 0% 100%);
`;
const ImageStyleC = styled.div`
  margin-left: -70px;
  margin-right: 70px;
  width: 36%;
  height: 100vh;
  clip-path: polygon(0 0, 123% 0, 107% 100%, 22% 100%);
`;
const ImageStyleR = styled.div`
  clip-path: polygon(18% 0%, 110% 0%, 110% 100%, 0% 100%);
  margin-left: -36px;
  margin-right: 36px;
  width: 32%;
  height: 100vh;
`;
class HeroBackground extends React.Component {
  state = {
    Active: false
  };

  render() {
    const image1 = require("../temp/image1.jpeg");
    const image2 = require("../temp/image2.jpeg");
    const image3 = require("../temp/image3.jpeg");
    // const toggleActive = () => {
    //   if (this.props.images.length > 0) {
    //     this.setState({ Active: true });
    //   } else {
    //     this.setState({ Active: false });
    //   }
    // };
    return (
      <BgHero>
        <ImageStyleL>
          {/* <h1>{this.props.images.length > 0}</h1> */}
          <img src={image1} alt="1"></img>
        </ImageStyleL>
        <ImageStyleC>
          <img src={image2} alt="2"></img>
        </ImageStyleC>
        <ImageStyleR>
          <img src={image3} alt="3"></img>
        </ImageStyleR>
      </BgHero>
    );
  }
}
export default HeroBackground;
