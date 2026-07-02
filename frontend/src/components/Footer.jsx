import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='mt-16 border-t border-gray-200'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt='Forever Logo' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Forever is a premium fashion destination offering curated collections for men, women,
            and kids. Quality craftsmanship meets modern style.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/collection'>Collection</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@forever.com</li>
            <li>123 Fashion Avenue, New York</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2026@ forever.com — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
