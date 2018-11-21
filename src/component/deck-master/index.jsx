import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import actions from '../../actions';
import Card from './../card';
import DeckList from './../deck-list';

// Adding style to display cards
const styles = () => ({
    menuButton: {
        marginRight: 20
    },
    centerTextContainer: {
        textAlign: 'center',
        lineHeight: '48px'
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        marginLeft: '10px'
    }
});

// creating deckboard component
class DeckBoard extends React.Component {
    // event to shuffle deck
    shuffleDeck = () => {
        this.props.dispatch(actions.deckBoard.shuffleDeck(this.props.deckId));
    };

    // Event trigger on click of deal 
    dealACard = () => {
        this.props.dispatch(actions.deckBoard.dealACard(this.props.deckId));
    };


    // Event to hide deck user 
    hideDeckDetail = () => {
        this.props.dispatch(actions.deckBoard.hideDeckDetail);
    };

    // render all cards and button
    render() {
        const { cards, show, classes, deckName } = this.props;
        if (!show) {
            return <DeckList />;
        }
        return (
            <div>
                <AppBar position="static" color="default">
                    <div className="flexRow">
                        <IconButton
                            onClick={this.hideDeckDetail}
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Go Back"
                        >
                            <ArrowBack />
                        </IconButton>
                        <div className={classes.centerTextContainer}>Deck Details: {deckName}</div>
                        <Button className={classes.button} onClick={this.shuffleDeck}>
                            Shuffle Deck
                        </Button>
                        <Button className={classes.button} onClick={this.dealACard}>
                            Deal A Card
                        </Button>
                    </div>
                </AppBar>
                <div className="cardContainer">
                    {cards.map(({ id, suit, rank }) => (
                        <Card key={id} rank={rank} suit={suit} />
                    ))}
                </div>
                <Paper />
            </div>
        );
    }
}

export default connect(({ deckBoard: { show, deckId, deckName, cards } }) => {
    return {
        show,
        deckId,
        cards,
        deckName
    };
})(withStyles(styles)(DeckBoard));
