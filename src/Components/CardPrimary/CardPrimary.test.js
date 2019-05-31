import React from 'react';
import ReactDOM from 'react-dom';
import CardPrimary from "./CardPrimary";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardPrimary />, div);
    ReactDOM.unmountComponentAtNode(div);
});