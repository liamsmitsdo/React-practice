import React, {Component} from 'react';
import "./TodoForm.css";

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section class="form">
                <input type="text" id="todoInput" placeholder="Insert your task here..." />
            </section>
        )
    }
}

export default TodoForm;