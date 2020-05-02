import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  margin-bottom: 28px;
  flex-direction: row;
  height: 136px;
  box-shadow: 0 8px 24px rgba(183, 183, 183, 0.16);
  border-radius: 20px;
  background-color: #ffffff;
  elevation: 2;
`;

export const ImageBackgroundWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 20px;
`;

export const ImageBackground = styled.Image.attrs({
  source: require('../../../../assets/images/prevention_bg.png'),
  resizeMode: 'stretch',
})`
  position: relative;
  left: -10px;
  width: 55%;
  height: 100%;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  left: 0;
  top: -10px;
  width: 138px;
  height: 156px;
`;

export const Information = styled.View`
  width: 184px;
  margin-left: auto;
  padding: 16px;
`;

export const Title = styled.Text`
  color: #303030;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.7px;
  line-height: 22px;
`;

export const Text = styled.Text`
  color: #4b4b4b;
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.4px;
  line-height: 14px;
  margin-bottom: 14px;
`;

export const Chevron = styled.Image.attrs({
  source: require('../../../../assets/icons/chevron.png'),
  resizeMode: 'contain',
})`
  margin-left: auto;
  width: 5px;
  height: 11px;
`;
