import React, { useState } from 'react'

const FormDemo = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [gender, setgender] = useState('')

    const submitHandler=()=>{
            alert(name+email+gender)
    }
    const nameHandler=(e)=>{
        console.log(e.target.value);
        setname(e.target.value);
    }
  return (
    <div>
      <h1>Basic Form Demo</h1>
      <div>
        <label>Name</label>
        <input type="text" onChange={(event)=>{nameHandler(event)}} />{name}
      </div>

      <div>
        <label>Email</label>
        <input type="text" onChange={(event)=>{setemail(event.target.value)}} />{email}
      </div>

      <div>
        <label>Gender</label>
        Male:<input type='radio' name='gender' value='male' onChange={(event)=>{setgender(event.target.value)}}></input> <br></br>
        Femaale:<input type='radio' name='gender' value='female' onChange={(event=>{setgender(event.target.value)})}></input> <br></br>

        {gender}
      </div>

      <div>
        <button onClick={()=>submitHandler()}>Submit</button>
      </div>
    </div>
  )
}

export default FormDemo
