import React from 'react';
import './WrapperTertiary.scss';

class WrapperTertiary extends React.Component {
    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                cardText: 'This is a tertiary card'
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