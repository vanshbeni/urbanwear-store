import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    getCartAmount,
    delivery_fee,
    navigate,
  } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  if (cartData.length === 0) {
    return (
      <div className='pt-16 min-h-[60vh] flex flex-col items-center justify-center gap-6 max-w-[1400px] mx-auto'>
        <div className='w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-3xl mb-2'>🛒</div>
        <Title text1={'YOUR'} text2={'CART'} />
        <p className='text-gray-400 font-semibold text-sm -mt-2'>Your shopping cart is currently empty.</p>
        <Link
          to='/collection'
          className='px-8 py-3.5 bg-gray-900 text-white rounded-2xl font-bold text-sm tracking-wider hover:bg-brand-600 shadow-lg shadow-gray-900/10 hover:shadow-brand-500/20 transition-all'
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    )
  }

  return (
    <div className='pt-10 max-w-[1400px] mx-auto px-1'>
      <div className='mb-8'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
        {/* Left List Column */}
        <div className='w-full lg:w-2/3 flex flex-col gap-4'>
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            if (!productData) return null

            return (
              <div
                key={index}
                className='p-5 bg-white border border-gray-100 rounded-3xl shadow-xs flex items-center justify-between gap-4 hover:shadow-md transition-shadow duration-300'
              >
                <div className='flex items-center gap-4 sm:gap-6 flex-1'>
                  <div className='w-20 sm:w-24 aspect-[3/4] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0'>
                    <img
                      className='w-full h-full object-cover'
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm sm:text-base font-bold text-gray-900 truncate'>{productData.name}</p>
                    <div className='flex items-center gap-4 mt-2'>
                      <span className='text-base font-extrabold text-brand-600'>
                        {currency}{productData.price}
                      </span>
                      <span className='px-3 py-1 rounded-xl bg-gray-50 border border-gray-100 text-[11px] font-black text-gray-500 uppercase tracking-widest'>
                        Size: {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-4 sm:gap-8'>
                  <div className='flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white'>
                    <button
                      onClick={() => updateQuantity(item._id, item.size, Math.max(0, item.quantity - 1))}
                      className='px-3 py-1.5 hover:bg-gray-50 text-gray-500 font-bold cursor-pointer'
                    >
                      -
                    </button>
                    <span className='px-3 text-xs font-bold text-gray-800 w-8 text-center'>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                      className='px-3 py-1.5 hover:bg-gray-50 text-gray-500 font-bold cursor-pointer'
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='p-2.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-colors cursor-pointer'
                    title='Remove item'
                  >
                    <img
                      className='w-4 h-4 filter invert-[38%] sepia-[98%] saturate-[2857%] hue-rotate-[326deg] brightness-[98%] contrast-[92%]'
                      src={assets.bin_icon}
                      alt='Remove'
                    />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Summary Column */}
        <div className='w-full lg:w-1/3 bg-gray-50 border border-gray-100 rounded-[2rem] p-6 sm:p-8 lg:sticky lg:top-24'>
          <h3 className='font-display text-lg font-black text-gray-900 mb-6 uppercase tracking-wider'>Order Summary</h3>
          
          <div className='flex flex-col gap-4 text-sm font-medium text-gray-600'>
            <div className='flex justify-between pb-3 border-b border-gray-200/80'>
              <p>Subtotal</p>
              <p className='font-bold text-gray-950'>
                {currency}{getCartAmount()}.00
              </p>
            </div>
            <div className='flex justify-between pb-3 border-b border-gray-200/80'>
              <p>Shipping Estimate</p>
              <p className='font-bold text-gray-950'>
                {currency}{delivery_fee}.00
              </p>
            </div>
            <div className='flex justify-between pt-2 text-base font-bold text-gray-900'>
              <p>Order Total</p>
              <p className='font-black text-brand-600 text-lg'>
                {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/place-order')}
            className='w-full h-13 mt-8 bg-gray-900 hover:bg-brand-600 text-white rounded-2xl font-bold text-sm tracking-wider transition-all shadow-md shadow-gray-900/5 hover:shadow-brand-500/20 transform hover:-translate-y-0.5 cursor-pointer'
          >
            PROCEED TO CHECKOUT
          </button>
          
          <div className='mt-6 flex items-center justify-center gap-2 text-xs font-bold text-gray-400'>
            <span>🔒</span> Secure 256-bit SSL Checkout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
