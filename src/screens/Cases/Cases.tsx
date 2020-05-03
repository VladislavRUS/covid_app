import React, { useEffect, useState } from 'react';
import { SafeView } from '../../components/SafeView';
import { ScrollablePage } from '../../components/ScrollablePage';
import { ScreenActionButton } from '../../components/ScreenActionButton';
import { Routes } from '../../entry/Routes';
import { DoctorImage, MapImage, MapImageWrapper, PickerWrapper, StyledPicker, Wrapper } from './Cases.styles';
import { useNavigation } from '@react-navigation/native';
import { InfoSection } from '../../components/InfoSection';
import { Box } from '../../components/Box';
import { Statistics } from './Statistics';
import { useCountries } from '../../hooks/useCountries';
import { ICountry } from '../../types';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getLocalizedCountryName } from '../../i18n';

const Cases: React.FC = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const [currentCountry, setCurrentCountry] = useState<ICountry | null>(null);
  const { countries, isFetching } = useCountries();

  useEffect(() => {
    if (!currentCountry && countries.length > 0) {
      setCurrentCountry(countries[0]);
    }
  }, [currentCountry, countries]);

  const onSeeDetails = () => null;

  return (
    <SafeView>
      <ScrollablePage text={t('cases.title')} image={<DoctorImage />}>
        <ScreenActionButton
          onPress={() => navigation.navigate(Routes.INFORMATION)}
          iconPath={require('../../assets/icons/menu.png')}
        />

        <Wrapper>
          <Box paddingHorizontal={17} marginBottom={30}>
            <PickerWrapper>
              <StyledPicker
                selectedValue={currentCountry}
                onValueChange={(selectedCountry) => setCurrentCountry(selectedCountry)}
              >
                {countries.map((country) => {
                  const localizedName = getLocalizedCountryName(country.CountryCode, i18n.language);

                  return (
                    <StyledPicker.Item key={country.Country} label={localizedName || country.Country} value={country} />
                  );
                })}
              </StyledPicker>
            </PickerWrapper>
          </Box>

          <InfoSection>
            {isFetching ? (
              <Box alignItems={'center'} justifyContent={'center'} flex={1}>
                <ActivityIndicator color={'#132aa2'} size={'large'} />
              </Box>
            ) : (
              <InfoSection.Header>
                <InfoSection.Main>
                  <InfoSection.Title>
                    <InfoSection.TitleText text={t('cases.caseUpdate')} />
                  </InfoSection.Title>

                  {currentCountry && (
                    <InfoSection.Subtitle>
                      <InfoSection.SubtitleText
                        text={t('cases.newestUpdate', {
                          date: new Date(currentCountry.Date).toLocaleDateString(),
                          interpolation: { escapeValue: false },
                        })}
                      />
                    </InfoSection.Subtitle>
                  )}
                </InfoSection.Main>

                <InfoSection.Extra onPress={onSeeDetails}>
                  <InfoSection.ExtraText text={t('cases.seeDetails')} />
                </InfoSection.Extra>
              </InfoSection.Header>
            )}

            <Box padding={17}>
              {currentCountry && (
                <Statistics
                  infected={currentCountry.NewConfirmed}
                  deaths={currentCountry.NewDeaths}
                  recovered={currentCountry.NewRecovered}
                />
              )}
            </Box>
          </InfoSection>

          <Box marginBottom={35} />

          <InfoSection>
            <InfoSection.Header>
              <InfoSection.Main>
                <InfoSection.Title>
                  <InfoSection.TitleText text={t('cases.virusSpread')} />
                </InfoSection.Title>
              </InfoSection.Main>

              <InfoSection.Extra onPress={onSeeDetails}>
                <InfoSection.ExtraText text={t('cases.seeDetails')} />
              </InfoSection.Extra>
            </InfoSection.Header>

            <Box padding={17}>
              <MapImageWrapper>
                <MapImage />
              </MapImageWrapper>
            </Box>
          </InfoSection>
        </Wrapper>
      </ScrollablePage>
    </SafeView>
  );
};

export { Cases };
