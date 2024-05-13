const ChildComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <div>
        <p>Product Category: {props.productName}</p>
        <p>Product Price: {props.productPrice}</p>
      </div>
      <span>Like Share and Subscribe</span>
    </div>
  );
};

export default ChildComponent;
