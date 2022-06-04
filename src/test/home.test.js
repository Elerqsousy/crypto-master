import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../pages/home';
import { createTestStore } from '../redux/store';

let store;
describe('Using actual redux store', () => {
  beforeEach(() => {
    store = createTestStore();
  }); test('Home component to render with actual data and to show heading', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    ); await findByText('Rising Coins');
  });
});
