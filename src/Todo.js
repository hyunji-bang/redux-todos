import React from 'react';
import classNames from 'classnames';

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            editingId: null,
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log('this.state.isEditing : ', this.state.isEditing);
        if(this.state.isEditing ) {
            this._inputDom.value = this.props.text;
            this._inputDom.focus();
        }
    }

    render() {
        return (
            <li className={classNames('todo-item', {editing: this.state.isEditing})}>
                <button className="toggle"/>
                <div className="todo-item__view">
                    <div className="todo-item__view__text"
                         onDoubleClick={this.startEdit}
                    >
                        {this.props.text}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={this.props.deleteTodo}
                    />
                </div>
                <input type="text"
                       className="todo-item__edit"
                       onKeyPress={this.handleEditTodo}
                       onBlur={this.cancelEdit}
                       ref={ref => {
                           this._inputDom = ref;
                       }}
                />
            </li>
        )
    }

    handleEditTodo = (e) => {
        if (e.charCode === 13) {
            console.log('e',e)
            this.props.editTodo(e, this.props.id)
            this.setState({isEditing:false})
        }
    }

    cancelEdit = () => {
        this.setState({
            ...this.state.todos,
            isEditing: false
        })
    }

    startEdit = () => {
        this.setState({
            ...this.state.todos,
            isEditing: true
        })
    }
}

export default Todo;