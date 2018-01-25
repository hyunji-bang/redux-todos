import React from 'react';
import classNames from 'classnames';

const filterNames = ['all', 'active', 'completed'];

const Footer = (props) => {
    const filters = filterNames.map(filter => (
        <li key={filter}
            onClick={()=>props.setFilter(filter)}
        >
            <a className={props.filter === filter ? 'selected' : ''}>
                {filter}
            </a>
        </li>
    ));

    return (
        <div className="footer">
            <span className="todo-count">{props.todosLength - props.completedLength} items left</span>
            <ul className="todo-filters">
                {filters}
            </ul>
            <button
                className={classNames('todo-delete-completed', {hidden: !props.completedLength})}
                onClick={()=>props.clearComplete()}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default Footer;