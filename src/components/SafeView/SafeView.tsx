import React from 'react';
import { StyledSafeView } from './SafeView.styles';

const SafeView: React.FC = ({ children }) => <StyledSafeView>{children}</StyledSafeView>;

export { SafeView };
