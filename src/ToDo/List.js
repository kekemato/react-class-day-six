import React from 'react'
import Task from './Task'
import {unifyString} from '../utils'

const List = (props) => (
    <React.Fragment>
        {
            props.tasksList &&
            props.tasksList.map &&
            props.tasksList
                .filter(task => {
                    switch (props.chosenFilter) {
                        case 'All':
                            return true
                        case 'Completed':
                            return task.isCompleted
                        case 'Uncompleted':
                            return !task.isCompleted
                        default:
                            return true
                    }
                })
                .filter(task =>
                    unifyString(task.taskText)
                        .includes(
                            unifyString(props.filterText)
                        )
                )
                .map(
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

    </React.Fragment>
)

export default List