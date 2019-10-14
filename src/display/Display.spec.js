// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';


test('Display Renders Correctly', () => {
    render(<Display />)
})

test('Make sure its open and unlocked with locked=false, closed=false', () => {
    const display = render(<Display close={false} locked={false} />)

    display.getByText(/open/i);
    display.getByText(/unlocked/i);
})

test('Make sure its locked and closed with locked=true, closed=true', () => {
    const display = render(<Display closed={true} locked={true} />)

    display.getByText(/closed/i);
    display.getByText(/locked/i);
})

test('Background color is green when it is unlocked and/or open', () => {
    const display = render(<Display closed={false} locked={false} />)

    const unlocked = display.getByText(/unlocked/i);
    expect(unlocked.className).toMatch(/green-led/)

    const open = display.getByText(/open/i);
    expect(open.className).toMatch(/green-led/)
})

test('Background color is red when it is unlocked and/or open', () => {
    const display = render(<Display closed={true} locked={true} />)

    const locked = display.getByText(/locked/i);
    expect(locked.className).toMatch(/red-led/);

    const closed = display.getByText(/closed/i);
    expect(closed.className).toMatch(/red-led/);
})