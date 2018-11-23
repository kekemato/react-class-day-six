import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
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

    </div>
)

export default List