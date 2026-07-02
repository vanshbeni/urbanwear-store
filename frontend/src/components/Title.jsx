import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='flex flex-col items-center gap-2 mb-4'>
      <h2 className='font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase'>
        <span className='text-gray-400 font-medium'>{text1}</span>{' '}
        <span className='bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent'>{text2}</span>
      </h2>
      <div className='w-12 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full' />
    </div>
  )
}

export default Title