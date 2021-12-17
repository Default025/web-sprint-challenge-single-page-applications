import React, { useState, useEffect } from 'react'
import pizzaForm from './pizzaForm'
import axios from 'axios';
import schema from '../validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  Name: '',
  instr: '',
  sizeDropdown: '',
  pepperoni:false,
  sausage: false,
  onions: false,
  pineapple: false,
}
const initialFormErrors = {
  Name: "name must be at least 2 characters",
  instr: '',
  sizeDropdown: '',
}
const initialPizza = []
const initialDisabled = true


const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name,value) => {
    yup.reach(schema, name)
      .validate(Name.length > 2)
      .then(() => setFormErrors({ ...formErrors, [Name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [Name]: err.errors[0] }))
  }

  const inputChange = (name,value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <div className='container'>
      <header><h1>Lambda Eats</h1></header>
      <nav>
        <div className='nav-links'>
          <Link to="/">Home</Link>
        </div>
      </nav>


      <pizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

    </div>
  );
};
export default App;
