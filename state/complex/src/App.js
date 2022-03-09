import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
//child
const InstructorItem = props => { //stateless functional component
    return (
      <li>
        <h3>{props.name}</h3>
        <h4>
          Hobbies: {props.hobbies.join(", ")}
        </h4>
      </li>
    );
}

const Box = ({color}) => {
  const style = {
    width: '200px',
    height: '200px',
    display: 'inline-block',
    margin: '5px',
    backgroundColor: color
  }
  return <div style={style}></div>
};

InstructorItem.propTypes = { //updating the proptypes
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

//parent
class App extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(14).fill().map(this.getColor, this);
    // this.state = {
    //   instructors: [
    //     {
    //       name: 'Tim',
    //       hobbies: ['sailing', 'react']
    //     }, {
    //       name: 'Matt',
    //       hobbies: ['math', 'd3']
    //     }, {
    //       name: 'Colt',
    //       hobbies: ['css', 'hiking']
    //     }, {
    //       name: 'Elie',
    //       hobbies: ['music', 'es2015']
    //     }
    //   ]
    // };
    this.state = {boxes}
    setInterval(()=>{
      const boxes = this.state.boxes.slice();
      const randInd = Math.floor(Math.random() * boxes.length);
      boxes[randInd] = this.getColor();
      this.setState({boxes})
    },300);

    // setTimeout(()=>{
    //   const randInst = Math.floor(Math.random() * this.state.instructors.length);
    //   const hobbyIdx = Math.floor(Math.random() * this.state.instructors[randInst].length);

    //   const instructors = this.state.instructors.map((inst, i) => {
    //     if(i === randInst){
    //       const hobbies = [...inst.hobbies];
    //       hobbies.splice(hobbyIdx, 1);
    //       return {
    //         ...inst,
    //         hobbies
    //       };
    //     }

    //     return inst;
    //   });
    //   this.setState({instructors})
    //   // instructors[randInst] = Object.assign({}, instructors[randInst]);
    //   // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
    //   // instructors[randInst].hobbies.splice(hobbyIdx, 1);
    // }, 5000);
  }
  getColor(){
    let index = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[index];
  }
  
  render() {
    // const instructors = this.state.instructors.map((instructor, index) => (
    //   <InstructorItem 
    //   key={index} 
    //   name={instructor.name}
    //   hobbies={instructor.hobbies}
    //   />
    // ));
    const boxes = this.state.boxes.map((b, i) => (
      <Box key={i} color={b}/>
    ));
    return (
      <div className="App">
        <div>
          {boxes}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
    colors: [
      "blue",
      "green",
      "yellow",
      "red"
    ]
}

export default App;