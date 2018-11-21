export const Colors = {
    SPADES: '#212121',
    HEARTS: '#FF5722',
    DIAMONDS: '#FF5722',
    CLUBS: '#212121'
};

const sidePadding = 10;

// creating card layout according to suits
export const CardsLayouts = {
    1: [{ top: 62.5, left: 37.5 }],
    2: [{ top: 20, left: 37.5 }, { bottom: 20, left: 37.5, transform: 'rotate(180deg)' }],
    get 3() {
        return this[2].concat({ top: 62.5, left: 37.5 });
    },
    4: [
        { top: 20, left: sidePadding },
        { top: 20, right: sidePadding },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' }
    ],
    get 5() {
        return this[4].concat({ top: 62.5, right: 37.5 });
    },
    6: [
        { top: 20, left: sidePadding },
        { top: 62.5, left: sidePadding },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
        { top: 20, right: sidePadding },
        { top: 62.5, right: sidePadding },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' }
    ],
    get 7() {
        return this[6].concat({ top: 40, left: 37.5 });
    },
    get 8() {
        return this[7].concat({ bottom: 40, left: 37.5, transform: 'rotate(180deg)' });
    },
    9: [
        { top: 20, left: sidePadding },
        { top: 20, right: sidePadding },
        { top: 50, left: sidePadding },
        { top: 50, right: sidePadding },
        { top: 40, right: 37.5 },
        { bottom: 50, left: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 50, right: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' }
    ],
    get 10() {
        return this[9].concat({ bottom: 40, right: 37.5, transform: 'rotate(180deg)' });
    },
    11: '♗',
    12: '♕',
    13: '♔'
};
