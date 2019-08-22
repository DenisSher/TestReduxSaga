import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  getIsLoading,
  getItem,
  setSearch,
  setIsLoading,
  fetchSearch
} from "../../modules/search";
import * as R from "ramda";
import { getSearch } from "../../modules/search/state"

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  //border: 1px solid blue;
  background-color: #edeef0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  //border: 1px solid red;
`;
const Any = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  //border: 1px solid purple;
  margin-top: 10px;
`;
const City = styled.div`
  //border: 1px solid green;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-family: Roboto sans-serif;
`;

const Input = styled.input`
  padding: 4px 4px;
  margin-bottom: 5px;
  font-family: Roboto sans-serif;
`;

const CityButton = styled.button`
  background-color: #4a76a8;
  border: 2px solid #4a76a8;
  color: #edeef0;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  //background-color: white;
  //color: black;
  &:hover {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  font-family: Roboto sans-serif;
`;

const SearchDumb = ({ fetchSearch, cities, ...props }) => {
  const [inputData, setInputData] = useState('')

  useEffect(() => {
    !R.isEmpty(inputData) && fetchSearch(inputData);
  }, [inputData]);

  const handleChange = (e) => {
    setInputData(e.target.value)
  }

  return (
    <Container>
      <Any>
        <Input placeholder="Write city" onChange={(e) => handleChange(e)}/>
        <Wrapper>
          {cities.map(x => (
            <City key={x.woeid}>
              {x.title}
              <CityButton children="add" />
            </City>
          ))}
        </Wrapper>
      </Any>
    </Container>
  );
};

const Search = connect(
  R.applySpec({ all: getSearch, cities: getItem, isLoading: getIsLoading }),
  { fetchSearch, setSearch, setIsLoading }
)(SearchDumb);

export default Search;
