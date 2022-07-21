import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Display from './Display';
import './index.css';
import Statistics from './Statistics';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let all = good + neutral + bad;
  let average = (good*1 + neutral*0 + bad*-1)/(all);

  const handleGood = () => setGood(good + 1);

  const handleNeutral = () => setNeutral(neutral + 1);

  const handleBad = () => setBad(bad + 1);

  const positive = () => (100/all)*good+'%';

  return (
    <div>
      <Display 
        title = "Give feedback"
      />
      <div className="flex justify-around max-w-lg mx-auto">
        <div className='bg-teal-700 hover:bg-teal-600 rounded-md border-2 shadow-md transition-all'>
          <Button 
          text = 'good'
          handleClick = {handleGood}
          />
        </div>
        <div className='bg-slate-800 hover:bg-slate-600 rounded-md border-2 shadow-md transition-all'>
          <Button 
            text = 'neutral'
            handleClick = {handleNeutral}
          />
        </div>
        <div className='bg-red-700 hover:bg-red-600 rounded-md border-2 shadow-md transition-all'>
          <Button 
            text = 'bad'
            handleClick = {handleBad}
          />
        </div>
      </div>
      <div className='py-8 w-full md:max-w-md lg:max-w-lg mx-auto'>
        <Display 
        title = "Statistics" 
        />
        <table className='table-auto'>
          <tbody>
            {
              all !== 0 ?
              <>
                <Statistics
                text = {'good'}
                value = {good}
                />
                <Statistics
                  text = {'neutral'}
                  value = {neutral}
                />
                <Statistics
                  text = {'bad'}
                  value = {bad}
                />
                <Statistics
                  text = {'all'}
                  value = {all}
                />
                <Statistics
                  text = {'average'}
                  value = {average}
                />
                <Statistics
                  text = {'positive'}
                  value = {positive()}
                />
              </>
            :
              <tr className='py-2 pl-2 my-4 bg-gray-100 border shadow-md'>
                <td className='pl-4 ml-6 md:ml-2 '>No feedback given</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));