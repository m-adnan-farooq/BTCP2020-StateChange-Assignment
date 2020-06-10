import React, {useState} from 'react';
import './Room.css'
function Room(){
    const[isLit, setLit] = useState(true);
    const brightness = isLit? 'lit' : 'dark';
    let [temperature, setTemperature] = useState(22)

    return (
        <div className={`room ${brightness}`}>
            <h1>Learning State Changes</h1>
            <span>This Room is {isLit? "lit" : 'dark'}</span>
            <br />
            <br />
            <span>The Room Temperatue is {temperature}&deg; C</span>
            <br />
            <br />
            <button className="light-button" onClick= {()=> setLit(true)}>Lights ON</button>
            <button className="light-button" onClick= {()=> setLit(false)}>Lights OFF</button>
            <br />
            <br />
            <button className="temp-button" onClick= {()=> setTemperature(++temperature)}> + </button>
            <button className="temp-button" onClick= {()=> setTemperature(--temperature)}> - </button>
            <br />
        </div>
    )
}
export default Room;