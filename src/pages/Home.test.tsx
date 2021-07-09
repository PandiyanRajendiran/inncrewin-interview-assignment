import React from 'react';
import { render, screen } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const { container } = render(<Home />);
  const welcomeElement = screen.getByText(/Welcome!/i);
  expect(welcomeElement).toBeInTheDocument();
  expect(container).toMatchSnapshot('home-snapshot');
});
