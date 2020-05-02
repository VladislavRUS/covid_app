import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const CoronaImage = styled(Animated.Image).attrs({
  source: require('../../../assets/images/corona.png'),
})<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size: number;
}>`
  position: absolute;
  top: ${(props) => props.top || 'auto'};
  right: ${(props) => props.right || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  left: ${(props) => props.left || 'auto'};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
