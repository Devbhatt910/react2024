import React, { useState } from 'react'

const UseStateBooleanDemo = () => {
    const [married, setmarried] = useState(false);

    function handleStatuschange(){
        setmarried(!married);
    }
return (
    <div>
        <h1>UseState Boolean Demo</h1>
        <h2>{married===true ? 'married' : 'not married'}</h2>
        <button onClick={()=>handleStatuschange()}>Change Status</button>
    </div>
    )
}

export default UseStateBooleanDemo
