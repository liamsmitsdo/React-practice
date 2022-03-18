import Nav from './nav';
import React, {Component} from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import "./RecipeApp.css";

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: "Spaghetti",
          instructions: "Lorem Ipsum",
          ingredients: ["first", "second", "third"],
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      },
      {
        id: 2,
          title: "Milkshake",
          instructions: "Lorem Ipsum",
          ingredients: ["first", "second", "third"],
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      },
      {
        id: 3,
          title: "Avocado Toast",
          instructions: "Lorem Ipsum",
          ingredients: ["first", "second", "third"],
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      }
      ],
      nextRecipeId: 3,
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <RecipeForm />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;