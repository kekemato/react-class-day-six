import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {
            props.tasksList &&
            props.tasksList.map &&
            props.tasksList.map(
                task => (
                    <Task
                        key={task.key}
                        task={task}
                        deleteTask={props.deleteTask}
                        toggleTask={props.toggleTask}
                    />
                )
            )
        }

    </div>
)

export default List