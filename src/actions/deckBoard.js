import dataService from '../services/dataService';
const setCards = ({ cards }, dispatch) => dispatch({ type: 'SET_DECK_CARDS', cards });

// Getting  daata from graph ql Api for different set of functions
export default {
    showDeckDetail: (deckId, deckName) => dispatch => {
        dispatch({ type: 'SHOW_DECK_DETAIL', deckId, deckName });
        dataService.getDeckDetail(deckId).then(data => setCards(data, dispatch));
    },
    hideDeckDetail: dispatch => {
        dispatch({ type: 'HIDE_DECK_DETAIL' });
    },
    shuffleDeck: deckId => dispatch => {
        dataService.shuffleDeck(deckId).then(data => setCards(data, dispatch));
    },
    dealACard: deckId => dispatch => {
        dataService.dealACard(deckId).then(data => setCards(data, dispatch));
    }
};
