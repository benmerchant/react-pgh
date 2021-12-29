
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <div className="ContainerHeader">
          Pittsburgh Paths
        </div>
        <div className="ClockArea">
          <div className="ClockActual">
            { Date.now() }
          </div>
          <div className="ClockButtons">
            <button>Start</button>
            <button>Split</button>
          </div>
          <div className="PathArea">
            <div className="PathHeader">
              Path Name
            </div>
            <div className="PathList">
              <ul>Stop 1</ul>
              <ul>Stop 2</ul>
              <ul>Stop 3</ul>
              <ul>Stop 4</ul>
              <ul>Stop 5</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
