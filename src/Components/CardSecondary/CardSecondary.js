import React from 'react';
import './CardSecondary.scss';

const CardSecondary = ({cardText}) => {
    return (
        <div className={'card secondary'}>
            <p>{cardText}</p>
        </div>

    )
};

export default CardSecondary;