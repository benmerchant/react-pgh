
import './App.css';
import { useState } from 'react';

function App() {
  const [path, setPath] = useState('My First Path')
  const [stops, setStops] = useState([
    {
      id: 1,
      name: 'Home',
      time: 0
    },
    {
      id: 2,
      name: 'Stairs',
      time: 0
    },
    {
      id: 3,
      name: 'Natchez',
      time: 0
    },
    {
      id: 4,
      name: 'Virginia',
      time: 0
    },
    {
      id: 5,
      name: 'Grandview',
      time: 0
    }
  ])
  const [currentTime, setCurrentTime] = useState(0)

  return (
    <div className="App">
      <div className="AppContainer SimpleBorder">
        <div className="ContainerHeader SimpleBorder">
          Pittsburgh Paths
        </div>
        <div className="ClockArea SimpleBorder">
          <div className="ClockActual SimpleBorder">
            { Math.trunc((currentTime / 1000) / 60)  }
            :
            { currentTime / 1000 }
          </div>
          <div className="ClockButtons">
            <button>Start</button>
            <button>Split</button>
          </div>
          <div className="PathArea SimpleBorder">
            <h3 className="PathHeader">
              {path}
            </h3>
            <div className="PathList">                
                  <ul>
                    {stops.map(stop =>
                      <li
                        key={stop.id}
                        className="SimpleBorder PathList"
                      >
                        <p>{stop.name}</p>
                      </li>
                    )}
                  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
