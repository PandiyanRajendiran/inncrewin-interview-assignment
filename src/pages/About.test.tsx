import React from 'react';
import { render, screen, userEvent } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const { container } = render(<About />);
  const headerElelement = screen.getByText('About Page', { exact: false});
  expect(headerElelement).toBeInTheDocument();
  expect(container).toMatchSnapshot('about-snapshot');
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const { container } = render(<About />);
  
  let countElement = screen.getByText('Current Count: 0', { exact: false});
  expect(countElement).toBeInTheDocument();
  
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement);
  
  countElement = screen.getByText('Current Count: 1', { exact: false});
  expect(countElement).toBeInTheDocument();
});
