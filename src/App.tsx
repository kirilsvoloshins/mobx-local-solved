import { CounterComponent } from "./components/CounterComponent/CounterComponent-withDumb";
import { mainStore, MainStoreContext } from "./stores/mainStore";
import "./App.css";

export default function App() {
  return (
    <MainStoreContext.Provider value={mainStore}>
      <CounterComponent />
    </MainStoreContext.Provider>
  );
}
