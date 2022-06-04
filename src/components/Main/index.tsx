import { Content, ContentTech, Heading, Wrapper } from './styles';

export function Main() {
  return (
    <Wrapper>
      <Heading>Boilerplate NextJS</Heading>

      <ContentTech>
        <h2>This project uses lot of stuff as:</h2>

        <ul>
          <li>
            <a href="https://www.typescriptlang.org/">Typescript</a>
          </li>
          <li>
            <a href="https://nextjs.org/">NextJS</a>
          </li>
          <li>
            <a href="https://styled-components.com/">Styled Components</a>
          </li>
          <li>
            <a href="https://jestjs.io/">Jest</a>
          </li>
          <li>
            <a href="https://testing-library.com/docs/react-testing-library/intro/">
              React Testing Library
            </a>
          </li>
          <li>
            <a href="https://storybook.js.org/">Storybook</a>
          </li>
          <li>
            <a href="https://eslint.org/">ESLint</a>
          </li>
          <li>
            <a href="https://prettier.io/">Prettier</a>
          </li>
          <li>
            <a href="https://github.com/typicode/husky">Husky</a>
          </li>
          <li>
            <a href="https://github.com/shadowwalker/next-pwa">Next PWA</a>
          </li>
        </ul>
      </ContentTech>

      <Content>
        <h2>Clonning project</h2>
        <code>
          yarn create next-app -e https://github.com/andrejr971/boilerplate-next
          &apos;name project&apos;
        </code>
      </Content>

      <Content>
        <h2>Getting Started</h2>
        <p>First, run the development server:</p>
        <code>
          npm run dev
          <br /># <br />
          or yarn dev
        </code>
        <p>
          Open http://localhost:3000 with your browser to see the result. You
          can start editing the page by modifying pages/index.js. The page
          auto-updates as you edit the file.
        </p>
      </Content>
    </Wrapper>
  );
}
