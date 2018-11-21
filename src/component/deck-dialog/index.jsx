import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


// Adding style in component
const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit *
            3}px`
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});

// Component to add new  deck of cards
class DeckDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        };
    }

    // Event trigger when 
    handleOnChange = event => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({
            formData
        });
    };

    // Event to add new dack
    addDeck = e => {
        e.preventDefault();
        this.props.addDeck(this.state.formData);
        this.setState({ formData: {} });
    };

    render() {
        const { classes, onClose, open } = this.props;
        let { name } = this.state.formData;
        let requiredFieldText = 'Deck name is required.';
        return (
            <Dialog onClose={onClose} aria-labelledby="dialog-title" open={open}>
                <DialogTitle id="dialog-title">Add Deck Detail</DialogTitle>
                <Paper className={classes.paper}>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <TextField
                                id="name"
                                name="name"
                                label="Deck Name"
                                error={!name}
                                autoFocus
                                required
                                onChange={this.handleOnChange}
                                value={name}
                                helperText={!name && requiredFieldText}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.addDeck}
                            disabled={!name}
                        >
                            Add Deck
                        </Button>
                    </form>
                </Paper>
            </Dialog>
        );
    }
}

export default withStyles(styles)(DeckDialog);
