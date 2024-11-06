import React from 'react'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
const ModelCard = ({model}) => {
  return (
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg bg-slate-50 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className='m-4'>
    <img className="w-full h-48 object-cover rounded-md " src="https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.497xw:0.560xh;0.243xw,0.232xh&resize=768:*" alt="Product Image" />
    </div>
    <div className="p-4">
        <div className='flex justify-between items-center'>
            <h3 className="text-lg font-semibold text-gray-800">{model}</h3>
            <p className='bg-white font-semibold px-2 rounded-md'>2024</p>
        </div>
        <div className='grid grid-cols-2 mb-2'>
            <div className=' flex items-center gap-2'>
                <PeopleAltOutlinedIcon style={{ color: 'rgb(16 185 129)' }}/>
                <p className="text-sm text-gray-500">4 People</p>
            </div>
            <div className=' flex items-center gap-2'>
                <LocalGasStationOutlinedIcon style={{ color: 'rgb(16 185 129)' }}/>
                <p className="text-sm text-gray-500">Gasoline</p>
            </div>
            <div className=' flex items-center gap-2'>
                <DirectionsCarFilledOutlinedIcon style={{ color: 'rgb(16 185 129)' }}/>
                <p className="text-sm text-gray-500 ">Automatic</p>
            </div>
            <div className='flex items-center gap-2'>
                <SpeedOutlinedIcon style={{ color: 'rgb(16 185 129)' }} />
                <p className="text-sm text-gray-500">2.5km / liter</p>
            </div>
        </div>
        
        <hr />
        <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-gray-500">₱1,499.99</span>
            <button className=" p-2 bg-emerald-500 hover:bg-emerald-600  transition duration-300 text-white font-semibold ">Rent Now</button>
        </div>

       
    </div>
</div>
  )
}

export default ModelCard