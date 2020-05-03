import { ImageSourcePropType } from 'react-native';

export interface ISymptom {
  id: number;
  title: string;
  imagePath: ImageSourcePropType;
}

export interface IPrevention {
  id: number;
  title: string;
  text: string;
  imagePath: ImageSourcePropType;
}

export interface ICountry {
  Country: string;
  CountryCode: string;
  NewConfirmed: 0;
  TotalConfirmed: 0;
  NewDeaths: 0;
  TotalDeaths: 0;
  NewRecovered: 0;
  TotalRecovered: 0;
  Date: '2020-05-02T18:46:23Z';
}
