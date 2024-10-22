import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type optionType = Parameters<typeof render>[1];
export const renderComponent = (
  ui: React.ReactElement,
  options?: optionType,
) => {
  const user = userEvent.setup();
  const result = render(ui, options);
  return {
    ...result,
    user,
  };
};
export {};

/**
 * For a complete example, see: test/utilities.ts
 */
