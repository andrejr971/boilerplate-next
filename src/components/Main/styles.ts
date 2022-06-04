import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  padding: 1.6rem;

  img {
    width: 30rem;
  }

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.font.title};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      font-weight: ${theme.font.semibold};
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 4rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        background: ${theme.colors.gradient_01};
        bottom: 0;
        left: 0;
      }

      margin-bottom: 2.4rem;
    `}
  }
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.title};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    font-weight: ${theme.font.semibold};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 7.2rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: ${theme.colors.gradient_01};
      bottom: 0;
      left: 0;
    }
  `}
`;

export const ContentTech = styled.div`
  ${({ theme }) => css`
    margin-top: 4.8rem;

    ul {
      list-style: none;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      gap: 1.6rem;

      li {
        width: 100%;

        a {
          height: auto;

          display: flex;
          align-items: center;
          justify-content: center;

          background: ${theme.colors.gradient_05};
          border: 2px solid ${theme.colors.black_light};
          border-radius: 0.4rem;
          width: 100%;
          text-decoration: none;
          text-align: center;
          padding: 1.6rem;

          transition: all 0.2s ease-in;

          color: ${theme.colors.gray_500};

          &:hover {
            border-color: ${theme.colors.primary};

            color: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 4.8rem;

    code {
      display: flex;

      background: ${theme.colors.gradient_05};
      border: 2px solid ${theme.colors.black_light};

      font-size: ${theme.font.sizes.xsmall};

      padding: 1.6rem;
      border-radius: 0.4rem;

      margin: 0.8rem 0;

      ${media.lessThan('medium')`
        overflow-x: scroll;
      `}
    }
  `}
`;
