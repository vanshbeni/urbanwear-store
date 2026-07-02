import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-200'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px] object-cover'
          src={assets.about_img}
          alt='About Forever'
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way
            people experience fashion. Our journey began with a simple idea: to provide high-quality
            apparel that combines style, comfort, and affordability.
          </p>
          <p>
            We source the finest materials and partner with skilled artisans to craft collections
            that are built to last. From everyday essentials to statement pieces, every product
            reflects our commitment to excellence.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice, quality, and value. We
            believe everyone deserves to look and feel their best without compromising on
            sustainability or craftsmanship.
          </p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm sm:text-base text-gray-600 mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>
            We meticulously select and inspect every product to ensure it meets our stringent
            quality standards.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-500'>
            With our user-friendly website and fast shipping, shopping has never been easier.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-500'>
            Our team of dedicated professionals is here to assist you every step of the way.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
