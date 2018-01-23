import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducer/todoReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

let store = createStore(todoReducer, composeWithDevTools());
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
registerServiceWorker();

// 스토어 : 액션과 이 액션에 따라 상태를 바꿔주는 리듀서를 함께 가져오는 객체
// 애플리케이션의 상태를 저장하고;
// getState()를 통해 상태에 접근하게 하고;
// dispatch(action)를 통해 상태를 수정할 수 있게 하고;
// subscribe(listener)를 통해 리스너를 등록합니다.