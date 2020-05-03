import React from 'react';
import {
  Wrapper,
  Title,
  Image,
  ImageBackground,
  Information,
  Text,
  ImageBackgroundWrapper,
  Chevron,
} from './PreventionItem.styles';
import { IPrevention } from '../../../../types';

type Props = {
  prevention: IPrevention;
};

const PreventionItem: React.FC<Props> = ({ prevention }) => (
  <Wrapper>
    <ImageBackgroundWrapper>
      <ImageBackground />
    </ImageBackgroundWrapper>

    <Image source={prevention.imagePath} />

    <Information>
      <Title>{prevention.title}</Title>
      <Text numberOfLines={4}>{prevention.text}</Text>
      <Chevron />
    </Information>
  </Wrapper>
);

export { PreventionItem };
