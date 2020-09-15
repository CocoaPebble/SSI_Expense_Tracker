import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

test('test Total output', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );

    expect(getByTestId('jestTest').textContent).toBe('$0');
});
