import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { Main } from '.';

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /Boilerplate NextJS/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /typescript/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
