import React from 'react'

class ToDo extends React.Component {
    state = {
        tasks: [],
        filterText: ' ',
        chosenFilter: 'All',
        newTaskText: ' '
    }

    createTask = text => ({
        taskText: text,
        isCompleted: false,
        key: Date.now()
    })

    addTask = () => {
        this.setState({
            tasks: this.state.tasks.concat(
                this.createTask(
                    this.state.newTaskText
                )
            )
        })
    }

    deleteTask = taskKey => {
        this.setState({ tasks: this.state.tasks.filter((task) => task.key !== taskKey) })
    }

    completeTask = taskKey => {
        this.setState({
            tasks: this.state.tasks.map(
                task => (
                    (task.key !== taskKey) ?
                        {
                            ...task,
                            isCompleted: true
                        }
                        :
                        task
                )
            )
        })
    }

    render() {
        return (
            <div>
                To Do:
            </div>
        )
    }
}

export default ToDo