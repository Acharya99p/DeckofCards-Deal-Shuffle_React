import React from 'react';
import SuitAndRank from './../suit-marker';
import { Colors, CardsLayouts } from './cardStyles';
import { Suits } from './cardInfo';
import './card.css';

// getting symbol on rank basis 
const RankSymbol = ({ symbol }) => {
    return <div className="rank-symbol">{symbol}</div>;
};

// Getting all symbol like heart spade
const SuitSymbol = ({ suit, style }) => {
    return (
        <div className="suits-symbol" style={style}>
            {Suits[suit]}
        </div>
    );
};

export default ({ rank, suit }) => {
    let suitSymbols;
    let rankSymbol;
    let _style = {
        color: Colors[suit]
    };
    if (Array.isArray(CardsLayouts[rank])) {
        suitSymbols = CardsLayouts[rank].map((style, i) => (
            <SuitSymbol style={style} suit={suit} key={i} />
        ));
    } else {
        rankSymbol = <RankSymbol symbol={CardsLayouts[rank]} />;
    }
    return (
        <div style={_style} className="my-game-card">
            <SuitAndRank suit={suit} rank={rank} position={{ top: 4, left: 5 }} />
            <SuitAndRank suit={suit} rank={rank} position={{ bottom: 4, right: 5 }} />
            {suitSymbols}
            {rankSymbol}
        </div>
    );
};
