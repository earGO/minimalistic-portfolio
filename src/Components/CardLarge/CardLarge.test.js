import React from 'react';
import ReactDOM from 'react-dom';
import CardLarge from "./CardLarge";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardLarge />,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});