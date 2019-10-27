import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import HeroBackground from "./HeroBackground";
import styled from "styled-components";
const AppStyle = styled.div`
  position: relative;
  height: 100vh;
`;
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <AppStyle>
        <HeroBackground images={this.state.images} />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </AppStyle>
    );
  }
}

export default App;
