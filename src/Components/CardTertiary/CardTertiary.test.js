import React from 'react';
import ReactDOM from 'react-dom';
import CardTertiary from "./CardTertiary";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardTertiary />, div);
    ReactDOM.unmountComponentAtNode(div);
});