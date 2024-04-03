import './App.scss';
import { Schedule } from './types/Schedule';

const App = () => {
  const items = [
    {
      team: 'U8 mix',
      schedule: { day: 'Friday', start_time: '15:30', end_time: '16:45', hall: 'Deusterschule Kitzingen' }
    },
    {
      team: 'U10 mix',
      schedule: [
        { day: 'Friday', start_time: '17:00', end_time: '18:30', hall: 'Deusterschule Kitzingen' },
        { day: 'Friday', start_time: '16:45', end_time: '18:15', hall: 'Deusterschule Kitzingen' }
      ]
    },
    {
      team: 'U12 mix',
      schedule: [
        { day: 'Monday', start_time: '17:00', end_time: '18:30', hall: 'Mainstockheim' },
        { day: 'Monday', start_time: '16:45', end_time: '18:15', hall: 'Mainstockheim' }
      ]
    },
    {
      team: 'U14 m', schedule: [
        { day: 'Monday', start_time: '17:00', end_time: '18:30', hall: 'Arena Kitzingen' },
        { day: 'Monday', start_time: '16:45', end_time: '18:15', hall: 'Arena Kitzingen' }
      ]
    },
    {
      team: 'U12 mix', schedule: [
        { day: 'Tuesday', start_time: '17:00', end_time: '18:30', hall: 'Arena Kitzingen' },
        { day: 'Tuesday', start_time: '16:45', end_time: '18:15', hall: 'Arena Kitzingen' }
      ]
    },
    {
      team: 'U14 m', schedule: [
        { day: 'Tuesday', start_time: '17:00', end_time: '18:30', hall: 'Arena Kitzingen' },
        { day: 'Tuesday', start_time: '16:45', end_time: '18:15', hall: 'Arena Kitzingen' }
      ]
    },
    { team: 'OPEN COURT', schedule: { day: 'Monday', start_time: '17:00', end_time: '18:30', hall: 'Arena Kitzingen' } }
  ]

  const renderRows = () => {
    let rows: any = [];

    items.forEach((item, i) => {
      if ('map' in item?.schedule) {
        const schedules: Schedule[] = item?.schedule;
        schedules.forEach((schedule, j) => {
          rows.push(
            <tr key={`row-${i}-${j}`} className={(i % 2 === 0) ? 'black-row' : ''}>
              {j == 0 ? <td rowSpan={schedules.length} className='full-width'>{item?.team}</td> : null}
              <td className='day'>{schedule?.day}</td>
              <td className='time center mt-5'><span>{schedule?.start_time}</span> - <span>{schedule?.end_time}</span></td>
              <td className='hall'>{schedule?.hall}</td>
            </tr>
          );
        })
      } else {
        rows.push(
          <tr key={`row-${i}`} className={(i % 2 === 0) ? 'black-row' : ''}>
            <td className='full-width'>{item?.team}</td>
            <td className='day'>{item.schedule?.day}</td>
            <td className='time center mt-5'><span>{item?.schedule?.start_time}</span> - <span>{item?.schedule?.end_time}</span></td>
            <td className='hall'>{item?.schedule?.hall}</td>
          </tr>
        );
      }
    })

    return rows;
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th className='day'>Day</th>
            <th className='time center'>Time</th>
            <th className='hall'>Hall</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
