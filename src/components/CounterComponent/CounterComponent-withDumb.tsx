import { trace } from "mobx";
import { observer } from "mobx-react-lite";

import { useMainStore } from "../../hooks/useMainStore";
import "./CounterComponent.css";

interface DumbCounterComponentProps {
  count: number,
  handleIncrement: () => void,
  handleDecrement: () => void,
}

const DumbCounterComponent: React.FC<DumbCounterComponentProps> = (props) => {
  const { count, handleIncrement, handleDecrement } = props;
  return (
    <div className="counter">
      <br />
      <div>{count}</div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export const CounterComponent = observer(function CounterComponentWrapper() {
  // trace();

  const { counter: { count, increment, decrement } } = useMainStore();

  return (
    <DumbCounterComponent
      count={count}
      handleIncrement={increment}
      handleDecrement={decrement}
    />
  );
});
