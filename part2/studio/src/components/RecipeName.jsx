import recipedata from "./recipe.json";

function RecipeName() {
  return <h1>{recipedata[0].name}</h1>;
  // extracts from JSON file at index 0, with property name -- > extracts value from it
}

export default RecipeName;

//import return the name of the recipe as a level 1 header