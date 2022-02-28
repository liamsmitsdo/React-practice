//we can add state to a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'red'};
        //we can update the state with setState({})
        setTimeout(()=>{
            this.setState({color: 'blue'})
        }, 3000) 
        //setState is not asynchronous
    }

    render() {
        return (
            <div>
                My favourite colour:
                {this.state.color}
            </div>
        );
    }
}

//pure functions
//these are functions that don't modify their output
//all changes to state, should be pure
