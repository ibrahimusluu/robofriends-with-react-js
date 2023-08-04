// not Self-Closing component, It is Wrapping Component

// props, state, "children"
const Scroll = (props) => {
  // every props object has "children" even if we don't send any "props"
  // style --> first brackets are for "Js Expression", second one is for "Object" to use for "CSS"

  /*
  css: overflow-y (with dash)
  jsx: overflowY (camelCase)
  */
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
  //   return <h1>hi</h1>; // difference between with the top one
};

// React is a View Layer and reusable, that's why so powerful!
export default Scroll;
