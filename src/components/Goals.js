import { useState } from "react"

export default function Goals(props) {

    const [longTermGoals, setLongTermGoals] = useState([]);
    const [inputvalue, setInputValue] = useState('');

    const [shortTermGoals, setShortTeamGoals] = useState([]);
    const [shortInputValue, setShortInputValue] = useState('');

    const addShort = () => {
        if (shortInputValue.trim() !== '') {
            setShortTeamGoals([...shortTermGoals, shortInputValue]);
            setShortInputValue('');
        }
    }

    const addItem = () => {
        if (inputvalue.trim() !== '') {
            setLongTermGoals([...longTermGoals, inputvalue]);
            setInputValue('');
          }
    }
    return <div>
        <div className="d-flex mb-2">
        <div className="flex-fill border border-dark">
            <h1>Long Term Goals</h1>
            <ul>
                {longTermGoals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                ))}
            </ul>
            <input type="text" value={inputvalue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addItem}>Add Goal</button>
        </div>
        <div className="flex-fill  border border-dark">
            <h1>Short Term Goals</h1>
            <ul>
                {shortTermGoals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                ))}
            </ul>
            <input type="text" value={shortInputValue} onChange={(e) => setShortInputValue(e.target.value)} />
            <button onClick={addShort}>Add Goal</button>
        </div>
        </div>

    </div>
}