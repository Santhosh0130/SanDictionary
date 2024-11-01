import { useState } from 'react'
import { DefEx } from './DefEx'

export default function POS(props){
    // const antonyms = props.res.antonyms[0] == null ? "no Antonyms" : props.res.antonyms[0]
    // const synonyms = props.res.synonyms[0] == null ? "no Synonyms" : props.res.synonyms[0]
    return(
        <>
            <div className="posPan">
                <h3 className="posName">{props.count}.{props.res.partOfSpeech}</h3>
                
                <div className="typ">
                    {/* <div className="synonyems">Synonyems: {synonyms}</div> */}
                    {/* <div className="antonyems">Antonyems: {antonyms}</div> */}
                </div>

                {props.res.definitions.map((val, index) => (
                    <DefEx key={index} res={val} count={index+1}/>
                ))}
            </div>
        </>
    )
}