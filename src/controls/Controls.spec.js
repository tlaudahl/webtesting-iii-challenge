// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';


test('controls render correctly', () => {
    render(<Controls />)
})


test('Unlocked and Open', () => {
    const controls = render(<Controls closed={false} locked={false} />);
    const closeBtn = controls.getByText(/close gate/i);
    const lockBtn = controls.getByText(/lock gate/i);
    expect(closeBtn.disabled).toBeFalsy();
    expect(lockBtn.disabled).toBeTruthy();
})

