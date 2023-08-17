import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/CounterReducerComponent';

function App() {
  return (
    <>
    {/* <CounterEffect></CounterEffect>
    <CounterHook></CounterHook> */}
    <CounterReducerComponent></CounterReducerComponent>
    </>
  );
}

export default App;
