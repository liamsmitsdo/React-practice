import React, {Component} from 'react';
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import "./RecipeList.css";

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Lorem Ipsum",
                ingredients: ["first", "second", "third"],
                img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                title: "Milkshake",
                instructions: "Lorem Ipsum",
                ingredients: ["first", "second", "third"],
                img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                title: "Avocado Toast",
                instructions: "Lorem Ipsum",
                ingredients: ["first", "second", "third"],
                img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const recipes = this.props.recipes.map((r, index) =>{
            return <Recipe key={index} {...r} />
        })

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;