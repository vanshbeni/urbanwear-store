import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const onSubmitHandler = (event) => {
    event.preventDefault()
    toast.success('Message sent! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-gray-200'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          className='w-full md:max-w-[480px] object-cover'
          src={assets.contact_img}
          alt='Contact us'
        />
        <form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            123 Fashion Avenue
            <br />
            New York, NY 10001
            <br />
            United States
          </p>
          <p className='text-gray-500'>
            Tel: +1-212-456-7890
            <br />
            Email: contact@forever.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>
          <div className='w-full flex flex-col gap-4 mt-4'>
            <input
              className='border border-gray-300 rounded py-2 px-3 w-full outline-none'
              type='text'
              placeholder='Your name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              className='border border-gray-300 rounded py-2 px-3 w-full outline-none'
              type='email'
              placeholder='Your email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              className='border border-gray-300 rounded py-2 px-3 w-full outline-none resize-none'
              rows={5}
              placeholder='Your message'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button
              type='submit'
              className='bg-black text-white py-3 px-8 text-sm cursor-pointer hover:bg-gray-800 transition-colors'
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
