import React, { useEffect } from 'react';
import { Wrapper, CoronaImage } from './Coronas.styles';
import { Animated } from 'react-native';

const coronas = [
  {
    id: 1,
    top: '21px',
    left: '51px',
    size: 10,
  },
  {
    id: 2,
    top: '80px',
    left: '20px',
    size: 20,
  },
  {
    id: 3,
    top: '21px',
    left: '50%',
    size: 20,
  },
  {
    id: 4,
    bottom: '81px',
    right: '111px',
    size: 15,
  },
  {
    id: 5,
    bottom: '38px',
    right: '18px',
    size: 28,
  },
];

const Coronas = () => {
  const animatedValues = coronas.map(() => new Animated.Value(20));

  let animations = coronas.map((_, idx) =>
    Animated.spring(animatedValues[idx], {
      toValue: new Animated.Value(0),
      stiffness: 200,
      useNativeDriver: true,
    }),
  );

  useEffect(() => {
    Animated.stagger(50, animations).start();
  }, [animations]);

  return (
    <Wrapper>
      {coronas.map((corona, idx) => (
        <CoronaImage
          key={corona.id}
          {...corona}
          style={{
            opacity: animatedValues[idx].interpolate({
              inputRange: [0, 20],
              outputRange: [1, 0],
            }),
            transform: [
              {
                translateY: animatedValues[idx].interpolate({
                  inputRange: [0, 20],
                  outputRange: [0, 20],
                }),
              },
            ],
          }}
        />
      ))}
    </Wrapper>
  );
};

export { Coronas };
