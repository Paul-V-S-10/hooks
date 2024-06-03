import React, { useState } from 'react'

import './UseActionStateEg.css'


const UseActionStateEg = () => {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    age: ''
  })

  const handleSubmit = () => {
    console.log(formValues);
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(e.target);
    setFormValues({
      ...formValues,
      [name]: value
    }

    )

  }

  return (
    <div className='useActionState'>
     

        <div className="container">
          <div className="header">
            <div className="headerLeft"></div>
            <div className="headerRight">Fill the form below</div>
          </div>
          <div className="firstName">
            <div className="firstNameLeft">First Name:</div>
            <div className="firstNameRight">
              <input className='inputFirstNameRight' name='fname' value={formValues.fname} type="text" onChange={handleChange} />
            </div>
          </div>
          <div className="lastName">
            <div className="lastNameLeft">Last Name:</div>
            <div className="lastNameRight">
              <input className='inputLastNameRight' name='lname' value={formValues.lname} type="text" onChange={handleChange} />
            </div>
          </div>
          <div className="age">
            <div className="ageLeft">Age:</div>
            <div className="ageRight">
              <input className='inputAgeRight' name='age' value={formValues.age} onChange={handleChange} type="text" />
            </div>
          </div>
          <div className='submit'>
            <button className='submitButton' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default UseActionStateEg