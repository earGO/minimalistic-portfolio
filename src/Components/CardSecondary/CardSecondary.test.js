import React from 'react';
import ReactDOM from 'react-dom';
import CardSecondary from "./CardSecondary";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardSecondary/>,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});