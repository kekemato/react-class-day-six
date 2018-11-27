import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

const style = {
    button: {
        margin: 12
    }
}

const Search = props => (
    <div>
        <br />
        <TextField
            type="text"
            placeholder="Filter tasks"
            fullWidth={true}
            value={props.filterText}
            onChange={props.onFilteredTextChangeHandler}
        />
        <br />
        <RaisedButton
            disabled={props.chosenFilter === 'All'}
            onClick={props.onAllClickHandler}
            label="All"
            primary={true}
            style={style.button}
        >
        </RaisedButton>
        <RaisedButton
            disabled={props.chosenFilter === 'Completed'}
            onClick={props.onCompletedClickHandler}
            label="Completed"
            primary={true}
            style={style.button}
        >
        </RaisedButton>
        <RaisedButton
            disabled={props.chosenFilter === 'Uncompleted'}
            onClick={props.onUnCompletedClickHandler}
            label="Uncompleted"
            primary={true}
            style={style.button}
        >
        </RaisedButton>
    </div>
)

export default Search