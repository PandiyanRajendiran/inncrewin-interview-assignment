import React from 'react';
import { render, screen } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const { container,  history: { navigate }, } = render(<LayoutContainer />);
  const aboutElement = screen.getByText('Go to about');
  expect(aboutElement).toBeInTheDocument();

  expect(container).toMatchSnapshot('layout-snapshot');
  await navigate('/about');
  expect(aboutElement).not.toBeInTheDocument();
  const aboutHeader = screen.getByText('About Page');
  expect(aboutHeader).toBeInTheDocument();
});
