import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: 10px;
`;

export const DoctorImage = styled.Image.attrs({
  source: require('../../assets/images/doctor_info.png'),
  resizeMode: 'contain',
})`
  position: absolute;
  top: 41px;
  left: -58px;
  width: 320px;
  height: 451px;
`;

export const SectionDivider = styled.View`
  height: 28px;
`;
