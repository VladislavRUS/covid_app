import React from 'react';
import { Wrapper } from './SymptomList.styles';
import { ISymptom } from '../../../types';
import { SymptomItem } from './SymptomItem';

const symptoms: ISymptom[] = [
  {
    id: 1,
    title: 'Headache',
    imagePath: require('../../../assets/images/symptom_headache.png'),
  },
  {
    id: 2,
    title: 'Cough',
    imagePath: require('../../../assets/images/symptom_cough.png'),
  },
  {
    id: 3,
    title: 'Fever',
    imagePath: require('../../../assets/images/symptom_fever.png'),
  },
];

const SymptomList = () => (
  <Wrapper>
    {symptoms.map((symptom, index) => (
      <SymptomItem key={symptom.id} symptom={symptom} isLast={index === symptoms.length - 1} />
    ))}
  </Wrapper>
);

export { SymptomList };
