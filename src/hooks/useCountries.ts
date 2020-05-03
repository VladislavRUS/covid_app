import { useEffect, useState } from 'react';
import { ICountry } from '../types';
import AsyncStorage from '@react-native-community/async-storage';

type CountriesState = {
  countries: ICountry[];
  isFetching: boolean;
};

export const useCountries = () => {
  const [countriesState, setCountriesState] = useState<CountriesState>({
    countries: [],
    isFetching: true,
  });

  useEffect(() => {
    async function fetchCountries() {
      setCountriesState({
        countries: countriesState.countries,
        isFetching: true,
      });

      let countriesResult = [];

      try {
        const response = await fetch('https://api.covid19api.com/summary');
        const { Countries } = await response.json();

        await AsyncStorage.setItem('v1/countries', JSON.stringify(Countries));
        countriesResult = Countries;
      } catch (e) {
        const countriesData = await AsyncStorage.getItem('v1/countries');

        if (countriesData) {
          countriesResult = JSON.parse(countriesData);
        }
      }

      setCountriesState({
        countries: countriesResult,
        isFetching: false,
      });
    }

    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return countriesState;
};
