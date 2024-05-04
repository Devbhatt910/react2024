import React, { useState } from 'react'

const UseStateArrayDemo = () => {

    const [ques, setques] = useState(['What is your name','What is your age'])

    function handleQuesChange(){
        var q=['Whats is your Age'];
        setques([...ques,q]);
    }
return (
    <div>
        <h1>UseState Array Demo</h1>
        <h2>{ques}</h2>
        <button onClick={handleQuesChange}>Add Ques</button>
    </div>
        )
}

export default UseStateArrayDemo
