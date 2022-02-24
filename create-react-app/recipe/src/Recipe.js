
function Recipe(props) {
    return(
        <div>
            <h2>Recipe {props.title}</h2>
            <ul>
               {props.ingredients.map(function(ing, idx) {
                    return <li key={idx}>{ing}</li>
                })}
            </ul>
        </div>
    )
}

export default Recipe;