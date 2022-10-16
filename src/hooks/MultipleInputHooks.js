import React, {useState} from 'react';

function MultiPleInput () {

    const [value, setValue] = useState({firstName: '', lastName:''});
    const [btnvalue, setBtnvalue] = useState(false);

    const handleInput = e => {

        setValue({
            ...value,
            [e.target.name]:e.target.value
        });
        setBtnvalue(false)

    }
    

    return (

        <div>
           {
              btnvalue ? <h1>  {value.firstName} {value.lastName}  </h1> : null
           }
       
            <input type = "text" name= "firstName" value = {value.firstName} onChange = {handleInput} /><br/><br/>
            <input 
                type = "text"
                name = "lastName"
                value = {value.lastName}
                onChange = {handleInput} 
            /><br/><br/>
            <button onClick = {() => setBtnvalue(true)}>Click</button>
            </div>

    )

}

export default MultiPleInput;