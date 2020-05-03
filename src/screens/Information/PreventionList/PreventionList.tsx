import React, { useState } from 'react';
import { Wrapper } from './PreventionList.styles';
import { IPrevention } from '../../../types';
import { PreventionItem } from './PreventionItem';
import { useTranslation } from 'react-i18next';

const PreventionList = () => {
  const { t } = useTranslation();

  const [preventions] = useState<IPrevention[]>([
    {
      id: 1,
      title: t('prevention.mask.title'),
      text: t('prevention.mask.description'),
      imagePath: require('../../../assets/images/prevention_wearmask.png'),
    },
    {
      id: 2,
      title: t('prevention.hands.title'),
      text: t('prevention.hands.description'),
      imagePath: require('../../../assets/images/prevention_washhands.png'),
    },
  ]);

  return (
    <Wrapper>
      {preventions.map((prevention) => (
        <PreventionItem key={prevention.id} prevention={prevention} />
      ))}
    </Wrapper>
  );
};

export { PreventionList };
