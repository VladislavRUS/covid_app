import React from 'react';
import {
  Wrapper,
  HeaderWrapper,
  MainWrapper,
  TitleWrapper,
  TitleText as TitleTextContent,
  SubtitleWrapper,
  SubtitleText as SubtitleTextContent,
  ExtraWrapper,
  ExtraText as ExtraTextContent,
} from './InfoSection.styles';

type InfoSectionProps = React.FC & {
  Header: typeof Header;
  Main: typeof Main;
  Title: typeof Title;
  TitleText: typeof TitleText;
  Subtitle: typeof Subtitle;
  SubtitleText: typeof SubtitleText;
  Extra: typeof Extra;
  ExtraText: typeof ExtraText;
};

const InfoSection: InfoSectionProps = ({ children }) => <Wrapper>{children}</Wrapper>;

const Header: React.FC = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;
InfoSection.Header = Header;

const Main: React.FC = ({ children }) => <MainWrapper>{children}</MainWrapper>;
InfoSection.Main = Main;

const Title: React.FC = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;
InfoSection.Title = Title;

const TitleText: React.FC<{ text: string }> = ({ text }) => <TitleTextContent>{text}</TitleTextContent>;
InfoSection.TitleText = TitleText;

const Subtitle: React.FC = ({ children }) => <SubtitleWrapper>{children}</SubtitleWrapper>;
InfoSection.Subtitle = Subtitle;

const SubtitleText: React.FC<{ text: string }> = ({ text }) => <SubtitleTextContent>{text}</SubtitleTextContent>;
InfoSection.SubtitleText = SubtitleText;

const Extra: React.FC<{ onPress: () => void }> = ({ onPress, children }) => (
  <ExtraWrapper onPress={onPress}>{children}</ExtraWrapper>
);
InfoSection.Extra = Extra;

const ExtraText: React.FC<{ text: string }> = ({ text }) => <ExtraTextContent>{text}</ExtraTextContent>;
InfoSection.ExtraText = ExtraText;

export { InfoSection };
