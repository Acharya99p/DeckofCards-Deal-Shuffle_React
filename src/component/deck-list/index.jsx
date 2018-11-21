import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';

import actions from '../../actions';
import DeckDialog from '../deck-dialog';

import './deck-list.css';

// Adding style to component
const styles = theme => ({
    button: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    },
    centerTextContainer: {
        textAlign: 'center',
        fontSize: '30px'
    },
    deckDetailContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 41px 4px 0px',
        border: 'none',
        verticalAlign: 'inherit'
    },
    snackBar: {
        right: '75px'
    },
    deckHeader: {
        fontSize: '14px',
        fontWeight: '700',
        color: 'white',
        background: 'green'
    }
});

// Component to show list of decks
class DeckList extends React.Component {
    state = {
        open: false,
        showSnackBar: false
    };
    render() {
        const { deckList, classes } = this.props;
        let view;
        if (!deckList || !deckList.length) {
            view = <div className="empty-deck-container">Deck is empty</div>;
        } else {
            view = (
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.deckHeader}>Deck Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {deckList.map(row => {
                                return (
                                    <TableRow key={row.id} onClick={this.showDeckDetail(row.id, row.name)}>
                                        <TableCell className={classes.deckDetailContainer}>
                                            <div className="deck-name">{row.name}</div>
                                            <div className="deck-detail">View Deck >></div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            );
        }
        return (
            <div className="deck-list-container">
                {view}
                <Tooltip title="Add a deck">
                    <Button
                        variant="fab"
                        onClick={this.openAddDeckDialog}
                        color="primary"
                        aria-label="Add"
                        className={classes.button}
                    >
                        <AddIcon />
                    </Button>
                </Tooltip>
                {(!deckList || !deckList.length) && (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        open={true}
                        className={classes.snackBar}
                        autoHideDuration={10}
                        message={<span id="message-id">Click '+' icon to add a deck.</span>}
                    />
                )}
                <DeckDialog open={this.state.open} onClose={this.closeAddDeckDialog} addDeck={this.addDeck} />
            </div>
        );
    }

    // Lifecycle hook to load list of all deck
    componentDidMount() {
        this.getDeckList();
        this.setState({ showSnackBar: true });
    }

    getDeckList = () => {
        return this.props.dispatch(actions.deckList.getDeckList());
    };

    //open form to take deck user
    openAddDeckDialog = () => {
        this.setState({
            open: true
        });
    };

    //Event to show all deck detail
    showDeckDetail = (deckId, deckName) => () => {
        this.props.dispatch(actions.deckBoard.showDeckDetail(deckId, deckName));
    };

    closeAddDeckDialog = () => {
        this.setState({
            open: false
        });
    };

    // Add new Deck
    addDeck = ({ name }) => {
        this.props.dispatch(actions.deckList.addDeck(name)).then(this.closeAddDeckDialog);
    };
}

export default connect(({ deckList }) => {
    return {
        deckList: deckList.data
    };
})(withStyles(styles)(DeckList));
