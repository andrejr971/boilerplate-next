import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.title};
  `}
`;
