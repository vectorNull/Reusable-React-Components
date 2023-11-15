import React from 'react';
import Button from '../components/button';
import useCounter from '../Hooks/use-counter';

function CounterPage({ initialCount }) {

  const { count, incrementCount } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={incrementCount}>Increment</Button>
    </div>
  )
}

export default CounterPage