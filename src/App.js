import React, {useState} from 'react'
import './App.css';
import {weatherAPI} from "./api/api";
import {cases} from "./data/data";
import {validate} from "./utils/validators";

function App() {

    const [word, setWord] = useState('')
    const [currentCase, setCurrentCase] = useState(cases.im)
    const [wordInAnotherCase, setWordInAnotherCase] = useState()
    const [error, setError] = useState(' ')

    let wordChange = (e) => {
        setWord(e.target.value)
        validator(e)
    }

    let getWordCase = (wordCase) => {
        setCurrentCase(wordCase)
        return weatherAPI.getWordCase(word, wordCase[0]).then(data => setWordInAnotherCase(data.items))
    }

    let validator = (e) => {
        setError(validate(e))
    }

    return (
        <div className='wrapper'>
            <div className="wrapper__main">
                <h1>Перевод слова в другой падеж</h1>
                <input className={(error && error != ' ') ? 'errorInput' + ' ' + 'input' : 'input'}
                       type="text"
                       placeholder='Введите слово в именительном падеже...'
                       value={word}
                       onChange={wordChange}
                       onBlur={validator}
                />
                {error ? error : null}
                <div>
                    <p>Перевести в:</p>
                    <div>
                        <button className='button' disabled={((currentCase[0] === cases.im[0]) || error)}
                                onClick={() => getWordCase(cases.im)}>{cases.im[0]}</button>
                        <button className='button' disabled={((currentCase[0] === cases.rd[0]) || error)}
                                onClick={() => getWordCase(cases.rd)}>{cases.rd[0]}</button>
                        <button className='button' disabled={((currentCase[0] === cases.dt[0]) || error)}
                                onClick={() => getWordCase(cases.dt)}>{cases.dt[0]}</button>
                        <button className='button' disabled={((currentCase[0] === cases.vn[0]) || error)}
                                onClick={() => getWordCase(cases.vn)}>{cases.vn[0]}</button>
                        <button className='button' disabled={((currentCase[0] === cases.tv[0]) || error)}
                                onClick={() => getWordCase(cases.tv)}>{cases.tv[0]}</button>
                        <button className='button' disabled={((currentCase[0] === cases.pr[0]) || error)}
                                onClick={() => getWordCase(cases.pr)}>{cases.pr[0]}</button>
                    </div>
                </div>
                <div>
                    {wordInAnotherCase && <p>Слово в {currentCase[1]} падеже:</p>}
                    <h2>{wordInAnotherCase ?
                        wordInAnotherCase.map(w => {
                            return <p>{w}</p>
                        })
                        : null}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default App;
