import React, {useState} from 'react';


function HooksCounter(){
    const [count, setCount] =  useState(0);
    const [inputValue, setInputValue] = useState({firstName: '', lastName:''});

    const handleInputValue = e => {
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value
        }); 
        alert('Hello') 
    }

    return (
        <div>
            <button onClick = {() => setCount(count+5)} >Count {count} </button><br /><br />

            {inputValue.firstName} <br/><br/>
            {inputValue.lastName} <br/><br/>

            <h2>{JSON.stringify(inputValue)}</h2> <br/><br/>

            <input type = "text" value = {inputValue.firstName} name = "firstName" onChange = {handleInputValue}  /> <br/><br/>
            <input type = "text" value = {inputValue.lastName} name = "lastName"  onChange = {handleInputValue} />

        </div>
        )

}

export default HooksCounter;