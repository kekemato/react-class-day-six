import React from 'react'

const Search = props => (
    <div>
        <br />
        <input
            type="text"
            value={props.filterText}
            onChange={props.onFilteredTextChangeHandler}
        />
        <br />
        <button
            onClick={props.onAllClickHandler}
        >
            All
         </button>
        <button
            onClick={props.onCompletedClickHandler}
        >
            Completed
        </button>
        <button
            onClick={props.onUnCompletedClickHandler}
        >
            Uncompleted
        </button>
    </div>
)

export default Search