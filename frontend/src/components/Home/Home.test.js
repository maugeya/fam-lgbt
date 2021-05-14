import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from './Home';

describe('<Home />', () => {
  test('renders a message', () => {
    const { getByText } = render(<Home />);
    expect(getByText('HOME PAGE')).toBeInTheDocument();
  });
});
