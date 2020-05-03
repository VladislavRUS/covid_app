import React from 'react';
import { Wrapper, Amount, Text } from './StatisticItem.styles';
import { ColorDot } from './ColorDot';

type Props = {
  backgroundColor: string;
  ringColor: string;
  amount: number;
  text: string;
};

const StatisticItem: React.FC<Props> = ({ backgroundColor, ringColor, amount, text }) => (
  <Wrapper>
    <ColorDot backgroundColor={backgroundColor} ringColor={ringColor} />
    <Amount color={ringColor}>{amount}</Amount>
    <Text>{text}</Text>
  </Wrapper>
);

export { StatisticItem };
