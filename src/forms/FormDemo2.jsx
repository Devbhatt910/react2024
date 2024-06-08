import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo2 = () => {

    const {register,handleSubmit,formState:{errors},}=useForm();

    const submitHandler=(data)=>{
        console.log("data",data);
    };

    console.log(errors);

    const validationSchema={
        age:{
            required:{
                value:true,
                message:"Age is Required"
            },
            min: {
                value: 18,
                message: "Age should be greater than 18",
              },
              max: {
                value: 60,
                message: "Age should be less than 60",
              },
        },
        add:{
            required: {
                value: true,
                message: "Address is required*",
            },
            minLength: {
                value: 10,
                message: "Address should be greater than 10",
            },
            maxLength: {
                value: 100,
                message: "Address should be less than 100",
            }
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name:</label>
            <input type="text" {...register("name",{
                required:{value:true,message:"Name is required"},
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
            <label>Age</label>
            <input type="text" {...register("Age",validationSchema.age)}/>
            {errors.Age && <span>{errors.Age.message}</span>}
        </div>

        <div>
            <label>Address</label>
            <input type="text" {...register("Address" , validationSchema.add)}/>
            {errors.Address && <span>{errors.Address.message}</span>}
        </div>

        <div>
            <input type="submit" value="submit"/>
        </div>
      </form>
    </div>
  )
}

export default FormDemo2
