import styled from 'styled-components/native';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const HEADER_HEIGHT = 235;

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#132aa2', '#2e75c6'],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
})`
  flex: 1;
`;

export const ScrollableWrapper = styled(Animated.ScrollView)`
  position: relative;
  background-color: #fff;
`;

export const Header = styled.View`
  position: relative;
  height: ${HEADER_HEIGHT}px;
  border: none;
  overflow: hidden;
`;

export const SvgWrapper = styled.View`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 45px;
  z-index: 1;
`;

export const Text = styled.Text`
  position: absolute;
  right: 45px;
  top: 80px;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  letter-spacing: 0.9px;
  font-family: Poppins-Bold;
`;
