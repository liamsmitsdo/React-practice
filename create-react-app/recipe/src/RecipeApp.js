import Nav from './nav';
import RecipeList from './RecipeList';
import "./RecipeApp.css";

function RecipeApp() {
  return (
    <div className="App">
      <Nav />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;