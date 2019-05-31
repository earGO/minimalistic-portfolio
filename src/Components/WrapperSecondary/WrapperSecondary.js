import React from 'react';
import './WrapperSecondary.scss';

class WrapperSecondary extends React.Component {
    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                cardText: 'This is a secondary card'
            });
        });
        return (
            <div className={'wrapper'}>
                { children }
            </div>
        )
    }
};

export default WrapperSecondary;