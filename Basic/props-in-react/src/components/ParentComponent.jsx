import ChildComponent from "./ChildComponent";

//Declaring a name
const name = "MyWAY";
const productName = "T-Shirt";
const productPrice = 1999;

const ParentComponent = () => {
  return (
    <div>
      <h1>Props in React JS Course by MyWAY Codezzz</h1>
      <ChildComponent
        name={name}
        productName={productName}
        productPrice={productPrice}
      />
    </div>
  );
};

export default ParentComponent;
