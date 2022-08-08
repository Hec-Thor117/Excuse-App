import { useState } from 'react';
import './App.css';

function Excuser() {
    const [excuse, setExcuse] = useState("");

    const createExcuse = (excuse) => {
        fetch(`https://excuser.herokuapp.com/v1/excuse/${excuse}`)
            .then(res => res.json())
            .then(data => setExcuse(data[0].excuse))
    };
    
    return (
        <div className="App">
            <h1> Generate An Excuse </h1>
            <button onClick={() => createExcuse("party")}> Party </button>
            <button onClick={() => createExcuse("family")}> Family </button>
            <button onClick={() => createExcuse("office")}> Office </button>

            <h3>{excuse}</h3>
        </div>
    );
}

export default Excuser;
