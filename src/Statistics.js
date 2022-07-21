import React from 'react';

const Statistics = ({text, value}) => {
  return (
    <>
      <tr className='px-4'>
        <td className='flex flex-col py-2 pl-2 my-4 bg-gray-100 border shadow-md'>{text}:</td> 
        <td className='font-black'>{value }</td>
      </tr>
    </>
  )
}

export default Statistics;