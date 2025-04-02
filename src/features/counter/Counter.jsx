import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [increments, setIncrements] = useState(0);

  const addValue = Number(increments) || 0;

  const resetAll = () => {
    setIncrements(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(resetAll)}>reset</button>
      <input
        type="number"
        value={increments}
        onChange={(e) => setIncrements(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        increment
      </button>
    </section>
  );
}

export default Counter;
