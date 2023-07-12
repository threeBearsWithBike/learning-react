import './App.css';
import MyCounter from './homework_1/MyCounter';

function App() {
  return (
    <div>
      <MyCounter value={-100} />
      <MyCounter value={0} />
      <MyCounter value={100} />
    </div>
  );
}

export default App;
