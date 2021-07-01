import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useToasts } from "react-toast-notifications";

import { ADD_COUNTRY_MUTATION } from "../mutations";
import { GET_ADDED_COUNTRIES_QUERY } from "../queries";
import {
  DashboardContainer,
  BaseAmountInputContainer,
  InputAmount,
  CountryObserverWrapper,
  SearchList,
  ObservationList,
  InputAmountLabelText,
} from "./index.styled";
import CountrySearchList from "./countrySearchList";
import CountryObservationList from "./countryObservationList";

const default_amount = 1000;
const limit = 10;

const Dashboard = (props) => {
  const [countries, setCountries] = React.useState([]);
  const [amount, setAmount] = React.useState(default_amount);
  const [cursor, setCursor] = React.useState(null);
  const { addToast } = useToasts();
  // Fetching the logged-in user's list of countries.
  const { data: addedList, refetch } = useQuery(GET_ADDED_COUNTRIES_QUERY, {
    variables: { limit, cursor },
  });
  const [addCountry, { data }] = useMutation(ADD_COUNTRY_MUTATION);

  React.useEffect(() => {
    if (addedList) setCountries(addedList.getAddedCountries.countryFeed);
  }, [addedList]);

  const handeAddCountry = async (country) => {
    try {
      const { name, population, currencies, flag } = country;
      let filteredCurrencies = currencies.map((currency) => {
        let cleanCurrencyObject = {};
        cleanCurrencyObject.name = currency.name;
        cleanCurrencyObject.code = currency.code;
        cleanCurrencyObject.symbol = currency.symbol;
        return cleanCurrencyObject;
      });
      let addCountryInput = {
        name,
        population,
        flag,
        currencies: filteredCurrencies,
      };
      await addCountry({
        variables: { input: addCountryInput },
      });
      addToast(`${name} added to the list.`, {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 1100,
      });
      refetch();
    } catch (err) {
      addToast(`${err}`, {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 2000,
      });
    }
  };

  return (
    <div>
      <DashboardContainer>
        <BaseAmountInputContainer>
          <InputAmount
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter an Amount in EURO to get it converted."
            value={amount}
          />
          <InputAmountLabelText>{`EURO ( € )`}</InputAmountLabelText>
        </BaseAmountInputContainer>
        <CountryObserverWrapper>
          <SearchList>
            <CountrySearchList
              addCallback={(country) => {
                handeAddCountry(country);
              }}
            />
          </SearchList>
          <ObservationList>
            <CountryObservationList
              countries={countries}
              baseCurrencyAmount={amount}
              onRemoveCountryCallback={() => {
                refetch();
              }}
            />
          </ObservationList>
        </CountryObserverWrapper>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
