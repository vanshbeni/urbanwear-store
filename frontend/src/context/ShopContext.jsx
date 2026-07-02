import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { products } from '../assets/assets'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const currency = '$'
  const delivery_fee = 10
  const navigate = useNavigate()

  const [cartItems, setCartItems] = useState({})
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) setToken(savedToken)

    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch {
        localStorage.removeItem('cartItems')
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size')
      return
    }

    const cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      } else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }

    setCartItems(cartData)
    toast.success('Added to cart')
  }

  const getCartCount = () => {
    let totalCount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item]
        }
      }
    }
    return totalCount
  }

  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems)

    if (quantity === 0) {
      delete cartData[itemId][size]
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId]
      }
    } else {
      cartData[itemId][size] = quantity
    }

    setCartItems(cartData)
  }

  const getCartAmount = () => {
    let totalAmount = 0
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items)
      if (!itemInfo) continue
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item]
        }
      }
    }
    return totalAmount
  }

  const login = (email) => {
    const mockToken = `token_${email}`
    localStorage.setItem('token', mockToken)
    setToken(mockToken)
    toast.success('Logged in successfully')
    navigate('/')
  }

  const register = (name, email) => {
    const mockToken = `token_${email}`
    localStorage.setItem('token', mockToken)
    localStorage.setItem('userName', name)
    setToken(mockToken)
    toast.success('Account created successfully')
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setToken('')
    toast.info('Logged out')
    navigate('/login')
  }

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    token,
    setToken,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    login,
    register,
    logout,
  }

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider
