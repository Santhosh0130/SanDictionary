import POS from "./POS"
import './Meanings.css'
import { useState } from "react"
import propType from 'prop-types'

export default function Mean(props){
    return(
        <>
            <div className="meanPan">
                {/* PartsOfSpeach */}
                <h2 className="meaning">{props.count}.Meanings</h2>

                {props.res.meanings.map((val, index) => (
                    <POS key={index} res={val} count={index+1} />
                ))}
            </div>
        </>
    )
}

// Mean.prototype = {
//     resArray : propType.arrayOf(propType.string)
// }