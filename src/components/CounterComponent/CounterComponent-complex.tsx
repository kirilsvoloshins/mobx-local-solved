import { trace } from "mobx";
import { observer } from "mobx-react-lite";

import { useMainStore } from "../../hooks/useMainStore";
import "./CounterComponent.css";

export const CounterComponent = observer(function CounterComponentComplex() {
  const { counter: { count, increment, decrement } } = useMainStore();

  // trace();

  return (
    <div className="counter">
      <br />
      <div>{count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
});
