import { fireEvent, render, screen, waitFor } from 'test/utilities';
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
  render(<PackingList />);
  const addNewItemInput = screen.getByRole('searchbox');
  expect(addNewItemInput).toHaveValue('');
  expect(screen.getByRole('button', { name: 'Add New Item' })).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const addNewItemInput = screen.getByRole('searchbox');

  await user.type(addNewItemInput, 'Apple');

  expect(addNewItemInput).toHaveValue('Apple');
  expect(screen.getByRole('button', { name: 'Add New Item' })).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const getAddNewItemInputField = screen.getByRole('searchbox');
  const getAddNewItemButton = screen.getByRole('button', {
    name: 'Add New Item',
  });

  await user.type(getAddNewItemInputField, 'Apple');
  await user.click(getAddNewItemButton);

  // waitFor(()=>)
  expect(screen.getAllByLabelText('Apple')).toBeDefined();
});
