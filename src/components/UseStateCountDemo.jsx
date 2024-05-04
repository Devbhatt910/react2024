import React, { useState } from 'react'

const UseStateCountDemo = () => {

    const [counter, setcounter] = useState(0)

    function handleCountChange(){
        setcounter(counter+1);
        console.log(counter);
    }
return (
    <div>
        <h1>USe State Count Demo</h1>
        <h2>{counter}</h2>
        <button onClick={handleCountChange}>Update Counter</button>
    </div>
    );
}

export default UseStateCountDemo
