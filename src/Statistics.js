import React from 'react';

const Statistics = ({text, value}) => {
  return (
    <>
      <tr className='w-full'>
        <td className='bg-gray-100 border shadow-md w-1/2 pl-4 capitalize'>{text}:</td> 
        <td className='font-black bg-gray-100 border shadow-md w-1/2 text-center'>{value }</td>
      </tr>
    </>
  )
}

export default Statistics;