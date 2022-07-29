import React, { useState } from 'react'
import Swal from 'sweetalert2'
import SubmitButton from './SubmitButton'
import TextInput from './TextInput'

const CreateNoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [remainingValue, setRemainingValue] = useState(50)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title || !body) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill title and body field',
      })
      return
    }
    addNote({ title, body })
    setTitle('')
    setBody('')
    setRemainingValue(50)

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Your note has been added',
    })
  }

  return (
    <div className='flex justify-center'>
      <div className='w-1/2 bg-slate-300 mt-20 p-10 rounded-xl'>
        <div className='w-full'>
          <h3 className='text-3xl font-semibold text-slate-800'>Create Note</h3>
          <form onSubmit={handleSubmit}>
            <TextInput
              label='Title'
              value={title}
              onChange={(e) => {
                setRemainingValue(50 - e.target.value.slice(0, 50).length)
                setTitle(e.target.value.slice(0, 50))
              }}
              remainingValue={remainingValue}
            />
            <TextInput
              label='Description'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <div className='flex justify-end'>
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNoteForm
