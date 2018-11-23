import React from 'react'

const Search = props => (
    <div>
        <br />
        <input
            type="text"
            placeholder="Filter tasks"
            value={props.filterText}
            onChange={props.onFilteredTextChangeHandler}
        />
        <br />
        <button
            disabled={props.chosenFilter === 'All'}
            onClick={props.onAllClickHandler}
        >
            All
         </button>
        <button
            disabled={props.chosenFilter === 'Completed'}
            onClick={props.onCompletedClickHandler}
        >
            Completed
        </button>
        <button
            disabled={props.chosenFilter === 'Uncompleted'}
            onClick={props.onUnCompletedClickHandler}
        >
            Uncompleted
        </button>
    </div>
)

export default Search