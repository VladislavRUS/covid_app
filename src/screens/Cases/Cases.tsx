import React from 'react';
import { SafeView } from '../../components/SafeView';
import { ScrollablePage } from '../../components/ScrollablePage';
import { DoctorImage, Wrapper, SectionDivider } from './Cases.styles';
import { InfoSection } from '../../components/InfoSection';
import { SymptomList } from './SymptomList';
import { PreventionList } from './PreventionList';

const Cases = () => {
  return (
    <SafeView>
      <ScrollablePage text={'Get to know\nAbout Covid-19.'} image={<DoctorImage />}>
        <Wrapper>
          <InfoSection title={'Symptomps'}>
            <SymptomList />
          </InfoSection>

          <SectionDivider />

          <InfoSection title={'Prevention'}>
            <PreventionList />
          </InfoSection>
        </Wrapper>
      </ScrollablePage>
    </SafeView>
  );
};

export { Cases };
