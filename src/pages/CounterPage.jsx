import React, { useReducer } from 'react';
import Button from '../components/button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMET_COUNT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUETOADD_TO_COUNT = 'add-valueToAdd-to-count';

const reducer = (state, action) => {
  switch (action.type)
  {

    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMET_COUNT:
      return {
        ...state,
        count: state.count - 1
      }

    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }

    case ADD_VALUETOADD_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }

    default:
      throw new Error('Unexpected action type: ' + action.type);
  };
};

function CounterPage({ initialCount }) {

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMET_COUNT
    });
  };

  const handleChange = (event) => {
    //* Must use OR bc an empty string that is parsed into an int return NaN
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUETOADD_TO_COUNT,
    });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-xl text-center'>Counter with useReducer</h1>
      <h2 className='text-md'>Count is {state.count}</h2>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          //* Use OR to remove set 0 in input; REMEMBER it's a string
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage