import dataService from '../services/dataService';

const getDeckList = () => dispatch =>
    dataService.getDeckList().then(data => {
        dispatch({ type: 'UPDATE_DECK_DATA', data });
    });

export default {
    getDeckList,
    addDeck: (name) => dispatch =>
        dataService.addDeck(name).then(_ => dispatch(getDeckList()))
};
