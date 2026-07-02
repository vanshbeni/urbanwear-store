import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [activeTab, setActiveTab] = useState('description')

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if (!productData) {
    return (
      <div className='flex items-center justify-center min-h-[400px] text-gray-500 font-bold'>
        <div className='w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mr-3' />
        Loading product...
      </div>
    )
  }

  return (
    <div className='pt-10 transition-opacity ease-in duration-500 opacity-100 max-w-[1400px] mx-auto'>
      {/* Product Details Section */}
      <div className='flex gap-8 lg:gap-16 flex-col md:flex-row'>
        {/* Left Gallery Block */}
        <div className='flex-1 flex flex-col-reverse gap-4 sm:flex-row'>
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[20%] w-full gap-3 sm:max-h-[500px] scrollbar-thin'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                className={`w-[22%] sm:w-full rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
                  item === image ? 'border-brand-500 shadow-md scale-[1.02]' : 'border-gray-100 hover:border-gray-300'
                }`}
                alt=''
              />
            ))}
          </div>
          {/* Main Visual */}
          <div className='w-full sm:w-[80%] aspect-[3/4] rounded-3xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50'>
            <img className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500' src={image} alt={productData.name} />
          </div>
        </div>

        {/* Right Info Block */}
        <div className='flex-1 flex flex-col justify-center'>
          <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-xs font-bold w-fit mb-3 uppercase tracking-wider'>
            ✨ Premium Essential
          </div>

          <h1 className='font-display text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3'>{productData.name}</h1>
          
          {/* Stars */}
          <div className='flex items-center gap-1.5 mb-6'>
            <div className='flex items-center gap-0.5'>
              <img src={assets.star_icon} className='w-4 h-4' alt='' />
              <img src={assets.star_icon} className='w-4 h-4' alt='' />
              <img src={assets.star_icon} className='w-4 h-4' alt='' />
              <img src={assets.star_icon} className='w-4 h-4' alt='' />
              <img src={assets.star_dull_icon} className='w-4 h-4' alt='' />
            </div>
            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>(122 Customer Reviews)</p>
          </div>

          <p className='text-3xl font-black text-gray-900 mb-6'>
            {currency}{productData.price}
          </p>

          <p className='text-gray-500 text-sm leading-relaxed mb-8 font-medium max-w-md'>{productData.description}</p>

          {/* Size Selector */}
          <div className='flex flex-col gap-3.5 mb-8'>
            <p className='text-xs font-bold tracking-widest text-gray-400 uppercase'>Select Size</p>
            <div className='flex gap-2.5'>
              {productData.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`min-w-[50px] h-12 rounded-2xl font-bold text-xs tracking-wider border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                    item === size
                      ? 'border-brand-500 bg-brand-50/50 text-brand-600 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-400 text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className='w-full sm:w-64 h-14 bg-gray-900 text-white rounded-2xl font-bold text-sm tracking-wider cursor-pointer hover:bg-brand-600 shadow-lg shadow-gray-900/10 hover:shadow-brand-500/20 transition-all duration-300 transform hover:-translate-y-0.5'
          >
            ADD TO CART
          </button>

          <hr className='my-8 border-gray-100' />
          
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100/50'>
              <span className='text-xl'>🛡️</span>
              <p className='text-xs font-semibold text-gray-600 leading-tight'>100% Original product</p>
            </div>
            <div className='flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100/50'>
              <span className='text-xl'>💵</span>
              <p className='text-xs font-semibold text-gray-600 leading-tight'>Cash on delivery</p>
            </div>
            <div className='flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100/50'>
              <span className='text-xl'>🔄</span>
              <p className='text-xs font-semibold text-gray-600 leading-tight'>7 days easy return</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs description section */}
      <div className='mt-20 border-t border-gray-100 pt-10'>
        <div className='flex border-b border-gray-100 gap-8 mb-6'>
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-4 text-sm font-bold tracking-wider uppercase border-b-2 cursor-pointer transition-all ${
              activeTab === 'description' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-400 hover:text-gray-900'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm font-bold tracking-wider uppercase border-b-2 cursor-pointer transition-all ${
              activeTab === 'reviews' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-400 hover:text-gray-900'
            }`}
          >
            Reviews (122)
          </button>
        </div>

        {activeTab === 'description' ? (
          <div className='flex flex-col gap-4 text-sm text-gray-500 leading-relaxed max-w-3xl font-medium'>
            <p>
              An e-commerce platform designed to bring premium fashion to your doorstep. Built with
              quality and style in mind, BeliBeli offers a seamless shopping experience for the
              modern wardrobe.
            </p>
            <p>
              From everyday essentials to statement pieces, our collections are curated to help you
              express your unique style with confidence. We focus on lightweight, durable fabrics, and meticulous manufacturing standards.
            </p>
          </div>
        ) : (
          <div className='text-sm text-gray-500 font-medium'>
            Customer ratings are 4.9 out of 5 stars based on verified buyer satisfaction surveys. Reviews cover sizing compatibility, texture, and durability.
          </div>
        )}
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  )
}

export default Product
