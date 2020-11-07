const { useState } = require("react");

function ThirdChildWithState(){
    const [myState,myStateModifier]=useState(0)
    
    return(
        <div>
            <h2>I am the Third Child. My state right now is {myState}</h2>
            <button onClick={()=>{myStateModifier(myState+1)}}>State Incrementor</button>
        </div>

    )
}

export default ThirdChildWithState