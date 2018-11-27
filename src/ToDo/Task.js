import React from 'react'
import IconButton from 'material-ui/IconButton'
import { ListItem } from 'material-ui/List'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

const completedStyle = {
    textDecoration: 'line-through'
}

const Task = props => (
        <ListItem
            style={props.task.isCompleted ? completedStyle : {}}
            onClick={() => props.toggleTask(props.task.key)}
            primaryText={props.task.taskText}
            rightIconButton={
                <IconButton>
                    <DeleteIcon
                        onClick={() => props.deleteTask(props.task.key)}
                    />
                </IconButton>
            }
        >
        </ListItem>
)

export default Task