import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addTodo(this.state.input)
        this.setState({input: ""})
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    id="todoInput" 
                    placeholder="Insert your task here..." 
                    value={this.state.input}
                    onChange={this.handleChange}/>
            </form>
        )
    }
}

export default TodoForm;