import React from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 34.9%;
`;
const Input = styled.input`
  width: 30vw;
  height: 50px;
  padding: 0 20px;
  border-radius: 20px;
  border-style: none;
  margin: 0 auto;
  display: block;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  color: #fff;
`;
const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <SearchStyle>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <Title>Unsplash</Title>
            <Subtitle>The content creators best friend</Subtitle>
            <Input
              placeholder="Search for awesome photos"
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </SearchStyle>
    );
  }
}

export default SearchBar;
