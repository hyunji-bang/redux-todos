// 리듀서 정의 : 상태가 바뀌는 것을 명시
import {combineReducers} from 'redux';
import {ADD_TODO, DELETE_TODO, EDIT_TODO, CLEAR_COMPLETE, SET_FILTER, TOGGLE_FILTER} from '../action/todoAction';

const initialState = {
    todos: [{
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
    }],
    filter: 'all'
}
const todos = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    id: Date.now(),
                    text: action.text,
                    isDone: false,
                }];
        // return Object.assign({}, state, {
        //     id: Date.now(),
        //     text: action.text,
        //     isDone: false
        // })
        case DELETE_TODO:
            // const deleteIndex = state.findIndex(todo=>
            //     todo.id === action.id
            // )
            // state.splice(deleteIndex, 1)
            const res = state.filter(item => item.id !== action.id)
            return res

        case EDIT_TODO:
            // const targetIdx = state.findIndex(item => item.id === action.id)
            // const newState = [...state]
            //
            // // 1. ** bad-bad **
            // // bad todo: 클릭한 인덱스의 id에 맞는 todo를 찾아서, 그 todo의 text를 바뀐 text로 변경
            // // newState[targetIdx].text = action.text // --> 얕은 복사가 되버림
            //
            // // 2. 그나마 나은 방법 : 객체 자체를 복사
            // newState[targetIdx] = {
            //     ...state[targetIdx],
            //     text : action.text
            // }
            // return newState

            // 3. good
            // state를 map을 도는데, id가 같은 것을 찾으면 text를 바꿔주고 나머지는 ...todo로 받음으로써
            // 중복되는 text는 덮어쓰기가 되고 나머지요소들(action.done)도 같이 가져옴
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        text: action.text
                    }
                }
                return todo
            })

            // 4. 중첩된 모든 단계 복사 : 깊은 복사까지 가능 -> 실패. object에서만 가능한 방법
            // state[targetIdx].text의 업데이트
            // 참고 ) https://deminoth.github.io/redux/recipes/reducers/ImmutableUpdatePatterns.html

            // return [
            //     ...state,
            //     [targetIdx]: {
            //         ...state[targetIdx],
            //         text: action.text
            //         }
            //     }
            // ]
            // const test = {company: {name: 'rsquare', people: [{name: 'hanquf'}, {name: 'stella'}]}}
            // const test2 = {...test, company: {...test.company, people: {...test.company.people, [0]: {name: 'haha'}}}}
            //
            // console.log('test', test);
            // console.log('test2', test2);

        case CLEAR_COMPLETE:
            const notCompletedTodos = state.filter(todo => !todo.isDone);
            return notCompletedTodos // [...notCompletedTodos] 아님

        // 참고 ) obj일 경우, 앞뒤 잘라내고 처리
        // todos: [
        //     ...state.todos.slice(0, action.index),
        //     Object.assign({}, state.todos[action.index], {
        //         completed: true
        //     }),
        //     ...state.todos.slice(action.index + 1)
        // ]

        case TOGGLE_FILTER:
            return state.map((todo)=>{
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                }
                return todo;
            })

        default:
            return state;
    }
}

const todoFilter = (state = initialState.filter, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todos, todoFilter
});

export default todoReducer;