import React from 'react';
import ReactDOM from 'react-dom';
import WrapperTertiary from "./WrapperTertiary";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrapperTertiary />, div);
    ReactDOM.unmountComponentAtNode(div);
});