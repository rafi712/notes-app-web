import React from 'react'

const TextInput = ({ label, value, onChange, remainingValue }) => {
  return (
    <div className='form-control w-full mt-4 '>
      <label className='label'>
        <span className='label-text text-md text-slate-500'>{label}</span>
        {label === 'Title' ? (
          <span className='label-text-alt text-md text-slate-500'>
            {remainingValue}/50
          </span>
        ) : null}
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextInput
