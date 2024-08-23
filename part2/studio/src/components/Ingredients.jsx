import recipedata from "./recipe.json";

function IngredientList() {
  
  // variable to hold all of the JSX created by mapping
  // Anytime you map to create JSX with react you need a key
  let ingredientsJSX = recipedata[0].ingredients.map((ingredient, index) => {

    return <li key={index}>{ingredient}</li>;

  });
  
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
      {ingredientsJSX}
      </ul>
      
    </div>
   )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 