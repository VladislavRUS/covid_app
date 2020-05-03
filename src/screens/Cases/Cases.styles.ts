import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

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

const styles = {
  height: 50,
  borderRadius: 25,
  borderColor: '#e5e5e5',
  borderWidth: 1,
  fontSize: 14,
  color: '#303030',
  paddingHorizontal: 40,
};

export const pickerStyles = StyleSheet.create({
  inputIOS: {
    ...styles,
  },
  inputAndroid: {
    ...styles,
  },
  placeholder: {
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export const IconsWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 13px;
  padding-left: 15px;
`;

export const LocationIcon = styled.Image.attrs({
  source: require('../../assets/icons/location.png'),
  resizeMode: 'contain',
})`
  width: 15px;
  height: 15px;
`;

export const ArrowDownIcon = styled.Image.attrs({
  source: require('../../assets/icons/arrow_down.png'),
  resizeMode: 'contain',
})`
  width: 11px;
  height: 6px;
`;
