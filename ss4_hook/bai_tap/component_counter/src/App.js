
import './App.css';
import React, { useState } from "react"

function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase(addAmount) {
    setCount(count + addAmount);
  }

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => increase(1)}>ADD 1</button>
    </>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => increase(2)}>ADD 2</button>
    </>
  );
}

function App() {
  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  );
}

export default App;
// function UseIncrement() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h5>Count: {count}</h5>
//       <button onClick={() => {
//         setCount((previousState) => previousState + 1);
//       }}
//       >ADD 1</button>
//       <h5>Count: {count}</h5>
//       <button onClick={() => {
//         setCount((previousState) => previousState + 2);
//       }}
//       >ADD 2</button>
//     </>
//   );
// }
// export default UseIncrement;