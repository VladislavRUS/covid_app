import styled from 'styled-components/native';

export const Wrapper = styled.View<{ isLast: boolean }>`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 111px;
  border-radius: 15px;
  background-color: #fff;
  margin-right: ${(props) => (props.isLast ? 0 : 11)}px;
  box-shadow: 0 8px 24px rgba(183, 183, 183, 0.16);
  elevation: 2;
`;

export const Images = styled.View`
  position: relative;
  margin-top: 6px;
  width: 85px;
  height: 81px;
`;

export const ImageBackground = styled.Image.attrs({
  source: require('../../../../assets/images/symptom_bg.png'),
  resizeMode: 'contain',
})`
  position: absolute;
  top: 8px;
  width: 85px;
  height: 73px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  left: 15px;
  width: 59px;
  height: 73px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #303030;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
