import {useState } from 'react'
import Calender from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './App.css'

function App() {
  const [date,setDate] = useState(new Date())
  return (
    <div className="App">
      <h1 className="text-center">My Routine</h1>
      <div className="calender-container">
        <Calender onChange={setDate} value={date} selectRange={true} /></div>

      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
      </div>
  );
}

export default App;
