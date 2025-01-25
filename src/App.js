import './App.css';
import CardFoundation from './components/CardFoundation';
import YellowBackground from './components/YellowBackground';

function App() {
  return (
    <div className="App">
      <YellowBackground>
        <CardFoundation />
      </YellowBackground>
    </div>
  );
}

export default App;
