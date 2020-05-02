import React from 'react';
import { Wrapper, Title } from './InfoSection.styles';

type Props = {
  title: string;
};

const InfoSection: React.FC<Props> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export { InfoSection };
