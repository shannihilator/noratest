import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './AppBar';
import {render, fireEvent} from '@testing-library/react';

describe('<AppBar />', () => {
    
    it('should display github repo', () => {
        const { getByText } = render(<AppBar />)
        expect(getByText('Github repo')).toBeTruthy();
    })
})