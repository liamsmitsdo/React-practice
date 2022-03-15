import { Component } from 'react'
import './App.css'

const TodoItem = ({text}) => (
  <li>{text}</li>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ""});
  }

  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t,i) => (
      <TodoItem key={i} text={t} />
    ));
    return (
      <div className='container'>
        <h1>Simple Todo App</h1>
        <form className='todo-form' onSubmit={this.handleSubmit}>
          <input 
            className='todo-el' 
            placeholder='What needs to be done?'
            autoComplete='off'
            type="text"
            name="newTodo"
            value={newTodo}
            onChange = {(e) => this.setState({[e.target.name]: e.target.value})}
            />
          <button className='todo-el' type='submit'>SAVE</button>
        </form>
        <div>
          <ol>
            {todos}
          </ol>
        </div>
    </div>
    )
  }
}

export default App