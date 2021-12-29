
import './App.css';
import { useState } from 'react';

function App() {
  const [path, setPath] = useState('My First Path')
  const [stops, setStops] = useState([
    {
      id: 1,
      order: 1, 
      name: 'Home',
      time: 0
    },
    {
      id: 2,
      order: 2,
      name: 'Stairs',
      time: 0
    },
    {
      id: 3,
      order: 3,
      name: 'Natchez',
      time: 0
    },
    {
      id: 4,
      order: 4,
      name: 'Virginia',
      time: 0
    },
    {
      id: 5,
      order: 5,
      name: 'Grandview',
      time: 0
    }
  ])
  const [currentTime, setCurrentTime] = useState(0)
  const [currentStop, setCurrentStop] = useState(stops[0].order)
  const [clockRunning, setClockRunning] = useState(false)
  const [lastStop, setLastStop] = useState(false)

  const formattedTime = time => {
   return Math.trunc((time / 1000) / 60) + ':' + time / 1000
  }
  const startClock = time => {
    setClockRunning(false ? true : true); // ha! this cant be right
    setInterval(() => {
      time = time + 1;
      setCurrentTime(time)
    }, Math.pow(1000));
  }
  const captureSplit = (time, stop) => {
    if (!clockRunning) alert('this should never happen')
    if (currentStop === 0) setCurrentStop(1)
    else (setCurrentStop(currentStop + 1))
    if (currentStop >= stops.length - 1) {
      setLastStop(true)
    }
    stops[currentStop].time = currentTime
    console.log(currentStop);
  }

  
  return (
    <div className="App">
      <div className="AppContainer SimpleBorder">
        <div className="ContainerHeader SimpleBorder">
          Pittsburgh Paths
        </div>
        <div className="ClockArea SimpleBorder">
          <div className="ClockActual SimpleBorder">
            { formattedTime(currentTime) }
          </div>
          <div className="ClockButtons">
            <button onClick={() => {startClock(currentTime)}} >
              {clockRunning ? 'End Path' : 'Start'}
            </button>
            <button onClick={() => {captureSplit(currentTime, currentStop)}} disabled={!clockRunning || lastStop} >
              Split
            </button>
          </div>
          <div className="PathArea SimpleBorder">
            <h3 className="PathHeader">
              {path}  currentStop = {currentStop}
            </h3>
            <div className="PathList">                
                  <ul>
                    {stops.map(stop =>
                      <li
                        key={stop.order}
                        className={stop.order === currentStop ? 'activeStop' : ''}
                      >
                        <p>{stop.name} = {stop.time}</p>
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
