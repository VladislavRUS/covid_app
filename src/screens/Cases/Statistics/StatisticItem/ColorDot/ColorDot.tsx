import React from 'react';
import { Background, Ring } from './ColorDot.styles';

type Props = {
  backgroundColor: string;
  ringColor: string;
};

const ColorDot: React.FC<Props> = ({ backgroundColor, ringColor }) => (
  <Background color={backgroundColor}>
    <Ring color={ringColor} />
  </Background>
);

export { ColorDot };
