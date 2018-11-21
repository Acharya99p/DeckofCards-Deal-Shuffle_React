let defaultState = {
    deckId: null,
    show: false,
    cards: [],
    deckName: null
};

// Creating switch case according to Type and sending payload
export default (state = defaultState, { type, deckName, deckId, cards }) => {
    switch (type) {
        case 'SHOW_DECK_DETAIL':
            return { ...state, deckId, show: true, deckName };
        case 'HIDE_DECK_DETAIL':
            return { ...state, show: false };
        case 'SET_DECK_CARDS':
            return { ...state, cards };
        default:
            return state;
    }
};
