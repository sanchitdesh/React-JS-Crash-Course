import { dummyData } from "../constants";

const App = () => {
  return (
    <div>
      <h1>Mapping in React JS Course</h1>
      <div>
        {dummyData.map((item, index) => (
          <div key={index}>
            <h1>Available Products are:</h1>
            <p>Product Category: {item.label}</p>
            <p>Product Price: {item.price}</p>
            <p>Product Available Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
