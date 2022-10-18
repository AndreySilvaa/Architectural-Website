import React from 'react'

// CSS
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='form-div'>
        <h1>Book an Appointment</h1>
        <form>
          <label htmlFor="name">
            Name
            <input name='name' type="text" placeholder='Enter your Name' required/>
          </label>

          <label htmlFor="phone">
            Phone
            <input type="tel" name="phone" id="phone" placeholder='Enter your Phone (e.g. +14155552675)' required/>
          </label>

          <label htmlFor="message">
            Message
            <textarea name="message" id="message" cols="30" rows="8" placeholder='Enter your Message' required></textarea>
          </label>

          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  )
}

export default Contact