import './App.css';
import BarChart from './charts/BarChart';
import ElevateAppBar from './Components/MainAppBar';
import MainFooter from './Components/MainFooter';

function App() {
  return (
    <div className="App">
      <ElevateAppBar />
      <header className="App-header">
        <h1>React App</h1>
        <BarChart />
      </header>
      <MainFooter/>
    </div>
  );
}

export default App;
