const App = () => {
  const FormHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully...");
  };

  return (
    <div>
      <form onClick={FormHandler}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

//==========================================================
// Input Event Handler

/*const App = () => {
  const handleInputField = (e) => {
    console.log("Input Handled Successfully...", e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type Something here..."
        onChange={handleInputField}
      />
    </div>
  );
};

export default App; */

//========================================

// Handle Click Event

/* 
const App = () => {
  const handleClickEvent = () => {
    console.log("Click Event Works Successfully...");
  };

  return (
    <div>
      <button onClick={handleClickEvent}>CLick Me</button>
    </div>
  );
};

export default App;

*/
