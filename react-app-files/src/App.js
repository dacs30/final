import './App.css';
import AChart from './charts/AChart';
import BarChart from './charts/BarChart';
import IntroductionsBlock from './Components/IntroductionsBlock';
import ElevateAppBar from './Components/MainAppBar';
import MainFooter from './Components/MainFooter';

function App() {
  return (
    <div className="App">
      <ElevateAppBar />
      <IntroductionsBlock />
      <header className="App-header">
        <BarChart />
        <AChart />
        <p style={{color: 'white', margin: '10px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam nunc, eu aliquet nisl nunc eu nisl.
        </p>
      </header>
      <MainFooter/>
    </div>
  );
}

export default App;
