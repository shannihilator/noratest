import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import {render, fireEvent} from '@testing-library/react';

describe('<CardContainer />', () => {
    const  person = {
        email_address: "test@test.com",
        first_name: "Jest",
        title: "TestBoss"
    }
    it('should display user info on  card component', () => {
        const { getByText } = render(<CardContainer person={person} />)
        expect(getByText('Jest')).toBeTruthy();
        expect(getByText('test@test.com')).toBeTruthy();
        expect(getByText('TestBoss')).toBeTruthy();

    })
    it('should display the letter count when "show" prop is true', () => {
        const { getByText } = render(<CardContainer person={person} show={true} />)
        // Most use letter in email and 4 is count
        expect(getByText('t')).toBeTruthy();
        expect(getByText('4')).toBeTruthy();
    })
})
