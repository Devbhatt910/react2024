import React, { useState } from 'react'

const DepentDropDown = () => {

    const country=['India','Usa','Australia']
    const states={
        'India':['Gujarat','New_Delhi','UP'],
        'Usa':['New_York','Washington_DC','California'],
        'Australia':['New_South_Wales','Victoria','Queensland']
    }

    const [countries, setcountries] = useState('')

    function handleChange(e){
            setcountries(e.target.value);
    }
  return (
    <div>
      <h1>Dependent DropDown</h1>
      <select onChange={handleChange}>
        {
            country.map(country=>{
                return <option>{country}</option>
            })
        }
      </select>

    {countries && <select>
        {
            states[countries].map(state=>{
                return <option>{state}</option>
            })
        }
    </select>}
    </div>
  )
}

export default DepentDropDown
