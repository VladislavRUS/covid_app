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
