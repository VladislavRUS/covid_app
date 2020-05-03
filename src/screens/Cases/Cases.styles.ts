import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: 10px;
`;

export const DoctorImage = styled.Image.attrs({
  source: require('../../assets/images/doctor_cases.png'),
  resizeMode: 'contain',
})`
  position: absolute;
  top: 45px;
  left: 34px;
  width: 194px;
  height: 373px;
`;

export const MapImageWrapper = styled.View`
  height: 178px;
  border-radius: 20px;
  flex-grow: 1;
  elevation: 2;
  background-color: #fff;
`;

export const MapImage = styled.Image.attrs({
  source: require('../../assets/images/map.png'),
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const PickerWrapper = styled.View`
  border: 1px solid #e5e5e5;
  border-radius: 25px;
`;

export const StyledPicker = styled.Picker`
  height: 50px;
  border: 1px solid black;
`;
