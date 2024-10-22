import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { renderComponent } from './test/utilities';

test('it should render the component', () => {
  const { user } = renderComponent(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = renderComponent(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.textContent).toBe('0');
  const button = screen.getByRole('button', { name: /increment/i });
  await user.click(button);

  expect(currentCount.textContent).toBe('1');
  // fireEvent.click(button);
  await user.click(button);
  expect(currentCount.textContent).toBe('2');
});
