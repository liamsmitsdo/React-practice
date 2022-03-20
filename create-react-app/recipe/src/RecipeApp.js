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
          id: 0,
          title: "Spaghetti",
          instructions: "Lorem Ipsum",
          ingredients: ["first", "second", "third"],
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      },
      {
        id: 1,
          title: "Milkshake",
          instructions: "Lorem Ipsum",
          ingredients: ["first", "second", "third"],
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      },
      {
        id: 2,
          title: "Avocado Toast",
          instructions: "Lorem Ipsum",
          ingredients: ["first", "second", "third"],
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      }
      ],
      nextRecipeId: 3,
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        newRecipe: prevState.newRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <RecipeForm onSave={this.handleSave}/>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;