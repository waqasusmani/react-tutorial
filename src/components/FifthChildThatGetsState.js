export default function FifthChildThatGetsState(stateAsProp){
    const [state,stateChanger] = stateAsProp.state
    return (
        <div>
            <h1 style={{color:stateAsProp.state[0]==true?"red":"green"}}>I am the fifth child who gets state from fourth child</h1>
            <button onClick={()=>stateAsProp.state[1](!stateAsProp.state[0])}>State Changer</button>
        </div>
        
    )
}