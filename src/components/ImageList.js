import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const Imagelist = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 50px;
  grid-auto-rows: 10px;
  padding: 0px 20px 0px 20px;
  margin-top: 0px;
  img {
    width: 250px;
  }
`;
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <Imagelist> {images}</Imagelist>;
};

export default ImageList;
