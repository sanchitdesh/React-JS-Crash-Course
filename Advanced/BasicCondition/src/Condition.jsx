import { useState } from "react";

const Condition = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>Message is triggered</p>}
    </div>
  );
};

export default Condition;
