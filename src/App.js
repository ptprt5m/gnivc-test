import React, {useEffect, useState} from 'react'
import './App.css';
import {weatherAPI} from "./api/api";
import {cases} from "./data/data";

function App() {

    const [word, setWord] = useState('')
    const [currentCase, setCurrentCase] = useState(cases.im)
    const [wordInAnotherCase, setWordInAnotherCase] = useState()

    let wordChange = (e) => {
        setWord(e.target.value)
    }

    let getWordCase = (wordCase) => {
        setCurrentCase(wordCase)
        return weatherAPI.getWordCase(word, wordCase[0]).then(data => setWordInAnotherCase(data.items))
    }

    return (
        <div className='wrapper'>
            <div className="wrapper__main">
                <h1>Перевод слова в другой падеж</h1>
                <input className='input'
                       type="text"
                       placeholder='Введите слово в именительном падеже...'
                       value={word}
                       onChange={wordChange}
                />
                <div>
                    <p>Перевести в:</p>
                    <div>
                        <button className='button' disabled={(currentCase[0] === cases.im[0]) ? true : false}
                                onClick={() => getWordCase(cases.im)}>{cases.im[0]}</button>
                        <button className='button' disabled={(currentCase[0] === cases.rd[0]) ? true : false}
                                onClick={() => getWordCase(cases.rd)}>{cases.rd[0]}</button>
                        <button className='button' disabled={(currentCase[0] === cases.dt[0]) ? true : false}
                                onClick={() => getWordCase(cases.dt)}>{cases.dt[0]}</button>
                        <button className='button' disabled={(currentCase[0] === cases.vn[0]) ? true : false}
                                onClick={() => getWordCase(cases.vn)}>{cases.vn[0]}</button>
                        <button className='button' disabled={(currentCase[0] === cases.tv[0]) ? true : false}
                                onClick={() => getWordCase(cases.tv)}>{cases.tv[0]}</button>
                        <button className='button' disabled={(currentCase[0] === cases.pr[0]) ? true : false}
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
