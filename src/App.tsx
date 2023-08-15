import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <>
    <CounterEffect></CounterEffect>
    <CounterHook></CounterHook>
    </>
  );
}

export default App;
