import React from 'react';
import classNames from 'classnames';

const filterNames = ['All', 'Active', 'Completed'];

const Footer = (props) => {

    const filters = filterNames.map(item => (
        <li key={item}
            onClick={()=>props.setFilter(item)}
        >
            <a className={props.filter === item ? 'selected' : ''}>
                {item}
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
                onClick={()=>props.clearCompleted()}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default Footer;