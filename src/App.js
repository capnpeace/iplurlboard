import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CLICK <code>THE LINK BELOW</code> TO VIEW DASHBOARD.
        </p>
        <a
          className="App-link"
          href="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FIPL%2Bdashboard&action=view&mode=dashboard&subView=model0000018341665cf0_00000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW COGNOS
        </a>
      </header>
    </div>
  );
}

export default App;
