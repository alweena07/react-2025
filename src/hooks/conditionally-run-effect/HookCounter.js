import React, {useState, useEffect} from "react";


function HookCounter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('UseEffect called:')
        document.title = `You clicked ${count} times`
    }, [count])

    console.log('Node Created:');

    return (
        
        <div>
            <input 
                   type = "text" value = {name}
                   onChange = {e => setName(e.target.value)}
             /><br /><br />

            <button 
                  onClick = {() => setCount(count + 1) }> Click {count} times</button>
        </div>
        )
     



}

export default HookCounter;