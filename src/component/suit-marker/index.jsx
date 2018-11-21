import React from 'react';
import { Suits, RanksValues } from '../card/cardInfo';

const SuitAndRank = ({ suit, rank, position }) => {
    return (
        <div style={{
            ...position,
            display: 'inline-block',
            position: 'absolute',
            textAlign: 'center',
            transform: 'bottom' in position ? 'rotate(180deg)' : null
        }}>
            <div>{RanksValues[rank]}</div>
            <div style={{ position: 'relative', top: -5 }}>{Suits[suit]}</div>
        </div>
    );
};

export default SuitAndRank;
