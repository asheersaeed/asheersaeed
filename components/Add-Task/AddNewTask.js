import React, { Component } from 'react';
import './AddNewTask.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class AddNewTask extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    getValue = (e) => {
        e.preventDefault();
        let inputVal = document.querySelector('#myTaskVal').value;
        if (inputVal !== '') {
            this.props.valueDetail(inputVal);
            document.querySelector('#myTaskVal').value = '';
        } else {
            this.handleOpen();
        }
    }

    render() {
        let headingStyle = {
            backgroundColor: '#00BCD4',
            paddingTop: '3px',
            paddingBottom: '1px',
            color: 'white'
        }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Discard"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <div style={ headingStyle }>
                <h1 >WELCOME TO TODO APP!</h1>
                </div>
                <MuiThemeProvider>
                    <form onSubmit={this.getValue}>
                        <TextField id='myTaskVal' floatingLabelText='ADD TASK' />
                        <RaisedButton label="ADD" primary type='submit' />
                    </form>
                    <div>
                        <Dialog actions={ actions } modal={ false } open={ this.state.open } 
                        onRequestClose={ this.handleClose} >
                            Please Enter Task!
                        </Dialog>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}