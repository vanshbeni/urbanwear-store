import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='relative my-6 lg:my-10 bg-radial from-slate-50 via-slate-100/30 to-white rounded-3xl overflow-hidden border border-gray-100/50 shadow-sm'>
      {/* Background Decorative Gradients */}
      <div className='absolute top-0 right-0 w-80 h-80 bg-brand-100/40 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row items-center min-h-[500px] lg:min-h-[600px] px-6 py-12 md:py-6 lg:px-16 gap-10 md:gap-4'>
        {/* Left Info Column */}
        <div className='w-full md:w-1/2 flex flex-col justify-center text-left z-10'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 font-semibold text-xs tracking-wider mb-6 w-fit animate-pulse'>
            <span>✨</span> NEW TRENDING COLLECTION
          </div>

          <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6'>
            Reimagine Your <br />
            <span className='bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent'>
              Daily Style.
            </span>
          </h1>

          <p className='text-gray-500 text-sm sm:text-base max-w-md mb-8 leading-relaxed font-medium'>
            Explore the curated collection of premium essentials designed to seamlessly elevate your lifestyle. Comfort meets modern aesthetics.
          </p>

          <div className='flex flex-wrap gap-4 mb-10'>
            <Link
              to='/collection'
              className='px-8 py-3.5 bg-gray-900 text-white rounded-2xl font-bold text-sm tracking-wider hover:bg-brand-600 shadow-lg shadow-gray-900/10 hover:shadow-brand-500/20 transition-all duration-300 transform hover:-translate-y-0.5'
            >
              EXPLORE COLLECTION
            </Link>
            <Link
              to='/about'
              className='px-6 py-3.5 bg-white text-gray-700 hover:text-black border border-gray-200 rounded-2xl font-bold text-sm tracking-wider hover:bg-gray-50 transition-all duration-300'
            >
              LEARN MORE
            </Link>
          </div>

          {/* Stats Bar */}
          <div className='grid grid-cols-3 gap-6 pt-8 border-t border-gray-100/80 max-w-sm'>
            <div>
              <p className='font-display text-2xl lg:text-3xl font-black text-gray-900'>12K+</p>
              <p className='text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1'>Products</p>
            </div>
            <div>
              <p className='font-display text-2xl lg:text-3xl font-black text-gray-900'>150+</p>
              <p className='text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1'>Brands</p>
            </div>
            <div>
              <p className='font-display text-2xl lg:text-3xl font-black text-gray-900'>99.4%</p>
              <p className='text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1'>Positive</p>
            </div>
          </div>
        </div>

        {/* Right Visual Column (Multi-Image Showcase) */}
        <div className='w-full md:w-1/2 flex items-center justify-center relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]'>
          {/* Main Large Styled Image Block */}
          <div className='relative w-4/5 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-700'>
            <img
              className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-700'
              src={assets.hero_img}
              alt='New Arrival Showcase'
            />
            {/* Visual Tint Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent pointer-events-none' />
          </div>

          {/* Decorative floating category pill */}
          <div className='absolute bottom-6 left-2 sm:left-6 glass px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-1000'>
            <div className='w-3 h-3 rounded-full bg-emerald-500 animate-ping' />
            <p className='text-xs font-bold text-gray-800 uppercase tracking-wider'>Premium Fit</p>
          </div>

          {/* Floating customer rating badge */}
          <div className='absolute top-10 right-2 sm:right-6 glass px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3.5 transform hover:scale-105 transition-all duration-300'>
            <div className='flex -space-x-2'>
              <div className='w-7 h-7 rounded-full bg-brand-200 border-2 border-white flex items-center justify-center text-[10px] font-bold'>A</div>
              <div className='w-7 h-7 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] font-bold'>B</div>
              <div className='w-7 h-7 rounded-full bg-violet-200 border-2 border-white flex items-center justify-center text-[10px] font-bold'>C</div>
            </div>
            <div>
              <p className='text-xs font-black text-gray-900 leading-none'>4.9/5 Rating</p>
              <p className='text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1'>from 2k+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
