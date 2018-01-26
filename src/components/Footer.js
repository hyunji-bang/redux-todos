import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { clearComplete, setFilter } from '../action/todoAction'

const filterNames = ['all', 'active', 'completed'];
class Footer extends React.Component {
    render() {
        const completedLength = this.props.completedLength;
        const todosLength = this.props.todosLength;
        console.log('this.props', this.props)

        const filters = filterNames.map(filter => (
            <li key={filter}
                onClick={()=>this.props.setFilter(filter)}
            >
                <a className={this.props.stateFilter === filter ? 'selected' : ''}>
                    {filter}
                </a>
            </li>
        ));

        return (
            <div className="footer">
                <span className="todo-count">{todosLength - completedLength} items left</span>
                <ul className="todo-filters">
                    {filters}
                </ul>
                <button
                    className={classNames('todo-delete-completed', {hidden: !completedLength})}
                    onClick={() => this.props.clearComplete()}
                >
                    Clear Completed
                </button>
            </div>
        );
    }

    // clearCompleted = () => {
    //     const newTodos = this.props.todos.filter(todo => !todo.isDone); // 완료상태가 아닌것들만 남도록(완료삭제)
    //
    //     this.setState({
    //         ...this.state,
    //         todos: newTodos
    //     })
    // }
};

const mapDispatchToProps = (dispatch) => ({
    clearComplete: () => dispatch(clearComplete()),
    setFilter: (filter) => dispatch(setFilter(filter))
})

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(undefined, mapDispatchToProps)(Footer);
