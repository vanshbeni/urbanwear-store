import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  return (
    <div className='group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full'>
      {/* Image Block */}
      <Link to={`/product/${id}`} className='block relative overflow-hidden aspect-[3/4] bg-gray-50'>
        <img
          className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
          loading='lazy'
        />
        {/* Hover quick action panel overlay */}
        <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
          <span className='px-4 py-2 bg-white text-gray-900 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
            View Details
          </span>
        </div>
      </Link>

      {/* Info Block */}
      <div className='p-4 flex flex-col flex-grow'>
        {/* Rating Stars Mock */}
        <div className='flex items-center gap-0.5 mb-1.5'>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className='w-3 h-3 text-amber-400 fill-current'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
          ))}
          <span className='text-[10px] text-gray-400 font-bold ml-1'>(4.9)</span>
        </div>

        <Link to={`/product/${id}`} className='hover:text-brand-600 transition-colors'>
          <h3 className='text-sm font-semibold text-gray-800 line-clamp-1 mb-1 leading-snug'>
            {name}
          </h3>
        </Link>

        {/* Pricing & Add Quick button */}
        <div className='mt-auto pt-2 flex items-center justify-between'>
          <p className='text-base font-black text-gray-950'>
            ${price}
          </p>
          <Link
            to={`/product/${id}`}
            className='p-2 bg-gray-50 hover:bg-brand-50 hover:text-brand-600 rounded-full transition-colors group/btn'
          >
            <svg
              className='w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
