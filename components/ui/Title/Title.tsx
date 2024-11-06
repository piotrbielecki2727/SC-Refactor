'use client';
import { FC } from 'react';
import ChangingTheme from '../ChangingTheme';
import * as S from './styled';

type TitleProps = {
  title: string;
  subtitle?: string;
};

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <S.Container>
        <S.TitleWrapper>
          <S.TitleText>{title}</S.TitleText>
          {subtitle && <S.SubtitleText>{subtitle}</S.SubtitleText>}
        </S.TitleWrapper>
        <div>
          <ChangingTheme />
        </div>
      </S.Container>
      <S.StyledSeparator />
    </div>
  );
};

export default Title;
