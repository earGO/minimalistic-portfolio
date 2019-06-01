import React from 'react';
import './WrapperSecondary.scss';

const titles=[
    'Secondary card 1',
    'Secondary card 2'
];

class WrapperSecondary extends React.Component {
    render() {
        const children = React.Children.map(this.props.children, (child,key) => {
            let cardText = titles[key];
            return React.cloneElement(child, {
                cardText: cardText
            });
        });
        return (
            <div className={'wrapper secondary-wrapper'}>
                { children }
            </div>
        )
    }
};

export default WrapperSecondary;