import { render } from '@testing-library/react';
import App from '../App';
import RouterIndex from '../routes';

test('test render App', () => {
  render(
      <App>
          <RouterIndex />
      </App>
  );
});
