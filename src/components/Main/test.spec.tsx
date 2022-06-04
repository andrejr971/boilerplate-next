import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { Main } from '.';

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = renderWithTheme(<Main title="test" />);

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
