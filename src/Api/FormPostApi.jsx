
import axios from 'axios'
import React, { useState } from 'react'


import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const FormPostApi = () => {

      const [formData, setformData] = useState({
        name:'',
        email:'',
        age:''
      })


      const handleChange=(e)=>{

        const {name,value}=e.target;
  
        setformData({
          ...formData,
          [name]:value,
        })
  
      }

      const handleFormData= async (e)=>{


        e.preventDefault();

          const res=await axios.post("https://node5.onrender.com/user/user",formData)
            
          console.log(res);
            toast.success("🦄 Data Inserted!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          
      }



  return (
  <div>

<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

<form onSubmit={handleFormData}>

<div>
<input 
    type='text'
    name='name'
    placeholder='Name'
    value={formData.name}
    required
    onChange={handleChange}
    />
</div>
    

<div>
<input 
    type='text'
    name='email'
    placeholder='Email'
    value={formData.email}
    required
    onChange={handleChange}/>
</div>
    

<div>
<input 
    type='text'
    name='age'
    placeholder='Age'
    value={formData.age}
    required
    onChange={handleChange}/>
</div>
    

<div>
<button type='submit'>Submit</button>
</div>
    

</form>

  </div>
    
  )
}

export default FormPostApi
