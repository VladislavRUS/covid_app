import React from 'react';
import { Wrapper, Icon } from './ScreenActionButton.styles';
import { ImageSourcePropType } from 'react-native';

type Props = {
  onPress: () => void;
  iconPath: ImageSourcePropType;
};

const ScreenActionButton: React.FC<Props> = ({ onPress, iconPath }) => (
  <Wrapper onPress={onPress}>
    <Icon source={iconPath} />
  </Wrapper>
);

export { ScreenActionButton };
