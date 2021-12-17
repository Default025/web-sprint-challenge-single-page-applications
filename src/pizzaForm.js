import React, { useState, useEffect } from 'react'
import axios from 'axios';

const initialFormValues = {
    Name: '',
    instr: '',
    sizeDropdown: '',
    pepperoni:false,
    sausage: false,
    onions: false,
    pineapple: false,
  }
  
  const initialPizza = []

export default function pizzaForm(props) {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const useValue = type === 'checkbox' ? checked : value;
    change(name, useValue)
  }

  const postPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
      .then(resp => {
        setPizza([ resp.data, ...pizza ]);
        return pizza;
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  return (
    <form className='container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Build Your Own Pizza</h2>

        <div className='errors'>
          <div>{errors.Name}</div>
          <div>{errors.instr}</div>
          <div>{errors.pepperoni}</div>
          <div>{errors.sausage}</div>
          <div>{errors.onions}</div>
          <div>{errors.pineapple}</div>
          <div>{errors.sizeDropdown}</div>
        </div>
      </div>

      <div className='form inputs'>

        <label id ="name-input">Name&nbsp;
          <input
            value={values.Name}
            onChange={onChange}
            name='Name'
            type='text'
          />
        </label>

        <label>Add special instructions
          <input
            value={values.instr}
            onChange={onChange}
            name='special-text'
            type='text'
          />
        </label>

        <label id="size-dropdown">Pizza Size
          <select
            onChange={onChange}
            value={values.sizeDropdown}
            name='size-dropdown'
          >
            <option value=''>- Select an option -</option>
            <option value='student'>Small</option>
            <option value='alumni'>Medium</option>
            <option value='instructor'>Large</option>
          </select>
        </label>
        </div>

      <div className='form checkboxes'>
        <h4>Toppings</h4>

        <label>Pepperoni
          <input
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Sausage
          <input
            type='checkbox'
            name='sausage'
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>Onions
          <input
            type='checkbox'
            name='onions'
            checked={values.onions}
            onChange={onChange}
          />
        </label>

        <label>Pineapple
          <input
            type='checkbox'
            name='pineapple'
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>

        <button onclick= "postPizza()" id="order-button" disabled={disabled}>Add to order</button>
      </div>
    </form>
  )
}