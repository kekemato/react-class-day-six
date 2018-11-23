import React from 'react'

const completedStyle = {
    textDecoration: 'line-through'
}

const Task = props => (
    <div>
        <span
        style={props.task.isCompleted ? completedStyle : {}}
        onClick={() => props.toggleTask(props.task.key)}>
            {props.task.taskText}
        </span>
        <button
        onClick={() => props.deleteTask(props.task.key)}>
            Delete task
        </button>
    </div>
)

export default Task