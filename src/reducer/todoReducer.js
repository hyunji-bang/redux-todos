// 리듀서 정의 : 상태가 바뀌는 것을 명시

import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, CLEAR_COMPLETE } from '../action/todoAction';

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
            // const deleteIndex = state.findIndex(todo=>
            //     todo.id === action.id
            // )
            // state.splice(deleteIndex, 1)
            const res = state.filter(item => item.id !== action.id)
            return [
                ...res
            ]
        case EDIT_TODO:
            const targetIdx = state.findIndex(item => item.id === action.id)

            // bad todo: 클릭한 인덱스의 id에 맞는 todo를 찾아서, 그 todo의 text를 바뀐 text로 변경
            // const newState = [...state]
            //
            // // bad bad
            // // newState[targetIdx].text = action.text --> 아래처럼 해야함
            // state[targetIdx] = {
            //     ...state[targetIdx],
            //     text : action.text
            // }

            // return newState

            //good todo: state를 map을 도는데, id가 같은 것을 찾으면 text를 바꿔주고 나머지는 ...todo로 받음으로써 중복되는 text는 덮어쓰기가 되고 나머지요소들(action.done)도 같이 가져옴
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        text: action.text
                    }
                }
                return todo
            })

        case CLEAR_COMPLETE:
            const notCompletedTodos = state.filter(todo=>!todo.isDone);
            return notCompletedTodos // [...notCompletedTodos] 아님

        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todos
});

export default todoReducer;