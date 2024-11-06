import styled from 'styled-components';
import Separator from '../Separator';

const Container = styled.div`
  padding: 0.25rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

const SubtitleText = styled.span`
  color: #9ca3af;
  margin-top: 0.25rem;
`;

const StyledSeparator = styled(Separator)`
  margin: 0.25rem 0;
`;

export { Container, StyledSeparator, SubtitleText, TitleText, TitleWrapper };
