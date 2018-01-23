// 액션정의 : 스토어로 보내는 데이터 묶음 (store.dispatch()를 통해 이들을 보낼 수 있다

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

// 액션 생성자
export const addTodo = (text) => {
    return { type: ADD_TODO, text }
}
export const deleteTodo = (id) => {
    return { type: DELETE_TODO, id }
}
