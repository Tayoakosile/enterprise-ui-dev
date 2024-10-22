import { fireEvent, render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it.todo('has an input field for a new item', () => {
  render(<PackingList />);
});

it('has a "Add New Item" button that is disabled when the input is empty', async () => {

  const { user } = render(<PackingList />);
  const addNewItemInput = screen.getByRole('searchbox');

  expect(addNewItemInput).toBeEmptyDOMElement();
  expect(screen.getByRole('button', { name: 'Add New Item' })).toBeDisabled();

  await user.type(addNewItemInput, 'Apple');
  expect(screen.getByRole('button', { name: 'Add New Item' })).toBeEnabled();

});

it.todo(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {},
);

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {},
);
