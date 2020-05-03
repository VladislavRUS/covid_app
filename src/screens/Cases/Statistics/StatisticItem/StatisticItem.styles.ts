import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  height: 120px;
`;

export const Amount = styled.Text<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 78px;
`;

export const Text = styled.Text`
  color: #959595;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
`;
