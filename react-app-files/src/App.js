import './App.css';
import AChart from './charts/AChart';
import BarChart from './charts/BarChart';
import IntroductionsBlock from './Components/IntroductionsBlock';
import ElevateAppBar from './Components/MainAppBar';
import MainBody from './Components/MainBody';
import MainFooter from './Components/MainFooter';

function App() {
  return (
    <div className="App">
      <ElevateAppBar />
      <IntroductionsBlock />
      <header className="App-header">
        <MainBody />
      </header>
      <MainFooter/>
    </div>
  );
}

export default App;
