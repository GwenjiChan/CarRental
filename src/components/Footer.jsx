import React from 'react'

const Footer = () => {
  return (
   <div className='container grid grid-rows-1 lg:grid-cols-4 my-2 gap-6'>
    <div>
        <h1 className='text-3xl font-bold'>Car Rental</h1>
        <p className='text__para leading-6'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <span className='text__para font-semibold'>Cristian Salazar | 2024</span>
    </div>
    <div>
        <h1 className='text-3xl font-bold'>Branches</h1>
        <ul>
            <li className='text__para '>Pampanga</li>
            <li className='text__para ' >Bulacan</li>
            <li className='text__para ' >Manila</li>
        </ul>
    </div>
    <div> 
        <h1 className='text-3xl font-bold'>Working Hours</h1>
        <ul>
            <li className='text__para ' >Mon - Fri: 9:00AM - 9:00PM</li>
            <li className='text__para ' >Sat: 9:00AM - 5:00PM</li>
            <li className='text__para ' >Sun: Closed</li>
        </ul></div>
    <div>
        <h1 className='text-3xl font-bold'>Subscription</h1>
        <p className='text__para ' >Subscribe your Email address for latest news & updates.</p>
        <input type="email" name="" placeholder='Enter Email Address' className='form__input bg-gray-300 '/>
        <button className='btn-2 w-full my-2'>Submit</button>
    </div>
   </div>
  )
}

export default Footer