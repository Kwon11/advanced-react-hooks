// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  const countReducer = (currentState, valuePassedToSetCount) => {
    switch(valuePassedToSetCount.type) {
      case 'INCREMENT':
          return { ...currentState, count: currentState.count + valuePassedToSetCount.step };
      default:
          console.log('we hit the default case thats a problem');
          throw new Error();
    }
  };

  const initializer = (initialStatePassedIntoComponentFromPropsAndIntoTheReducer) => {
    return {
      ...initialStatePassedIntoComponentFromPropsAndIntoTheReducer
      // "other stuff" that isnt in props, such as default values decided by this component
      // would go here
    }
  }
  const [state, dispatch] = React.useReducer(
    countReducer,
    { count: initialCount },
  );
  const { count } = state;
  // preferable when you have complex state that
    // involves multiple values
    // OR new state relies on the previous one
  // "also lets you optimize performance for components that trigger deep updates because you can
    // ...pass distpatch down instead of callbacks"
    // https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({ type: 'INCREMENT', step });
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
