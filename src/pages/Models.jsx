import React from 'react'
import Hero from '../components/Hero'

import ModelCard from '../components/ModelCard';

const Models = () => {
  return (
    <div className='min-h-screen'>
         <Hero title={"Vehicle Models"}/>
        <div className='container mt-5'>
            <div className='grid grid-rows-1 lg:grid-cols-4  gap-6'>
                <ModelCard model={"Tesla"}/>
                
            </div>
        </div>
    </div>
    )
}

export default Models