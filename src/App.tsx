import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={50} />
      <Habit completed={40} />
      <Habit completed={10} />
    </>
  );
}

export default App;
