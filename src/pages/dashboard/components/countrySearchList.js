import React from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_COUNTRIES_BY_NAME_QUERY } from "../queries";

import {
  FlexRow,
  SearchCountryInput,
  SearchListWrapper,
  CountryItemWrapper,
  CountryItemFlag,
  CountryItemName,
  CountryItemAddButton,
} from "./index.styled";

export const CountrySearchList = ({ addCallback }) => {
  const [name, setName] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [getCountries, { data }] = useLazyQuery(GET_COUNTRIES_BY_NAME_QUERY);

  React.useEffect(() => {
    getCountries({ variables: { name } });
  }, [name, getCountries]);

  React.useEffect(() => {
    if (data) {
      setCountries(data.getCountriesByName);
    }
  }, [data]);

  return (
    <SearchListWrapper>
      <FlexRow>
        <SearchCountryInput
          type="number"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Type a country name here"
          value={name}
        />
      </FlexRow>
      {countries.length === 0 && (
        <div> Type in a country name to discover its exchange rate.</div>
      )}
      {countries.map((country) => {
        return (
          <CountryItem
            key={country.name}
            country={country}
            addCallback={addCallback}
          />
        );
      })}
    </SearchListWrapper>
  );
};

export const CountryItem = ({ country, addCallback }) => {
  return (
    <div>
      <CountryItemWrapper>
        <CountryItemFlag>
          <img width={50} height={50} src={country.flag} alt={country.name} />
        </CountryItemFlag>
        <CountryItemName>{country.name}</CountryItemName>
        <CountryItemAddButton onClick={() => addCallback(country)}>
          {`Add`}
        </CountryItemAddButton>
      </CountryItemWrapper>
    </div>
  );
};

export default CountrySearchList;
