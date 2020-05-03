import React from 'react';
import { SafeView } from '../../components/SafeView';
import { ScrollablePage } from '../../components/ScrollablePage';
import { DoctorImage, Wrapper } from './Information.styles';
import { InfoSection } from '../../components/InfoSection';
import { SymptomList } from './SymptomList';
import { PreventionList } from './PreventionList';
import { ScreenActionButton } from '../../components/ScreenActionButton';
import { useNavigation } from '@react-navigation/native';
import { Box } from '../../components/Box';
import { useTranslation } from 'react-i18next';

const Information: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <SafeView>
      <ScrollablePage text={t('information.title')} image={<DoctorImage />}>
        <ScreenActionButton
          onPress={() => navigation.goBack()}
          iconPath={require('../../assets/icons/arrow_back.png')}
        />

        <Wrapper>
          <InfoSection>
            <InfoSection.Header>
              <InfoSection.Main>
                <InfoSection.Title>
                  <InfoSection.TitleText text={t('information.symptoms')} />
                </InfoSection.Title>
              </InfoSection.Main>
            </InfoSection.Header>

            <SymptomList />
          </InfoSection>

          <Box marginBottom={28} />

          <InfoSection>
            <InfoSection.Header>
              <InfoSection.Main>
                <InfoSection.Title>
                  <InfoSection.TitleText text={t('information.prevention')} />
                </InfoSection.Title>
              </InfoSection.Main>
            </InfoSection.Header>

            <PreventionList />
          </InfoSection>
        </Wrapper>
      </ScrollablePage>
    </SafeView>
  );
};

export { Information };
