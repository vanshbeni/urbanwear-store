import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import parcel_icon from '../assets/parcel_icon.svg'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { currency, token, navigate } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    setOrderData(orders)
  }, [token, navigate])

  if (orderData.length === 0) {
    return (
      <div className='border-t border-gray-200 pt-16 min-h-[50vh] flex flex-col items-center justify-center gap-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
        <p className='text-gray-500'>You have no orders yet.</p>
        <Link
          to='/collection'
          className='bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors'
        >
          START SHOPPING
        </Link>
      </div>
    )
  }

  return (
    <div className='border-t border-gray-200 pt-5'>
      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className='flex flex-col gap-6'>
        {orderData.map((order) => (
          <div
            key={order.id}
            className='border border-gray-200 rounded-lg p-4 sm:p-6 grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-[80px_2fr_1fr_1fr] items-center gap-4 text-sm text-gray-700'
          >
            <img className='w-12 sm:w-16' src={parcel_icon} alt='' />
            <div>
              <p className='font-medium text-gray-900'>{order.id}</p>
              <p className='text-gray-500 mt-1'>
                {order.address?.firstName} {order.address?.lastName}
              </p>
              <p className='text-gray-500'>
                {order.address?.street}, {order.address?.city}
              </p>
            </div>
            <div>
              <p className='font-medium'>
                {currency}
                {order.amount}.00
              </p>
              <p className='text-gray-500 mt-1 capitalize'>{order.paymentMethod}</p>
            </div>
            <div className='text-right sm:text-left'>
              <p className='text-green-600 font-medium'>{order.status}</p>
              <p className='text-gray-500 mt-1'>{order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
