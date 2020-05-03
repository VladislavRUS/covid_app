import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

const Box: React.FC<StyleProp<ViewStyle>> = (props) => <View style={props}>{props.children}</View>;

export { Box };
