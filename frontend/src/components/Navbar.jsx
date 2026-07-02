import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const {
    getCartCount,
    navigate,
    setShowSearch,
    showSearch,
    search,
    setSearch,
    token,
    logout,
  } = useContext(ShopContext)

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'COLLECTION', path: '/collection' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ]

  const cartCount = getCartCount()

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSearch ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-xs'
        }`}
      >
        <nav className='sticky top-0 z-40'>
          <div className='max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between'>
            <Link id='navbar-logo' to='/' className='flex items-center gap-0.5 hover:scale-105 transition-transform duration-300'>
              <span className='font-display text-2xl font-extrabold tracking-tight text-gray-900'>BeliBeli</span>
              <span className='text-brand-500 text-3xl font-black leading-none'>.</span>
            </Link>

            <ul className='hidden md:flex items-center gap-10 text-sm font-semibold tracking-wider text-gray-600'>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    id={`navbar-link-${item.name.toLowerCase()}`}
                    to={item.path}
                    className='flex flex-col items-center group relative py-2'
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`transition-colors duration-300 ${isActive ? 'text-brand-600 font-bold' : 'group-hover:text-black'}`}>
                          {item.name}
                        </span>
                        <div
                          className={`absolute bottom-0 h-[3px] bg-brand-500 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'w-full opacity-100'
                              : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-5'>
              <button
                id='navbar-search-btn'
                onClick={() => {
                  setShowSearch(!showSearch)
                  navigate('/collection')
                }}
                className='p-2.5 rounded-full hover:bg-gray-100/80 transition-all duration-300 cursor-pointer'
              >
                <img src={assets.search_icon} className='w-5 h-5 opacity-80 hover:opacity-100' alt='Search' />
              </button>

              <div className='relative group z-30'>
                <button
                  id='navbar-profile-menu'
                  className='p-2.5 rounded-full hover:bg-gray-100/80 transition-all duration-300 flex items-center justify-center cursor-pointer'
                >
                  <img src={assets.profile_icon} className='w-5 h-5 opacity-80' alt='Profile' />
                </button>

                <div className='absolute right-0 top-full pt-3 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
                  <div className='w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 px-1'>
                    {token ? (
                      <>
                        <button
                          id='navbar-orders-link'
                          onClick={() => navigate('/orders')}
                          className='w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50/50 rounded-xl cursor-pointer transition-all'
                        >
                          Orders
                        </button>
                        <button
                          id='navbar-logout-link'
                          onClick={logout}
                          className='w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50/50 rounded-xl cursor-pointer transition-all border-t border-gray-50 mt-1 pt-2'
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <button
                        id='navbar-profile-link'
                        onClick={() => navigate('/login')}
                        className='w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50/50 rounded-xl cursor-pointer transition-all'
                      >
                        Login
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <Link
                id='navbar-cart-btn'
                to='/cart'
                className='relative p-2.5 rounded-full hover:bg-gray-100/80 transition-all duration-300 flex items-center justify-center'
              >
                <img src={assets.cart_icon} className='w-5 h-5 opacity-80' alt='Cart' />
                {cartCount > 0 && (
                  <span className='absolute -top-0.5 -right-0.5 w-5.5 h-5.5 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-md animate-bounce'>
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                id='navbar-menu-toggle'
                onClick={() => setVisible(true)}
                className='md:hidden p-2.5 rounded-full hover:bg-gray-100/80 transition-all duration-300 cursor-pointer'
              >
                <img src={assets.menu_icon} className='w-5 h-5 opacity-80' alt='Menu' />
              </button>
            </div>
          </div>

          {showSearch && (
            <div className='border-t border-gray-100 px-6 lg:px-10 py-4'>
              <div className='max-w-[1400px] mx-auto flex items-center justify-center'>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className='w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-sm outline-none'
                  type='text'
                  placeholder='Search products...'
                  autoFocus
                />
              </div>
            </div>
          )}
        </nav>
      </div>

      <div className='h-20' />

      {visible && (
        <div
          onClick={() => setVisible(false)}
          className='fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden transition-all duration-300'
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 shadow-2xl border-l border-gray-100 flex flex-col ${
          visible ? 'w-[300px]' : 'w-0 overflow-hidden'
        }`}
      >
        <button
          id='navbar-menu-back'
          onClick={() => setVisible(false)}
          className='flex items-center gap-3 w-full px-6 py-5 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-left'
        >
          <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='Back' />
          <span className='font-semibold tracking-wider text-sm text-gray-800'>BACK</span>
        </button>

        <div className='flex flex-col'>
          {navLinks.map((item) => (
            <NavLink
              id={`navbar-link-${item.name.toLowerCase()}-mobile`}
              key={item.name}
              to={item.path}
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `px-6 py-4 border-b border-gray-100 transition-all duration-300 ${
                  isActive
                    ? 'bg-gray-50 text-black font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className='mt-auto border-t border-gray-100 bg-gray-50/50 p-6 flex flex-col gap-4'>
          <p className='text-xs font-bold tracking-wider text-gray-400 uppercase'>My Account</p>
          <div className='flex flex-col gap-3'>
            {token ? (
              <>
                <Link
                  id='navbar-orders-link-mobile'
                  to='/orders'
                  onClick={() => setVisible(false)}
                  className='text-sm font-medium text-gray-600 hover:text-black flex items-center gap-2 py-1'
                >
                  <img src={assets.dropdown_icon} className='w-4 h-4 opacity-75 rotate-270' alt='' />
                  Orders
                </Link>
                <button
                  id='navbar-logout-link-mobile'
                  onClick={() => {
                    logout()
                    setVisible(false)
                  }}
                  className='text-sm font-medium text-red-500 hover:text-red-700 text-left py-1 border-t border-gray-100/50 mt-1 pt-2'
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                id='navbar-profile-link-mobile'
                to='/login'
                onClick={() => setVisible(false)}
                className='text-sm font-medium text-gray-600 hover:text-black flex items-center gap-2 py-1'
              >
                <img src={assets.profile_icon} className='w-4 h-4 opacity-75' alt='' />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
