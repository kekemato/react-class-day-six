import React from 'react'

const AddTask = (props) => (
    <div>
        <input
            type="text"
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
        />

        <button
            onClick={props.addTask}
        >
            Add task
    </button>
    </div>
)

export default AddTask