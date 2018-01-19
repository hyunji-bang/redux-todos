/* Mounting 폴더 - index.js */
import React, { Component } from 'react';

export default class MountingTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState : 0
        }
        console.log("App.js - constructor")
    }
    componentWillMount () {
        console.log("App.js - componentWillMount")
    }
    componentDidMount () {
        console.log("App.js - componentDidMount")
    }
    render() {
        console.log("App.js - render");
        return (
            <article className="component-box">
                <h1>Lifecycle 예제 - App.js</h1>
                <Component1 />
                <Component2 />
            </article>
        );
    }
}


class Component1 extends Component {
    constructor(props) {
        super(props)
        console.log("Component1.js - constructor")
    }
    componentWillMount () {
        console.log("Component1.js - componentWillMount")
    }
    componentDidMount () {
        console.log("Component1.js - componentDidMount")
    }
    render() {
        console.log("Component1.js - render");
        return (
            <section className="component-box">
                <h1>Component1.js</h1>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </section>
        );
    }
}

class Component2 extends Component {
    constructor(props) {
        super(props)
        console.log("Component2.js - constructor")
    }
    componentWillMount () {
        console.log("Component2.js - componentWillMount")
    }
    componentDidMount () {
        console.log("Component2.js - componentDidMount")
    }
    render() {
        console.log("Component2.js - render");
        return (
            <section className="component-box">
                <h1>Component2.js</h1>
            </section>
        );
    }
}