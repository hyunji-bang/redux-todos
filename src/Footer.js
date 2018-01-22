import React from 'react';
import classNames from 'classnames';

const Footer = (props) =>
    (
        <div className="footer">
            <span className="todo-count">{props.todosLength - props.completedLength} items left</span>
            <ul className="todo-filters">
                <li><a>All</a></li>
                <li><a>Active</a></li>
                <li><a>Completed</a></li>
            </ul>
            <button
                className={classNames('todo-delete-completed', {hidden: !props.completedLength})}
                onClick={()=>props.clearCompleted()}
            >
                Clear Completed
            </button>
        </div>
    );

export default Footer;