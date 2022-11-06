import { useReducer } from "react";
import MetaTags from 'react-meta-tags';

function reducer(state, action) {
  if (action.type === 'increment') {
    return {
      data: state.data + 1
    };
  } else if (action.type === 'decrement') {
    return {
      data: state.data - 1
    };
  } else if (action.type === 'reset') {
    return {
      data: 0
    };
  }

  throw Error('Unknown action.');
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { data: 0 })
  
  const error = () => {
    throw Error("This is an error")
  }

  return (
    <>
      <MetaTags>
        <title>Use Reducer</title>
        <meta name="description" content="React use reducer" />
      </MetaTags>
      <h1>Use reducer page</h1>
      <p>{ state.data }</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>    
      <button onClick={() => dispatch({ type: 'error' })}>Test Error boundary</button>    
    </>
  );
}
