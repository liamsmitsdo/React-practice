import React, {Component} from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import "./TodoList.css"
const APIURL = "/api/todos";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        }
    }

    loadTodos() {
        fetch(APIURL)
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    return res.json().them(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later, server is unresponsive"};
                    throw err;
                }
            }
            return res.json()
        })
        .then(todos => this.setState({todos}))
    }
    
    componentDidMount() {
        this.loadTodos();
    }

    render() {
        const todos = this.state.todos.map((t) => (
            <TodoItem
                key={t._id}
                {...t}
            />
        ));

        return (
            <>
                <header>
                    <h1>todo<span>List</span></h1>
                    <h2>A simple todo list app built with node</h2>
                </header>
                <TodoForm />
                <ul className='list'>
                    {todos}
                </ul>
            </>
        )
    };
}

export default TodoList;