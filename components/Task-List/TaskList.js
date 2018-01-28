import React, { Component } from 'react';
import './TaskList.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class TaskList extends Component {
    constructor() {
        super()
        this.state = {
            isEditing: false,
            open: false
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    toggleState = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    updateItem = (e) => {
        e.preventDefault();
        let inputVal = document.querySelector('#myUpdatedVal').value;
        if (inputVal !== '') {
            this.props.editDetail(inputVal, this.props.indexDetail);
            this.toggleState();
        } else {
            this.handleOpen();
        }
    }

    deleteValue = () => {
        this.props.removeDetail(this.props.indexDetail)
    }

    render() {
        let editStyle = {
            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '5px',
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
            <MuiThemeProvider>
                <div>
                    {
                        this.state.isEditing ? <form onSubmit={this.updateItem}>
                            <TextField id='myUpdatedVal' type='text' defaultValue={this.props.taskArrayDetail} hintText="EDIT TASK" />
                            <RaisedButton label="UPDATE" primary type='submit' />
                        </form> :
                            <li key={this.props.indexDetail}>
                                {this.props.taskArrayDetail}
                                <RaisedButton onClick={this.toggleState} style={editStyle} label="EDIT" primary />
                                <RaisedButton onClick={this.deleteValue} label="DELETE" primary />
                            </li>

                    }
                    <div>
                        <Dialog actions={actions} modal={false} open={this.state.open}
                            onRequestClose={this.handleClose} >
                            Please Edit Task!
                        </Dialog>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}