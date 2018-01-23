// 리듀서 정의 : 상태가 바뀌는 것을 명시

import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO } from '../action/todoAction';

const initialState = [
    {
        id: 34,
        text: '테스트트트트',
        isDone: false
    }, {
        id: 24,
        text: '222테스트트트트',
        isDone: true
    }, {
        id: 14,
        text: '44테스트트트트',
        isDone: false
    }, {
        id: 55,
        text: '33테스트트트트',
        isDone: false
    }
]
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                id: Date.now(),
                text: action.text,
                isDone: false,
            }];
        case DELETE_TODO:
            const deleteIndex = state.findIndex(todo=>
                todo.id === action.id
            )
            state.splice(deleteIndex, 1)
            return [
                ...state
            ]
        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todos
});

export default todoReducer;