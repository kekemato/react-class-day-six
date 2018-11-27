import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

const style = {
    button: {
        margin: 12
    }
}

const AddTask = (props) => (
    <div>
        <TextField
            hintText="Type task"
            fullWidth={true}
            type="text"
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
        />

        <RaisedButton
            onClick={props.addTask}
            label="Add task"
            secondary={true}
            style={style.button}
        />
    </div>
)

export default AddTask