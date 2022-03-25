import React, {Component} from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from "./api";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }

    async addTodo(val) {
        let newTodo = await apiCalls.addTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    async deleteTodo(id) {
        await apiCalls.deleteTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id)
        this.setState({todos: todos})
    }

    async toggleTodo(todo){
        let updatedTodo = await apiCalls.toggleTodo(todo);
        const todos = this.state.todos.map(t =>
            (t._id === updatedTodo._id)
            ? {...t, completed: !t.completed}
            : t
            );

        this.setState({todos: todos});
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