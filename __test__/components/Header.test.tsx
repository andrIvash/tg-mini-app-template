import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../src/components/Header/Header';

test('renders the Header with user name', () => {
    const user = { first_name: 'John' };
    render(<Header user={user} />);
    const headerElement = screen.getByText(/John/i);
    expect(headerElement).toBeInTheDocument();
});