// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';


test('Dashboard renders correctly', () => {
    render(<Dashboard />)
})

test('Lock is open by default', () => {
    const dashboard = render(<Dashboard />);
    dashboard.getByText(/open/i)
    dashboard.getByText(/unlocked/i)
    const lockGateBtn = dashboard.getByText(/lock gate/i)
    const closeGateBtn = dashboard.getByText(/close gate/i)

    expect(closeGateBtn.disabled).toBeFalsy();
    expect(lockGateBtn.disabled).toBeTruthy();
})