import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent} from '@testing-library/react';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render a loader while  waiting for api call to complete', ()=>  {
    const { getAllByLabelText } = render(<App/>);
    expect(getAllByLabelText('loader')).toBeTruthy();
  })

})



