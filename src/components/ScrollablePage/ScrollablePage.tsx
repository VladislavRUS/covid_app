import React, { useCallback, useEffect, useRef } from 'react';
import {
  ScrollableWrapper,
  Header,
  SvgWrapper,
  HEADER_HEIGHT,
  GradientBackground,
  Text,
} from './ScrollablePage.styles';
import { Svg, Rect, Ellipse, Defs, Mask } from 'react-native-svg';
import { Animated } from 'react-native';
import { Coronas } from './Coronas';

const SVG_HEIGHT = 45;

type Props = {
  text: string;
  image: React.ReactNode;
};

const ScrollablePage: React.FC<Props> = ({ children, text, image }) => {
  const ellipseRef = useRef<any>(null);
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  const radiusY = animatedScrollYValue.interpolate({
    inputRange: [0, HEADER_HEIGHT - SVG_HEIGHT],
    outputRange: [SVG_HEIGHT, 0],
    extrapolate: 'clamp',
  });

  const animatedCallback = useCallback(() => {
    const intValue = parseInt(JSON.stringify(radiusY), 10);

    if (ellipseRef.current) {
      ellipseRef.current.setNativeProps({ ry: intValue });
    }
  }, [radiusY]);

  useEffect(() => {
    animatedScrollYValue.addListener(animatedCallback);

    return () => {
      animatedScrollYValue.removeAllListeners();
    };
  }, [animatedCallback, animatedScrollYValue]);

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: animatedScrollYValue } } }], {
    useNativeDriver: true,
  });

  return (
    <ScrollableWrapper onScroll={onScroll}>
      <Header>
        <GradientBackground />

        <Coronas />

        <SvgWrapper>
          <Svg width={'100%'} height={'100%'}>
            <Defs>
              <Mask id="EllipseMask" x={'0'} y={'0'} width={'100%'} height={SVG_HEIGHT}>
                <Rect x="0" y="0" width="100%" height={SVG_HEIGHT} fill={'#fff'} />
                <Ellipse cx="50%" cy="0" rx="50%" ry={SVG_HEIGHT} fill={'#000'} ref={ellipseRef} />
              </Mask>
            </Defs>

            <Rect id="Rect" x="0" y="0" width="100%" height="45" fill={'#fff'} mask={'url(#EllipseMask)'} />
          </Svg>
        </SvgWrapper>

        {image}

        <Text>{text}</Text>
      </Header>
      {children}
    </ScrollableWrapper>
  );
};

export { ScrollablePage };
