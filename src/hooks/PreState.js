import React, {useState} from 'react';


function PrevHooks(){

    const initialCount = 0;

    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i< 5; i++){
            setCount(prevCount => prevCount+1)
        }
    }

    return (
      <div>
         Count: {count}
        <br />
        <br />
        <button onClick= { () => setCount(prevCount => prevCount+1)}>Increment</button>
        <br />
        <br />
        <button onClick = { () => setCount(prevCount => prevCount-1)}>Decrement</button>
        <br />
        <br />
        <button onClick = {() => setCount(initialCount)}>Reset</button>
        <br />
        <br />
        <button onClick = {incrementFive}>Increment 5</button>
      </div>
    );



}

export default PrevHooks;
