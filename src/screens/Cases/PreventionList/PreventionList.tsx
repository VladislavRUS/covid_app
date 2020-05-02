import React from 'react';
import { Wrapper } from './PreventionList.styles';
import { IPrevention } from '../../../types';
import { PreventionItem } from './PreventionItem';

const preventions: IPrevention[] = [
  {
    id: 1,
    title: 'Wear face mask',
    text:
      'Since the start of the coronavirus outbreak' +
      'some places have fully embraced wearing face' +
      'masks, and anyone caught without one risks' +
      'becoming a social pariah.',
    imagePath: require('../../../assets/images/prevention_wearmask.png'),
  },
  {
    id: 2,
    title: 'Wash your hands',
    text:
      'These diseases include gastrointestinal' +
      'infections, such as Salmonella, and respiratory' +
      'infections, such as influenza.',
    imagePath: require('../../../assets/images/prevention_washhands.png'),
  },
];

const PreventionList = () => (
  <Wrapper>
    {preventions.map((prevention) => (
      <PreventionItem key={prevention.id} prevention={prevention} />
    ))}
  </Wrapper>
);

export { PreventionList };
