import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton";
import "./styling.css";

function Button( {saveButton} ) {
   
  return saveButton ? <SaveButton/> : <ClickedButton/> 
// Conditional for saveButton 
}
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 