import styled from 'styled-components/native';

export const Background = styled.View<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const Ring = styled.View<{ color: string }>`
  width: 12px;
  height: 12px;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${(props) => props.color};
`;
