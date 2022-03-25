import React, {Component} from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import "./TodoList.css"
const APIURL = "/api/todos/";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
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

    addTodo(val) {
        fetch(APIURL, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({name: val})
        })
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
        .then(newTodo => this.setState({todos: [...this.state.todos, newTodo]}))
    }

    deleteTodo(id) {
        const deleteURL = APIURL + id;
        fetch(deleteURL, {method: 'DELETE'})
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
        })
        .then(() => {
            const todos = this.state.todos.filter(todo => todo._id !== id)
            this.setState({todos: todos})
        })
    }

    toggleTodo(todo){
        const toggleURL = APIURL + todo._id;
        fetch(toggleURL, {
            method: 'PUT', 
            headers: new Headers({'Content-Type': 'application/json'}), 
            body: JSON.stringify({completed: !todo.completed})
        })
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
        })
        .then(updatedTodo => {
            const todos = this.state.todos.map(t =>
                (t._id === updatedTodo._id)
                ? {...t, completed: !t.completed}
                : t
                )
              this.setState({todos: todos});
        })
        
    }
    
    componentDidMount() {
        this.loadTodos();
    }

    render() {
        const todos = this.state.todos.map((t) => (
            <TodoItem
                onDelete={this.deleteTodo.bind(this, t._id)}
                onToggle={this.toggleTodo.bind(this, t)}
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
                <TodoForm addTodo={this.addTodo}/>
                <ul className='list'>
                    {todos}
                </ul>
            </>
        )
    };
}

export default TodoList;