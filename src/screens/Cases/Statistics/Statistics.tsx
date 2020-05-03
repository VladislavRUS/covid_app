import React from 'react';
import { Wrapper } from './Statistics.styles';
import { StatisticItem } from './StatisticItem';
import { Box } from '../../../components/Box';
import { useTranslation } from 'react-i18next';

type Props = {
  infected: number;
  deaths: number;
  recovered: number;
};

const Statistics: React.FC<Props> = ({ infected, deaths, recovered }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Box width={'33%'}>
        <StatisticItem
          backgroundColor={'#ffede4'}
          ringColor={'#ff8748'}
          amount={infected}
          text={t('statistics.infected')}
        />
      </Box>

      <Box width={'33%'}>
        <StatisticItem
          backgroundColor={'#ffd9d9'}
          ringColor={'#ff4848'}
          amount={deaths}
          text={t('statistics.deaths')}
        />
      </Box>

      <Box width={'33%'}>
        <StatisticItem
          backgroundColor={'#d5f9d2'}
          ringColor={'#36c12c'}
          amount={recovered}
          text={t('statistics.recovered')}
        />
      </Box>
    </Wrapper>
  );
};

export { Statistics };
