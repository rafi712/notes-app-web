import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar px-10 bg-slate-700'>
      <div className='flex-1'>
        <h3 className='btn btn-ghost text-slate-300 normal-case text-2xl'>
          Notes
        </h3>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
