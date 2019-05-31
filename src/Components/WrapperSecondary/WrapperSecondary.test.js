import React from 'react';
import ReactDOM from 'react-dom';
import WrapperSecondary from "./WrapperSecondary";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrapperSecondary />, div);
    ReactDOM.unmountComponentAtNode(div);
});