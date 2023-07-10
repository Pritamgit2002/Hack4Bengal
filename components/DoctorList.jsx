import React,{ useEffect, useState } from 'react'
import axios from 'axios';


const DoctorList = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/doctor')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-[26px] mb-5 underline font-serif font-semibold'>Displaying All Doctor </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <ul className='bg-orange-300 border-2 border-red-500 font-semibold p-6 uppercase items-center flex flex-col tracking-widest'>
              <li className='gap-10 '>{item.name}</li>
              <li>{item.location}</li>
              <li className='font-bold'>Rating : {item.rating}</li>
              <li className='font-bold'>Specialist : {item.specialist}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DoctorList