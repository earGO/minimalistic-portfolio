import React from 'react';
import './WrapperTertiary.scss';

const titles=[
    'Tertiary card 1',
    'Tertiary card 2'
];

class WrapperTertiary extends React.Component {
    render() {
        const children = React.Children.map(this.props.children, (child,key) => {
            let cardText = titles[key];
            return React.cloneElement(child, {
                cardText: cardText
            });
        });
        return (
            <div className={'wrapper'}>
                { children }
            </div>
        )
    }

};

export default WrapperTertiary;