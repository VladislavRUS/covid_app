import React, { useState } from 'react';
import { Wrapper } from './SymptomList.styles';
import { ISymptom } from '../../../types';
import { SymptomItem } from './SymptomItem';
import { useTranslation } from 'react-i18next';

const SymptomList = () => {
  const { t } = useTranslation();
  const [symptoms] = useState<ISymptom[]>([
    {
      id: 1,
      title: t('symptom.headache'),
      imagePath: require('../../../assets/images/symptom_headache.png'),
    },
    {
      id: 2,
      title: t('symptom.cough'),
      imagePath: require('../../../assets/images/symptom_cough.png'),
    },
    {
      id: 3,
      title: t('symptom.fever'),
      imagePath: require('../../../assets/images/symptom_fever.png'),
    },
  ]);

  return (
    <Wrapper>
      {symptoms.map((symptom, index) => (
        <SymptomItem key={symptom.id} symptom={symptom} isLast={index === symptoms.length - 1} />
      ))}
    </Wrapper>
  );
};

export { SymptomList };
