import FifthChildThatGetsState from "./FifthChildThatGetsState";
import FourthChildThatGivesState from "./FourthChildThatGivesState";
import { SecondChild } from "./SecondChild";
import ThirdChildWithState from "./ThirdChildWithState";

export default function Parent() {
    function givePartyHeading(){
        return (<h3>I like to party</h3>)
    }
    var myRandomNumber;
    function giveRandomNumber(){
        myRandomNumber = Math.random()*10
        console.log(myRandomNumber)
        return myRandomNumber 
    }
    giveRandomNumber()
    return (
        <div>
            <h1>I am the parent here</h1>
            {givePartyHeading()}
            <h3>My random number today is: {myRandomNumber}</h3>
            <FirstChild value = {23} words="twenty three"/>
            <SecondChild favoriteCharacter = "Wee Willy Winkie"/>
            <ThirdChildWithState/>
            <FourthChildThatGivesState/>
        </div>
    )
}

function FirstChild(props){
    return (
        <div>
            <h1>I am the child in the parent's file and got this from the Parent: <span style={{color:"red"}}>{props.value} ({props.words})</span></h1>
        </div>
    )
}