import Recipe from './Recipe';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe 
      title="Pasta" 
      ingredients={['Flour', 'Water']}
      />
    </div>
  );
}

export default RecipeApp;
