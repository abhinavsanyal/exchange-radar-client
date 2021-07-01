import React from "react";
import { useMutation } from "@apollo/client";
import { useToasts } from "react-toast-notifications";

import { REMOVE_COUNTRY_MUTATION } from "../mutations";
import {
  FlexRow,
  SearchCountryInput,
  SearchListWrapper,
  AddedCountryItem,
  AddedCountryItemFlag,
  AddedCountryItemBody,
  AddedCountryName,
  AddedCountryPopulation,
  AddedCountryCurrencies,
  AddedCountryConvertedAmount,
  RemoveCountry,
} from "./index.styled";
import { Icon } from "semantic-ui-react";

export const CountryObservationList = ({
  countries,
  baseCurrencyAmount,
  onRemoveCountryCallback,
}) => {
  const [removeCountry, { data: removedCountry }] = useMutation(
    REMOVE_COUNTRY_MUTATION
  );
  const { addToast } = useToasts();

  const handeRemoveCountry = async (id) => {
    try {
      await removeCountry({
        variables: { id },
      });
      addToast(`Country removed successfully.`, {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 1100,
      });
      onRemoveCountryCallback();
    } catch (err) {
      addToast(`${err}`, {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 2000,
      });
    }
  };

  return (
    <SearchListWrapper>
      {countries.map((country) => {
        return (
          <CountryItem
            key={country.name}
            country={country}
            amount={baseCurrencyAmount}
            handeRemoveCountry={handeRemoveCountry}
          />
        );
      })}
    </SearchListWrapper>
  );
};

export const CountryItem = ({ country, amount, handeRemoveCountry }) => {
  return (
    <div>
      <AddedCountryItem>
        <AddedCountryItemFlag>
          <img width={50} height={50} src={country.flag} alt={country.name} />
        </AddedCountryItemFlag>
        <AddedCountryItemBody>
          <AddedCountryName>{country.name}</AddedCountryName>
          <AddedCountryPopulation>
            Population: <span>{country.population}</span>
          </AddedCountryPopulation>
          <AddedCountryCurrencies>
            Currencies:
            {country.currencies.map((currency) => (
              <span>{`${currency.name}${"|"}${currency.symbol}`}</span>
            ))}
          </AddedCountryCurrencies>
        </AddedCountryItemBody>
        <AddedCountryConvertedAmount>
          <div> {(country.exchangeRateToSEK * amount).toFixed(1)}</div>
          <div> {country.currencies[0].symbol}</div>
        </AddedCountryConvertedAmount>
        <RemoveCountry
          onClick={() => {
            handeRemoveCountry(country.id);
          }}
        >
          <div>
            <Icon className="trash" size="large" color="red"></Icon>
          </div>
        </RemoveCountry>
      </AddedCountryItem>
    </div>
  );
};

export default CountryObservationList;
