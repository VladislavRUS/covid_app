import React from 'react';
import { Wrapper, Title, Image, ImageBackground, Images } from './SymptomItem.styles';
import { ISymptom } from '../../../../types';

type Props = {
  symptom: ISymptom;
  isLast: boolean;
};

const SymptomItem: React.FC<Props> = ({ symptom, isLast }) => (
  <Wrapper isLast={isLast}>
    <Images>
      <ImageBackground />
      <Image source={symptom.imagePath} />
    </Images>
    <Title>{symptom.title}</Title>
  </Wrapper>
);

export { SymptomItem };
