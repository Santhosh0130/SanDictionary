import { useState } from 'react'
import './App.css'
import Mean from './Componenads/Meanings'


var result = []
export default function App() {
  const [word, setWord] = useState("what")
  const [phonetic, setPhonetic] = useState()
  const [load, setload] = useState(false)
  const [res, setRes] = useState([{word:"", meanings:[{antonyms:[{antonym:""}], synonyms:[{synonym:""}], definitions:[{definition:"",example:""}], partOfSpeech:""}], phonetic:"", phonetics:[{text:"", audio:""}]}])

  async function getAns(){
    
    const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const result = await resp.json()
    if(result == null){
      setload(false)
    } else{
      setload(true)
      setPhonetic(result[0].phonetichn)
      setRes(result)
    }

    // resArray = Object.keys(result[0]).map((key) => ({
    //   [key]: result[0][key]
    // }));

    // setRes(Object.keys(result[0]).map((key) => ({
    //   [key]: result[0][key]
    // })))

    // console.log(result[0].word)
  console.log(res)
  }
  // console.log(res[0].meanings)
  // console.log(res)

  // try{
  //   console.log(res[0].word)
  //   {<POS />}
  // }catch(e){
  //   console.log(e)
  // }
  

  

  return (
    <>
      <div className="searchPan">
      <h1>San Dictonary</h1>
      <p>To search a diffrent words to know thier exact meanings.</p>
        <input type="text" className='text' onChange={(e) => setWord(e.target.value)} placeholder='Enter the Word' />
        <div className="buttons">
        <button onClick={getAns}>Search</button>
        <button onClick={() => setload(false)}>Clear</button>
        </div>
      </div>
      {load ? 
      <div className="detailsPan">
        <div className="wordPan">
          <div className='word'>{word}</div> 
          <div className='phonitic'>{phonetic}</div>
        </div>
        <ul>
          {res[0].phonetics.map((val,index) => (<li key={index}>{val.text} {val.audio == "" ? null : <button className='speak' onClick={() => {
            const aud = new Audio() 
            aud.src = val.audio
            aud.play()
            }}>S</button>}</li>))}
        </ul>
        {/* Meanings Pan */}

        {res.map((val, index) => (
          <Mean key={index} res={val} count={index+1}/>
        ))}
      </div> : null }
    </>
  )
}

