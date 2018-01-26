// 액션정의 : 스토어로 보내는 데이터 묶음 (store.dispatch()를 통해 이들을 보낼 수 있다

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE'
export const SET_FILTER = 'SET_FILTER'
export const TOGGLE_DONE = 'TOGGLE_DONE'
export const TOGGLE_ALL = 'TOGGLE_ALL'

// 액션 생성자
export const addTodo = (text) => {
    return { type: ADD_TODO, text }
}
export const deleteTodo = (id) => {
    return { type: DELETE_TODO, id }
}
export const editTodo = (id, text) => {
    return { type: EDIT_TODO, id, text }
}
export const clearComplete = () => {
    return { type: CLEAR_COMPLETE }
}

export const setFilter = (filter) => {
    return { type: SET_FILTER, filter}
}

export const toggleDone = (id) => {
    return { type: TOGGLE_DONE, id}
}
export const toggleAll = () => {
    return { type: TOGGLE_ALL }
}