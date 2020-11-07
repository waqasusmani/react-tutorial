import {useState} from 'react';
import FifthChildThatGetsState from './FifthChildThatGetsState';

export default function(){
    const [fourthState,fourthStateModifier] = useState(false);
    return (
        <div>
            <h1 style={{color:fourthState==true?"red":"green"}}>I am the fourth child who passes its state to the fifth child</h1>
            <FifthChildThatGetsState state={[fourthState,fourthStateModifier]}/>
        </div>
        
    )
}