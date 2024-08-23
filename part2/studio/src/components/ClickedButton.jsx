import "./styling.css";

function ClickedButton() {
  
  
    function handleClick() {
      alert("This pin is no longer pinned");
    }
    return (
      <button id="clickedButton" onClick={handleClick}>
        Saved
      </button>
    );
  }
  
  
  
  
  


export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
