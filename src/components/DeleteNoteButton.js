import React from 'react'
import Swal from 'sweetalert2'
import { MdDeleteOutline } from 'react-icons/md'

const DeleteNoteButton = ({ id, deleteNote }) => {
  const deleteAlert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id)
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  return (
    <button
      className='btn btn-primary w-1/2 bg-rose-600 border-none hover:bg-red-600'
      onClick={deleteAlert}
    >
      <MdDeleteOutline size={'2em'} />
    </button>
  )
}

export default DeleteNoteButton
